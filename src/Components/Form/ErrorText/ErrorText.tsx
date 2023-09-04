import classNames from 'classnames';
import React from 'react';
import './ErrorText.css';

export type ErrorTextProps = {
    message?: string;
    className?: string;
};

const ErrorText: React.FC<ErrorTextProps> = ({ className, message }) => {
    const rootClassName = classNames('ErrorText', className);

    return <p className={rootClassName}>{message}</p>;
};

export default ErrorText;
