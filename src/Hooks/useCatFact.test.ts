import useCatFact from './useCatFact';
import { act, renderHook } from "@testing-library/react";

describe('useCatFact', () => {
  it('Default fact should be null', () => {
    const { result } = renderHook(() => useCatFact());
    expect(result.current.fact).toBe(null);
  });

  it('should update fact after calling refreshFact', async () => {
    const { result } = renderHook(() => useCatFact());
    await act(async () => {
      await result.current.refreshFact();
    });
    expect(result.current.fact).not.toBeNull();
  });
});
