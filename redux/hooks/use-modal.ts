"use client"

import { useActions } from "./use-actions";
import { useTypedSelector } from "./use-typed-selector";

export const useModal = () => {
    const modalsData = useTypedSelector(({ modals }) => modals);

    const {
        openModalCreate,
        openModalDayInfo,
        openModalEdit,
        closeModalCreate,
        closeModalDayInfo,
        closeModalEdit
    } = useActions('modals');

    return {
        ...modalsData,
        openModalCreate,
        openModalDayInfo,
        openModalEdit,
        closeModalCreate,
        closeModalDayInfo,
        closeModalEdit
    };
}