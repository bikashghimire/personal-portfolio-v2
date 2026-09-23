import { describe, it, expect, vi, beforeEach } from 'vitest';
import { screen, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Header from '../Header';
import { render as customRender } from '@/test/utils/test-utils';

// Mock the PDF import
vi.mock('@/assets/images/ghimire_bikash_cv.pdf', () => ({
  default: '/mock-resume.pdf',
}));

// Mock fetch
global.fetch = vi.fn();

describe('Header', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    window.scrollY = 0;
  });

  it('renders header with logo', () => {
    customRender(<Header />);

    expect(screen.getByText('Bikash Ghimire')).toBeInTheDocument();
  });

  it('renders navigation items', () => {
    customRender(<Header />);

    // Navigation items might be in desktop or mobile menu
    expect(screen.getAllByText('About').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Experience').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Education').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Projects').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Contact').length).toBeGreaterThan(0);
  });

  it('shows scrolled state when window is scrolled', async () => {
    customRender(<Header />);

    // Initially header should be transparent
    const header = screen.getByRole('banner');
    expect(header).toHaveClass('bg-transparent');

    // Simulate scroll
    act(() => {
      Object.defineProperty(window, 'scrollY', {
        writable: true,
        configurable: true,
        value: 100,
      });
      window.dispatchEvent(new Event('scroll'));
    });

    await waitFor(() => {
      expect(header).toHaveClass('bg-white');
    });
  });

  it('opens and closes mobile menu', async () => {
    const user = userEvent.setup();

    // Mock window width to be mobile
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 500,
    });

    customRender(<Header />);

    const menuButton = screen.getByLabelText('Open menu');
    expect(menuButton).toBeInTheDocument();

    // Open menu
    await user.click(menuButton);

    await waitFor(() => {
      expect(screen.getByLabelText('Close menu')).toBeInTheDocument();
    });

    // Close menu
    const closeButton = screen.getByLabelText('Close menu');
    await user.click(closeButton);

    await waitFor(() => {
      expect(screen.getByLabelText('Open menu')).toBeInTheDocument();
    });
  });

  it('scrolls to section when nav item is clicked', async () => {
    const user = userEvent.setup();
    const scrollIntoViewSpy = vi.fn();
    Element.prototype.scrollIntoView = scrollIntoViewSpy;

    // Create a mock element for the section
    const aboutSection = document.createElement('div');
    aboutSection.id = 'about';
    document.body.appendChild(aboutSection);

    customRender(<Header />);

    const aboutLinks = screen.getAllByText('About');
    // Click the first About link (desktop nav)
    await user.click(aboutLinks[0]);

    await waitFor(() => {
      expect(scrollIntoViewSpy).toHaveBeenCalledWith({ behavior: 'smooth' });
    });

    document.body.removeChild(aboutSection);
  });

  it('opens external links in new tab', async () => {
    const user = userEvent.setup();
    const openSpy = vi.spyOn(window, 'open').mockImplementation(() => null);

    customRender(<Header />);

    const blogLinks = screen.getAllByText('Blog');
    // Click the first Blog link
    if (blogLinks.length > 0) {
      await user.click(blogLinks[0]);
    }

    await waitFor(() => {
      expect(openSpy).toHaveBeenCalledWith(
        'https://bikashdev.netlify.app/blog',
        '_blank',
      );
    });

    openSpy.mockRestore();
  });

  it('renders a downloadable resume link', () => {
    customRender(<Header />);
    expect(screen.getByText('Download Resume').closest('a')).toHaveAttribute('download', 'ghimire_bikash_cv.pdf');
  });

  it('scrolls to top when logo is clicked', async () => {
    const user = userEvent.setup();
    const scrollToSpy = vi.spyOn(window, 'scrollTo').mockImplementation(() => {});

    // Set a hash in the URL
    window.location.hash = '#about';

    customRender(<Header />);

    // Logo is a button with aria-label "Go to top"
    const logo = screen.getByRole('button', { name: 'Go to top' });
    await user.click(logo);

    await waitFor(() => {
      expect(scrollToSpy).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
    });

    scrollToSpy.mockRestore();
  });

  it('renders social media links', () => {
    customRender(<Header />);

    // Social links are in the mobile menu (which is hidden by default)
    // They're also in desktop view but might not be visible in test environment
    // Check if they exist in the DOM even if not visible
    const allSocialLinks = document.querySelectorAll('a[href*="github"], a[href*="linkedin"], a[href*="mailto"]');
    
    // At least some social links should be present in the DOM
    expect(allSocialLinks.length).toBeGreaterThan(0);
  });
});
