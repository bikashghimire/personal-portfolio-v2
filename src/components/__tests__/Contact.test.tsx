import { describe, it, expect, vi, beforeEach } from 'vitest';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Contact from '../Contact';
import { render as customRender } from '@/test/utils/test-utils';

// Mock Formspree
vi.mock('@formspree/react', () => ({
  useForm: vi.fn(() => [
    {
      succeeded: false,
      submitting: false,
      errors: [],
    },
    vi.fn(),
  ]),
  ValidationError: ({ errors }: { errors: unknown[] }) => 
    errors.length > 0 ? <div>Validation Error</div> : null,
}));

// Mock portfolio data
vi.mock('@/data/portfolio', () => ({
  personalInfo: {
    email: 'test@example.com',
    location: 'Helsinki, Finland',
    github: 'https://github.com/test',
    linkedin: 'https://linkedin.com/in/test',
  },
}));

describe('Contact', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders contact section with title', () => {
    customRender(<Contact />);

    expect(screen.getByText(/let's connect/i)).toBeInTheDocument();
    expect(screen.getByText(/ready to collaborate/i)).toBeInTheDocument();
  });

  it('renders contact information', () => {
    customRender(<Contact />);

    expect(screen.getByText('Get In Touch')).toBeInTheDocument();
    expect(screen.getByText('test@example.com')).toBeInTheDocument();
    expect(screen.getByText('Helsinki, Finland')).toBeInTheDocument();
  });

  it('renders social links', () => {
    customRender(<Contact />);

    expect(screen.getByText('Follow Me')).toBeInTheDocument();
    
    const githubLink = screen.getByLabelText('GitHub');
    const linkedinLink = screen.getByLabelText('LinkedIn');
    
    expect(githubLink).toBeInTheDocument();
    expect(linkedinLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute('href', 'https://github.com/test');
    expect(linkedinLink).toHaveAttribute('href', 'https://linkedin.com/in/test');
  });

  it('renders contact form', () => {
    customRender(<Contact />);

    expect(screen.getByText('Send a Message')).toBeInTheDocument();
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument();
  });

  it('allows typing in form fields', async () => {
    const user = userEvent.setup();
    customRender(<Contact />);

    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const messageInput = screen.getByLabelText(/message/i);

    await user.type(nameInput, 'John Doe');
    await user.type(emailInput, 'john@example.com');
    await user.type(messageInput, 'Test message');

    expect(nameInput).toHaveValue('John Doe');
    expect(emailInput).toHaveValue('john@example.com');
    expect(messageInput).toHaveValue('Test message');
  });

  it('shows email link with mailto', () => {
    customRender(<Contact />);

    const emailLink = screen.getByText('test@example.com').closest('a');
    expect(emailLink).toHaveAttribute('href', 'mailto:test@example.com');
  });
});

