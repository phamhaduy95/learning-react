import classNames from 'classnames';
import { InputText, InputTextProps } from 'primereact/inputtext';
import { useId } from 'react';
import { FieldValues, Path, UseControllerProps, useController } from 'react-hook-form';
import '../NativeInput/NativeInput.css';

type InputSize = 'small' | 'medium' | 'large';

export type PrebuiltInputProps<TModel extends FieldValues> = UseControllerProps<
    TModel,
    Path<TModel>
> &
    Omit<InputTextProps, 'value' | 'size'> & {
        label?: string;
        size?: InputSize;
    };

const PrebuiltInput = <TModel extends FieldValues>(props: PrebuiltInputProps<TModel>) => {
    const {
        className,
        control,
        label,
        name,
        size = 'medium',
        rules,
        shouldUnregister,
        onChange = () => {},
        onBlur = () => {},
        defaultValue,
        ...rest
    } = props;
    const {
        field: { onChange: onInnerChange, onBlur: onInnerBlur, value = '', ref },
        fieldState: { error },
    } = useController({ control, name, shouldUnregister, rules, defaultValue });

    const id = useId();

    const resizeInput = (size: InputSize) => {
        switch (size) {
            case 'small':
                return 'p-inputtext-sm';
            case 'medium':
                return '';
            case 'large':
                return 'p-inputtext-lg';
        }
    };

    const rootClassName = classNames('flex flex-col', className);
    const inputClassName = classNames(resizeInput(size), { 'p-invalid': error });

    const handleChange: InputTextProps['onChange'] = (e) => {
        onInnerChange(e.target.value);
        onChange(e);
    };

    const handleBlur: InputTextProps['onBlur'] = (e) => {
        onBlur(e);
        onInnerBlur();
    };

    const getFormErrorMessage = () => {
        return error ? (
            <small className="p-error caret-transparent">{error.message}</small>
        ) : (
            <small className="p-error caret-transparent">&nbsp;</small>
        );
    };

    return (
        <div className={rootClassName}>
            <label className="NativeInput__Label " htmlFor={id}>
                {label}
            </label>
            <InputText
                id={id}
                className={inputClassName}
                value={value}
                ref={ref}
                onBlur={handleBlur}
                onChange={handleChange}
                {...rest}
            />
            {getFormErrorMessage()}
        </div>
    );
};

export default PrebuiltInput;
