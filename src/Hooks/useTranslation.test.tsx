import {renderHook} from "@testing-library/react";
import useTranslation from "./useTranslation";

describe('useTranslation', () => {
    it('Default language should be Home', () => {
        const {result} = renderHook(() => useTranslation('nav-bar.home'));
        expect(result.current).toBe('Home')
    })
})