"use client";

import React from "react";
import { store } from "../store";
import { Provider as StoreProvider } from "react-redux";
import { ModalProvider } from "./modal-provider";
import { PopupProvider } from "./popup-provider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <StoreProvider store={store}>
      <ModalProvider>
        <PopupProvider>
          {children}
        </PopupProvider>
      </ModalProvider>
    </StoreProvider>
  );
}
