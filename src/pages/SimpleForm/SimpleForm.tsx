import { NativeInput } from '@components/Form';
import { useForm } from 'react-hook-form';
import { Student } from '@model/Student.model';
import { Button } from '@components';

const SimpleForm = () => {
    const { control, handleSubmit, reset } = useForm<Student>({ shouldFocusError: true });

    const handleSubmitButtonClick = () => {
        handleSubmit((formData) => {
            console.log(formData);
        })();
    };

    const handleClearFormData = () => {
        reset();
    };

    return (
        <div className="flex flex-col">
            <NativeInput
                name="age"
                control={control}
                label="age"
                required
                rules={{ required: 'required' }}
            />
            <NativeInput
                name="class"
                control={control}
                label="class"
                required
                rules={{ required: 'required' }}
            />
            <NativeInput
                name="name"
                control={control}
                label="name"
                required
                rules={{ required: 'required' }}
            />
            <div className="flex justify-between ">
                <Button onClick={handleSubmitButtonClick}>Submit</Button>
                <Button onClick={handleClearFormData}>Clear</Button>
            </div>
        </div>
    );
};

export default SimpleForm;
