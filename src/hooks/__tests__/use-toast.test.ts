import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useToast, toast } from '../use-toast';

describe('useToast', () => {
  beforeEach(() => {
    // Clear any existing toasts
    vi.clearAllTimers();
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('returns initial empty toasts array', () => {
    const { result } = renderHook(() => useToast());

    expect(result.current.toasts).toEqual([]);
  });

  it('adds a toast when toast function is called', () => {
    const { result } = renderHook(() => useToast());

    act(() => {
      toast({
        title: 'Test Toast',
        description: 'Test description',
      });
    });

    expect(result.current.toasts.length).toBe(1);
    expect(result.current.toasts[0].title).toBe('Test Toast');
    expect(result.current.toasts[0].description).toBe('Test description');
  });

  it('dismisses a toast', () => {
    const { result } = renderHook(() => useToast());

    let toastId: string;
    act(() => {
      const toastResult = toast({
        title: 'Test Toast',
      });
      toastId = toastResult.id;
    });

    expect(result.current.toasts.length).toBe(1);

    act(() => {
      result.current.dismiss(toastId);
    });

    expect(result.current.toasts[0].open).toBe(false);
  });

  it('dismisses all toasts when no id is provided', () => {
    const { result } = renderHook(() => useToast());

    act(() => {
      toast({ title: 'Toast 1' });
      toast({ title: 'Toast 2' });
    });

    expect(result.current.toasts.length).toBe(2);

    act(() => {
      result.current.dismiss();
    });

    result.current.toasts.forEach(toast => {
      expect(toast.open).toBe(false);
    });
  });

  it('updates a toast', () => {
    const { result } = renderHook(() => useToast());

    let updateFn: ReturnType<typeof result.current.toast>['update'];
    
    act(() => {
      const toastResult = result.current.toast({
        title: 'Original Title',
      });
      updateFn = toastResult.update;
    });

    expect(result.current.toasts[0].title).toBe('Original Title');

    act(() => {
      // The update function expects a ToasterToast, but we can pass partial updates
      // The id will be added automatically by the update function
      updateFn({
        id: result.current.toasts[0].id,
        title: 'Updated Title',
      } as Parameters<typeof updateFn>[0]);
    });

    // Check that the toast was updated
    expect(result.current.toasts[0].title).toBe('Updated Title');
  });

  it('limits toasts to TOAST_LIMIT', () => {
    const { result } = renderHook(() => useToast());

    act(() => {
      toast({ title: 'Toast 1' });
      toast({ title: 'Toast 2' });
      toast({ title: 'Toast 3' });
    });

    // TOAST_LIMIT is 1, so only 1 toast should be kept
    expect(result.current.toasts.length).toBe(1);
  });
});

