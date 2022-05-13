import React from 'react';
import styled from 'styled-components';

const ErrorMsg = styled.p`
    color: red;
    font-size: 12px;
    white-space: pre-wrap;
    margin-top: 2px;
`;

export const TextInput = ({
    label,
    value,
    type = "text",
    error = " ",
    onChange = () => { },
    registration = {}
}) => {
    return (
        <div>
            {label && (
                <><b>{label}:</b>{" "}</>
            )}
            <input type={type} value={value} onChange={onChange} {...registration} />
            <ErrorMsg>
                {error}{" "}
            </ErrorMsg>
        </div>
    );
};