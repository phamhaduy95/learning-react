import classNames from 'classnames';
import React, { forwardRef } from 'react';
import './Button.css';

type ButtonVariant = 'outlined' | 'filled' | 'blank';
type ButtonColor = 'danger' | 'primary' | 'success' | 'warning' | 'secondary';

export type ButtonProps = React.ComponentPropsWithRef<'button'> & {
    variant?: ButtonVariant;
    color?: ButtonColor;
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
    const { className, variant = 'filled', color = 'primary', ...rest } = props;
    const rootClassName = classNames('Button', `button-${variant}`, `color-${color}`, className);
    return <button className={rootClassName} ref={ref} {...rest} />;
});

export default Button;
