# Testing Guide

This project uses **Vitest** and **React Testing Library** for testing.

## Setup

The testing setup includes:
- **Vitest** - Fast unit test framework
- **React Testing Library** - React component testing utilities
- **jsdom** - DOM environment for testing
- **@testing-library/jest-dom** - Custom Jest matchers for DOM elements
- **@testing-library/user-event** - User interaction simulation

## Running Tests

```bash
# Run tests in watch mode
npm test

# Run tests once
npm run test:run

# Run tests with UI
npm run test:ui

# Run tests with coverage
npm run test:coverage
```

## Test Structure

Tests are organized as follows:
- `src/__tests__/` - App-level tests
- `src/components/__tests__/` - Component tests
- `src/contexts/__tests__/` - Context/hook tests
- `src/test/` - Test utilities and setup files

## Writing Tests

### Example Component Test

```typescript
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { render as customRender } from '@/test/utils/test-utils';
import MyComponent from '../MyComponent';

describe('MyComponent', () => {
  it('renders correctly', () => {
    customRender(<MyComponent />);
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });
});
```

### Using Custom Render

The `customRender` utility from `@/test/utils/test-utils` automatically wraps components with necessary providers (LanguageProvider, ThemeProvider).

## Test Coverage

Current test coverage includes:
- ✅ App component (scroll behavior, analytics)
- ✅ Hero component (rendering, interactions)
- ✅ Header component (navigation, mobile menu)
- ✅ LanguageContext (translations, language switching)

## Mocking

Common mocks are set up in `src/test/setup.ts`:
- localStorage
- window.matchMedia
- IntersectionObserver
- ResizeObserver
- scrollIntoView
- window.scrollTo

## Best Practices

1. **Test user behavior, not implementation details**
2. **Use semantic queries** (getByRole, getByLabelText) over test IDs when possible
3. **Keep tests isolated** - each test should be independent
4. **Mock external dependencies** (APIs, file imports)
5. **Use waitFor for async operations**

## Troubleshooting

### Tests failing with "localStorage is not defined"
- Already handled in `src/test/setup.ts`

### Components not rendering
- Ensure you're using `customRender` from test utils
- Check that all required providers are included

### Async operations timing out
- Use `waitFor` from React Testing Library
- Increase timeout if needed: `waitFor(() => {...}, { timeout: 3000 })`

