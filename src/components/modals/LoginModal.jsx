import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import ModalContext from '../../contexts/ModalContext';
import useAuthApiRequest from '../../hooks/useApiRequest/useAuthApiRequest';
import { TextInput } from '../common';
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

const ErrorMsg = styled.span`
    color: red;
`;

export const LoginModal = () => {
    const [loginError, setLoginError] = useState("");

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const { login } = useAuthApiRequest();
    const { openModal, setOpenModal } = useContext(ModalContext);

    const submitLogin = async ({ email, password }) => {
        setLoginError("");
        const result = await login(email, password);
        if (result.error) setLoginError(result.error);
        console.log(result);
    };

    const showSignup = () => {
        setOpenModal("signup");
    };

    return (
        <Modal title="Login" open={openModal === "login"} setClosed={() => setOpenModal("")}>
            <form onSubmit={handleSubmit(submitLogin)}>
                <TextInput label="Email" error={errors.email?.message} registration={register("email", {
                    required: { value: true, message: "Email is required" },
                    minLength: { value: 5, message: "Please enter a valid email address" }
                })} />
                <TextInput label="Password" type="password" error={errors.password?.message} registration={register("password", {
                    required: { value: true, message: "Password is required" },
                    minLength: { value: 6, message: "Invalid password (must be six or more characters)" }
                })} />
                <div>
                    <input type="submit" value="Login" disabled={Object.keys(errors).length > 0} />{" "}
                    <ErrorMsg>{loginError}</ErrorMsg>
                </div>
                <p>No account yet? <LinkButton onClick={showSignup}>Create one</LinkButton></p>
            </form>
        </Modal>
    );
};
