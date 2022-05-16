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

export const SignupModal = () => {
    const [signupError, setSignupError] = useState("");

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const { signup } = useAuthApiRequest();
    const { openModal, setOpenModal } = useContext(ModalContext);

    const submitSignup = async ({ email, username, password }) => {
        setSignupError("");
        const result = await signup(email, username, password);
        if (result.error) setSignupError(result.error);
        console.log(result);
    };

    const showLogin = () => {
        setOpenModal("login");
    };

    return (
        <Modal title="Create Account" open={openModal === "signup"} setClosed={() => setOpenModal("")}>
            <form onSubmit={handleSubmit(submitSignup)}>
                <TextInput label="Email" error={errors.email?.message} registration={register("email", {
                    required: { value: true, message: "Email is required" },
                    minLength: { value: 5, message: "Please enter a valid email address" }
                })} />
                <TextInput label="Username" error={errors.username?.message} registration={register("username", {
                    required: { value: true, message: "Username is required" },
                    minLength: { value: 3, message: "Username must be 3-20 characters" },
                    maxLength: { value: 20, message: "Username must be 3-20 characters" },
                    pattern: { value: /^\w+$/, message: "Username can only contain letters, numbers, and underscores" }
                })} />
                <TextInput label="Password" type="password" error={errors.password?.message} registration={register("password", {
                    required: { value: true, message: "Password is required" },
                    minLength: { value: 6, message: "Invalid password (must be six or more characters)" }
                })} />
                <div>
                    <input type="submit" value="Sign Up" disabled={Object.keys(errors).length > 0} />{" "}
                    <ErrorMsg>{signupError}</ErrorMsg>
                </div>
            </form>
            <p>Already have an account? <LinkButton onClick={showLogin}>Log in</LinkButton></p>
        </Modal>
    );
};
