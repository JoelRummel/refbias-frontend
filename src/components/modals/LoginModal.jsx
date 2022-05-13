import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import ModalContext from '../../contexts/ModalContext';
import useAuthApiRequest from '../../hooks/useApiRequest/useAuthApiRequest';
import { Modal } from './Modal';

const LinkButton = styled.button`
    background: none!important;
    border: none;
    padding: 0!important;
    color: #069;
    text-decoration: underline;
    cursor: pointer;
    font-size: inherit;
`;

export const LoginModal = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    console.log(errors);
    const { login } = useAuthApiRequest();
    const { openModal, setOpenModal } = useContext(ModalContext);

    const submitLogin = async ({ email, password }) => {
        const result = await login(email, password);
        console.log(result);
    };

    const showSignup = () => {
        setOpenModal("signup");
    };

    return (
        <Modal title="Login" open={openModal === "login"} setClosed={() => setOpenModal("")}>
            <form onSubmit={handleSubmit(submitLogin)}>
                <p>
                    <b>Email:</b>{" "}
                    <input {...register("email", {
                        required: { value: true, message: "Email is required" },
                        minLength: { value: 5, message: "Invalid email address" }
                    })} />
                </p>
                <p>
                    <b>Password:</b>{" "}
                    <input type="password" {...register("password", {
                        required: { value: true, message: "Password is required" },
                        minLength: { value: 6, message: "Invalid password (must be six or more characters)" }
                    })} />
                </p>
                <input type="submit" value="Login" disabled={Object.keys(errors).length > 0} />
                <p>No account yet? <LinkButton onClick={showSignup}>Create one</LinkButton></p>
            </form>
        </Modal>
    );
};
