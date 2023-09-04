import classNames from 'classnames';
import React, { useId } from 'react';
import { FieldValues, Path, UseControllerProps, useController } from 'react-hook-form';
import ErrorText from '../ErrorText';
import './NativeInput.css';

/* This example demonstrates how to integrate react-hook-form to native input element. 
When building this input component, I didn't expose input value and error outside of the wrapper component since it is performance-wise to let state and error of input component controlled by the form context of react-hook-form. 

In addition, I didn't use Controller component but instead  useController hook as the main tool to apply react-hook-form 's state management. The reason behind this decision is that using useController hook is far more simple and fits better with functional component. 

To make this component more flexible and adaptive with any control, I try to apply generic type for this component by declaring its props as Generic type which extends props type from both native input and useController argument.     
 */

export type NativeInputProps<TModel extends FieldValues> = UseControllerProps<
    TModel,
    Path<TModel>
> &
    React.ComponentPropsWithoutRef<'input'> & { label?: string };

/* However there is a problem, forwardRef cannot be used with generic type since it is prebuilt function from react library already. I am still finding the appropriate method to make forwardRef accept generic type. */
const NativeInput = <TModel extends FieldValues>(props: NativeInputProps<TModel>) => {
    const {
        control,
        name,
        rules,
        shouldUnregister,
        required = false,
        onChange = () => {},
        defaultValue,
        label = '',
        className,
        onBlur = () => {},
        ...rest
    } = props;

    /* this uuid here is mostly used with label to support ARIA */
    const id = useId();

    const {
        field: {
            ref: innerRef,
            onChange: onInnerChange,
            onBlur: onInnerBlur,
            value = '', // provide empty string as the default value, so that the value prop always exist in this component. No more uncontrolled warning and reset method can clear data within input
            ...restFieldProps
        },
        fieldState: { error, invalid },
        formState: { isSubmitted },
    } = useController({ control, name, defaultValue, rules, shouldUnregister });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        onInnerChange(value);
        onChange(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        onInnerBlur();
        onBlur(e);
    };

    const rootClassName = classNames('NativeInput', className, {
        'is-error': error,
        'is-valid': isSubmitted && !invalid,
    });

    return (
        <div className={rootClassName}>
            <label htmlFor={id} className="NativeInput__Label">
                {label}
                {required && <span className="text-danger-text">*</span>}
            </label>
            <input
                className="NativeInput__TextField"
                id={id}
                ref={innerRef}
                autoComplete="none"
                value={value}
                onChange={handleInputChange}
                onBlur={handleBlur}
                {...restFieldProps}
                {...rest}
            />
            <ErrorText className="NativeInput__ErrorText" message={error?.message} />
        </div>
    );
};

export default NativeInput;
