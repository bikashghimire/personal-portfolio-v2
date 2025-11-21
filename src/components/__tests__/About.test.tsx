import { describe, it, expect, vi } from 'vitest';
import { screen } from '@testing-library/react';
import About from '../About';
import { render as customRender } from '@/test/utils/test-utils';

// Mock the portfolio data
vi.mock('@/data/portfolio', () => ({
  skills: [
    {
      category: 'Frontend',
      items: ['React', 'TypeScript', 'JavaScript'],
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Express'],
    },
  ],
}));

describe('About', () => {
  it('renders about section with title and subtitle', () => {
    customRender(<About />);

    // Check for section title (translated)
    const section = screen.getByRole('region', { name: /about/i }) || document.getElementById('about');
    expect(section).toBeInTheDocument();
  });

  it('renders my journey card', () => {
    customRender(<About />);

    // Check for "My Journey" heading
    expect(screen.getByText(/my journey|my story/i)).toBeInTheDocument();
  });

  it('renders what I value card', () => {
    customRender(<About />);

    // Check for "What I Value" heading
    expect(screen.getByText(/what i value|values/i)).toBeInTheDocument();
  });

  it('renders technical expertise section', () => {
    customRender(<About />);

    // Check for technical expertise heading
    expect(screen.getByText(/technical expertise|technologies/i)).toBeInTheDocument();
  });

  it('renders skill categories', () => {
    customRender(<About />);

    // Check for skill categories from mocked data
    expect(screen.getByText('Frontend')).toBeInTheDocument();
    expect(screen.getByText('Backend')).toBeInTheDocument();
  });

  it('renders skills within categories', () => {
    customRender(<About />);

    // Check for skills from mocked data
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    expect(screen.getByText('Node.js')).toBeInTheDocument();
  });

  it('displays skills count', () => {
    customRender(<About />);

    // Check for technologies count (5 skills total in mock)
    expect(screen.getByText(/5\+ technologies/i)).toBeInTheDocument();
  });
});

