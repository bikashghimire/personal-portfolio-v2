import { describe, it, expect, vi, beforeEach } from 'vitest';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeToggle } from '../ThemeToggle';
import { render as customRender } from '@/test/utils/test-utils';

describe('ThemeToggle', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorage.clear();
  });

  it('renders theme toggle button', () => {
    customRender(<ThemeToggle />);

    const toggleButton = screen.getByRole('button', { name: /toggle theme/i });
    expect(toggleButton).toBeInTheDocument();
  });

  it('opens dropdown menu when clicked', async () => {
    const user = userEvent.setup();
    customRender(<ThemeToggle />);

    const toggleButton = screen.getByRole('button', { name: /toggle theme/i });
    await user.click(toggleButton);

    await waitFor(() => {
      expect(screen.getByText('Light')).toBeInTheDocument();
      expect(screen.getByText('Dark')).toBeInTheDocument();
      expect(screen.getByText('System')).toBeInTheDocument();
    });
  });

  it('changes theme to light when light option is clicked', async () => {
    const user = userEvent.setup();
    customRender(<ThemeToggle />);

    const toggleButton = screen.getByRole('button', { name: /toggle theme/i });
    await user.click(toggleButton);

    await waitFor(() => {
      expect(screen.getByText('Light')).toBeInTheDocument();
    });

    const lightOption = screen.getByText('Light');
    await user.click(lightOption);

    await waitFor(() => {
      expect(localStorage.getItem('portfolio-theme')).toBe('light');
    });
  });

  it('changes theme to dark when dark option is clicked', async () => {
    const user = userEvent.setup();
    customRender(<ThemeToggle />);

    const toggleButton = screen.getByRole('button', { name: /toggle theme/i });
    await user.click(toggleButton);

    await waitFor(() => {
      expect(screen.getByText('Dark')).toBeInTheDocument();
    });

    const darkOption = screen.getByText('Dark');
    await user.click(darkOption);

    await waitFor(() => {
      expect(localStorage.getItem('portfolio-theme')).toBe('dark');
    });
  });

  it('changes theme to system when system option is clicked', async () => {
    const user = userEvent.setup();
    customRender(<ThemeToggle />);

    const toggleButton = screen.getByRole('button', { name: /toggle theme/i });
    await user.click(toggleButton);

    await waitFor(() => {
      expect(screen.getByText('System')).toBeInTheDocument();
    });

    const systemOption = screen.getByText('System');
    await user.click(systemOption);

    await waitFor(() => {
      expect(localStorage.getItem('portfolio-theme')).toBe('system');
    });
  });
});

