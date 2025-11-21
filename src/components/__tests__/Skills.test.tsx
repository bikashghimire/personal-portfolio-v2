import { describe, it, expect, vi } from 'vitest';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Skills from '../Skills';
import { render as customRender } from '@/test/utils/test-utils';

describe('Skills', () => {
  it('renders skills section with title', () => {
    customRender(<Skills />);

    expect(screen.getByText('Technical Skills')).toBeInTheDocument();
    expect(screen.getByText(/technologies and tools/i)).toBeInTheDocument();
  });

  it('renders category tabs', () => {
    customRender(<Skills />);

    expect(screen.getByRole('tab', { name: /frontend/i })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: /backend/i })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: /database/i })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: /cloud/i })).toBeInTheDocument();
  });

  it('shows frontend skills by default', () => {
    customRender(<Skills />);

    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    expect(screen.getByText('JavaScript')).toBeInTheDocument();
  });

  it('switches to backend category when clicked', async () => {
    const user = userEvent.setup();
    customRender(<Skills />);

    const backendTab = screen.getByRole('tab', { name: /backend/i });
    await user.click(backendTab);

    await waitFor(() => {
      expect(screen.getByText('Node.js')).toBeInTheDocument();
      expect(screen.getByText('Express.js')).toBeInTheDocument();
    });
  });

  it('switches to database category when clicked', async () => {
    const user = userEvent.setup();
    customRender(<Skills />);

    const databaseTab = screen.getByRole('tab', { name: /database/i });
    await user.click(databaseTab);

    await waitFor(() => {
      expect(screen.getByText('MongoDB')).toBeInTheDocument();
      expect(screen.getByText('PostgreSQL')).toBeInTheDocument();
    });
  });

  it('switches to cloud category when clicked', async () => {
    const user = userEvent.setup();
    customRender(<Skills />);

    const cloudTab = screen.getByRole('tab', { name: /cloud/i });
    await user.click(cloudTab);

    await waitFor(() => {
      expect(screen.getByText('AWS')).toBeInTheDocument();
      expect(screen.getByText('Docker')).toBeInTheDocument();
    });
  });

  it('renders additional technologies section', () => {
    customRender(<Skills />);

    expect(screen.getByText('Additional Technologies')).toBeInTheDocument();
    expect(screen.getByText('Storybook')).toBeInTheDocument();
    expect(screen.getByText('Jest')).toBeInTheDocument();
  });

  it('handles keyboard navigation on tabs', async () => {
    const user = userEvent.setup();
    customRender(<Skills />);

    const backendTab = screen.getByRole('tab', { name: /backend/i });
    backendTab.focus();
    await user.keyboard('{Enter}');

    await waitFor(() => {
      expect(screen.getByText('Node.js')).toBeInTheDocument();
    });
  });
});

