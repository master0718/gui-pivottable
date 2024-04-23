"use client"

import { usePopup } from "@/redux/hooks";
import { Popup } from "@/components/popup/popup";

export function PopupProvider({ children }) {
    const { popupOptions, isOpenPopup } = usePopup();

    return (
        <>
            {isOpenPopup && <Popup {...popupOptions} />}
            {children}
        </>
    );
}