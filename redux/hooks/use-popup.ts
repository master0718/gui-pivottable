"use client"

import { useTypedSelector } from "./use-typed-selector"
import { useActions } from "./use-actions"

export const usePopup = () => {
    const popupsData = useTypedSelector(({ popups }) => popups);
    const { openPopup, closePopup } = useActions('popups');

    return {
        ...popupsData,
        openPopup,
        closePopup
    }
}