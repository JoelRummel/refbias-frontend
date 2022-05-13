import { createContext } from "react";

const ModalContext = createContext({
    openModal: "",
    setOpenModal: () => { }
});

export default ModalContext;