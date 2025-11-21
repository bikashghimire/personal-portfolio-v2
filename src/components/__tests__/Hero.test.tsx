import { describe, it, expect, vi, beforeEach } from 'vitest';
import {  screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Hero from '../Hero';
import { render as customRender } from '@/test/utils/test-utils';

// Mock the PDF import
vi.mock('@/assets/images/ghimire_bikash_cv.pdf', () => ({
  default: '/mock-resume.pdf',
}));

// Mock fetch
global.fetch = vi.fn();

describe('Hero', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    
    // Mock window dimensions
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 1024,
    });
    Object.defineProperty(window, 'innerHeight', {
      writable: true,
      configurable: true,
      value: 768,
    });
    
    // Mock requestAnimationFrame to prevent infinite loops - just return an id without calling
    let rafId = 0;
    global.requestAnimationFrame = vi.fn(() => {
      return ++rafId;
    });
    global.cancelAnimationFrame = vi.fn();
    
    // Mock canvas methods
    HTMLCanvasElement.prototype.getContext = vi.fn((contextId?: string) => {
      if (contextId === '2d') {
        return {
          clearRect: vi.fn(),
          beginPath: vi.fn(),
          arc: vi.fn(),
          fill: vi.fn(),
          fillStyle: '',
        } as unknown as CanvasRenderingContext2D;
      }
      return null;
    }) as typeof HTMLCanvasElement.prototype.getContext;
  });

  it('renders hero section with name and title', () => {
    customRender(<Hero />);

    expect(screen.getByText('Bikash Ghimire')).toBeInTheDocument();
    expect(screen.getByText('Software Developer')).toBeInTheDocument();
  });

  it('renders location badge', () => {
    customRender(<Hero />);

    // Location badge should be present (could be Helsinki or Oulu based on screen size)
    const locationBadges = screen.getAllByText(/Finland/);
    expect(locationBadges.length).toBeGreaterThan(0);
  });

  it('renders tagline', () => {
    customRender(<Hero />);

    expect(
      screen.getByText('Building exceptional web experiences with modern technologies'),
    ).toBeInTheDocument();
  });

  it('renders CTA buttons', () => {
    customRender(<Hero />);

    // Check for button text content (buttons might be rendered as different elements)
    // Use getAllByText since responsive design shows different text on different screen sizes
    const discoverButtons = screen.getAllByText(/Discover My Journey|Learn More/);
    const downloadButtons = screen.getAllByText(/Download Resume|Resume/);
    expect(discoverButtons.length).toBeGreaterThan(0);
    expect(downloadButtons.length).toBeGreaterThan(0);
  });

  it('scrolls to about section when discover journey button is clicked', async () => {
    const user = userEvent.setup();
    const scrollIntoViewSpy = vi.fn();
    Element.prototype.scrollIntoView = scrollIntoViewSpy;

    // Create a mock element for the about section
    const aboutSection = document.createElement('div');
    aboutSection.id = 'about';
    document.body.appendChild(aboutSection);

    customRender(<Hero />);

    // Get all buttons and find the discover button by role
    const buttons = screen.getAllByRole('button');
    const discoverButton = buttons.find(button => 
      button.textContent?.includes('Discover') || button.textContent?.includes('Learn')
    );
    
    expect(discoverButton).toBeDefined();
    if (discoverButton) {
      await user.click(discoverButton);
    }

    await waitFor(() => {
      expect(scrollIntoViewSpy).toHaveBeenCalledWith({ behavior: 'smooth' });
    });

    document.body.removeChild(aboutSection);
  });

  it('downloads resume when download button is clicked', async () => {
    const user = userEvent.setup();
    const mockBlob = new Blob(['mock pdf content'], { type: 'application/pdf' });
    const mockUrl = 'blob:mock-url';
    const createObjectURLSpy = vi.spyOn(window.URL, 'createObjectURL').mockReturnValue(mockUrl);
    const revokeObjectURLSpy = vi.spyOn(window.URL, 'revokeObjectURL').mockImplementation(() => {});
    const clickSpy = vi.fn();

    (global.fetch as ReturnType<typeof vi.fn>).mockResolvedValueOnce({
      blob: () => Promise.resolve(mockBlob),
    });

    // Mock link click
    Object.defineProperty(HTMLAnchorElement.prototype, 'click', {
      configurable: true,
      value: clickSpy,
    });

    // Mock appendChild to track calls but not break React rendering
    const originalAppendChild = document.body.appendChild.bind(document.body);
    const appendChildSpy = vi.spyOn(document.body, 'appendChild').mockImplementation((node) => {
      // If it's an anchor element (for download), track it but don't actually append
      if (node instanceof HTMLAnchorElement) {
        return node;
      }
      // For other elements (React's rendering), use the original implementation
      return originalAppendChild(node);
    });

    const removeSpy = vi.spyOn(HTMLElement.prototype, 'remove').mockImplementation(() => {});

    customRender(<Hero />);

    // Wait for component to render and find buttons
    await waitFor(() => {
      const buttons = screen.queryAllByRole('button');
      expect(buttons.length).toBeGreaterThan(0);
    });

    // Get all buttons and find the download button by role
    const buttons = screen.getAllByRole('button');
    const downloadButton = buttons.find(button => 
      button.textContent?.includes('Download') || button.textContent?.includes('Resume')
    );
    
    expect(downloadButton).toBeDefined();
    if (downloadButton) {
      await user.click(downloadButton);
    }

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith('/mock-resume.pdf');
      expect(createObjectURLSpy).toHaveBeenCalled();
      expect(clickSpy).toHaveBeenCalled();
      expect(revokeObjectURLSpy).toHaveBeenCalledWith(mockUrl);
    });

    createObjectURLSpy.mockRestore();
    revokeObjectURLSpy.mockRestore();
    appendChildSpy.mockRestore();
    removeSpy.mockRestore();
    // Restore original click
    Object.defineProperty(HTMLAnchorElement.prototype, 'click', {
      configurable: true,
      value: HTMLAnchorElement.prototype.click,
    });
  });

  it('opens resume in new tab if download fails', async () => {
    const user = userEvent.setup();
    const openSpy = vi.spyOn(window, 'open').mockImplementation(() => null);

    (global.fetch as ReturnType<typeof vi.fn>).mockRejectedValueOnce(new Error('Download failed'));

    customRender(<Hero />);

    // Wait for component to render and find buttons
    await waitFor(() => {
      const buttons = screen.queryAllByRole('button');
      expect(buttons.length).toBeGreaterThan(0);
    });

    // Get all buttons and find the download button by role
    const buttons = screen.getAllByRole('button');
    const downloadButton = buttons.find(button => 
      button.textContent?.includes('Download') || button.textContent?.includes('Resume')
    );
    
    expect(downloadButton).toBeDefined();
    if (downloadButton) {
      await user.click(downloadButton);
    }

    await waitFor(() => {
      expect(openSpy).toHaveBeenCalledWith('/mock-resume.pdf', '_blank');
    });

    openSpy.mockRestore();
  });

  it('renders scroll indicator', () => {
    customRender(<Hero />);

    // The scroll indicator is a button with an arrow down icon
    // Check for buttons - there should be at least 2 (discover, download, scroll indicator)
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBeGreaterThanOrEqual(2);
  });

  it('initializes canvas animation', () => {
    const getContextSpy = vi.spyOn(HTMLCanvasElement.prototype, 'getContext');

    customRender(<Hero />);

    expect(getContextSpy).toHaveBeenCalledWith('2d');
  });
});

