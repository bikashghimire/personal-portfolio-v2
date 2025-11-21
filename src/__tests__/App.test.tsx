import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '@/App';

// Mock the components to isolate App logic
vi.mock('@/components/Header', () => ({
  default: () => <div data-testid="header">Header</div>,
}));

vi.mock('@/components/Hero', () => ({
  default: () => <div data-testid="hero">Hero</div>,
}));

vi.mock('@/components/Skills', () => ({
  default: () => <div data-testid="skills">Skills</div>,
}));

vi.mock('@/components/About', () => ({
  default: () => <div data-testid="about">About</div>,
}));

vi.mock('@/components/Experience', () => ({
  default: () => <div data-testid="experience">Experience</div>,
}));

vi.mock('@/components/Education', () => ({
  default: () => <div data-testid="education">Education</div>,
}));

vi.mock('@/components/Certifications', () => ({
  default: () => <div data-testid="certifications">Certifications</div>,
}));

vi.mock('@/components/Projects', () => ({
  default: () => <div data-testid="projects">Projects</div>,
}));

vi.mock('@/components/Contact', () => ({
  default: () => <div data-testid="contact">Contact</div>,
}));

vi.mock('@/components/Footer', () => ({
  default: () => <div data-testid="footer">Footer</div>,
}));

vi.mock('@/components/SEO', () => ({
  default: () => <div data-testid="seo">SEO</div>,
}));

describe('App', () => {
  beforeEach(() => {
    // Reset scroll position
    window.scrollY = 0;
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders all main sections', () => {
    render(<App />);

    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('hero')).toBeInTheDocument();
    expect(screen.getByTestId('skills')).toBeInTheDocument();
    expect(screen.getByTestId('about')).toBeInTheDocument();
    expect(screen.getByTestId('experience')).toBeInTheDocument();
    expect(screen.getByTestId('education')).toBeInTheDocument();
    expect(screen.getByTestId('certifications')).toBeInTheDocument();
    expect(screen.getByTestId('projects')).toBeInTheDocument();
    expect(screen.getByTestId('contact')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });

  it('shows scroll to top button when scrolled down', async () => {
    render(<App />);

    // Initially, scroll to top button should not be visible
    expect(screen.queryByLabelText('Scroll to top')).not.toBeInTheDocument();

    // Simulate scroll
    Object.defineProperty(window, 'scrollY', {
      writable: true,
      configurable: true,
      value: 500,
    });

    // Trigger scroll event
    window.dispatchEvent(new Event('scroll'));

    // Wait for the button to appear
    await waitFor(() => {
      expect(screen.getByLabelText('Scroll to top')).toBeInTheDocument();
    });
  });

  it('hides scroll to top button when at top', async () => {
    render(<App />);

    // Scroll down first
    Object.defineProperty(window, 'scrollY', {
      writable: true,
      configurable: true,
      value: 500,
    });
    window.dispatchEvent(new Event('scroll'));

    await waitFor(() => {
      expect(screen.getByLabelText('Scroll to top')).toBeInTheDocument();
    });

    // Scroll back to top
    Object.defineProperty(window, 'scrollY', {
      writable: true,
      configurable: true,
      value: 0,
    });
    window.dispatchEvent(new Event('scroll'));

    await waitFor(() => {
      expect(screen.queryByLabelText('Scroll to top')).not.toBeInTheDocument();
    });
  });

  it('scrolls to top when scroll to top button is clicked', async () => {
    const user = userEvent.setup();
    const scrollToSpy = vi.spyOn(window, 'scrollTo').mockImplementation(() => {});

    render(<App />);

    // Scroll down
    Object.defineProperty(window, 'scrollY', {
      writable: true,
      configurable: true,
      value: 500,
    });
    window.dispatchEvent(new Event('scroll'));

    await waitFor(() => {
      expect(screen.getByLabelText('Scroll to top')).toBeInTheDocument();
    });

    // Click scroll to top button
    const scrollButton = screen.getByLabelText('Scroll to top');
    await user.click(scrollButton);

    expect(scrollToSpy).toHaveBeenCalledWith({
      top: 0,
      behavior: 'smooth',
    });

    scrollToSpy.mockRestore();
  });

  it('injects Plausible analytics script', async () => {
    const appendChildSpy = vi.spyOn(document.head, 'appendChild').mockImplementation(() => {
      return document.createElement('script');
    });

    render(<App />);

    await waitFor(() => {
      expect(appendChildSpy).toHaveBeenCalled();
    });

    const scriptElement = appendChildSpy.mock.calls[0][0] as HTMLScriptElement;
    expect(scriptElement.src).toBe('https://plausible.io/js/script.js');
    expect(scriptElement.getAttribute('data-domain')).toBe(window.location.hostname);
    expect(scriptElement.defer).toBe(true);

    appendChildSpy.mockRestore();
  });
});
