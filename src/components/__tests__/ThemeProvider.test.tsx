import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ThemeProvider, useTheme } from '../ThemeProvider';

// Test component that uses the theme
const TestComponent = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <div data-testid="theme">{theme}</div>
      <button onClick={() => setTheme('light')}>Set Light</button>
      <button onClick={() => setTheme('dark')}>Set Dark</button>
      <button onClick={() => setTheme('system')}>Set System</button>
    </div>
  );
};

describe('ThemeProvider', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.classList.remove('light', 'dark');
  });

  it('provides default theme', () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    expect(screen.getByTestId('theme')).toHaveTextContent('system');
  });

  it('uses defaultTheme prop when provided', () => {
    render(
      <ThemeProvider defaultTheme="dark">
        <TestComponent />
      </ThemeProvider>
    );

    expect(screen.getByTestId('theme')).toHaveTextContent('dark');
  });

  it('loads theme from localStorage', () => {
    localStorage.setItem('portfolio-theme', 'light');

    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    expect(screen.getByTestId('theme')).toHaveTextContent('light');
  });

  it('applies theme class to document element', () => {
    render(
      <ThemeProvider defaultTheme="dark">
        <TestComponent />
      </ThemeProvider>
    );

    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });

  it('uses default state when useTheme is used outside provider', () => {
    // Note: Due to how createContext works with initialState,
    // useContext outside a provider returns initialState, not undefined.
    // So the hook doesn't throw an error, but uses the default state.
    const ComponentWithoutProvider = () => {
      const { theme } = useTheme();
      return <div data-testid="theme">{theme}</div>;
    };

    // Component should render successfully with default state
    render(<ComponentWithoutProvider />);
    
    // Should use the default 'system' theme from initialState
    expect(screen.getByTestId('theme')).toHaveTextContent('system');
  });
});

