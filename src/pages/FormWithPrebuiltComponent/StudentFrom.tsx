import { PrebuiltInput } from '@components/Form';
import { useForm } from 'react-hook-form';
import { Student } from '@model/Student.model';
import { Button } from '@components';

const StudentForm = () => {
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
            <PrebuiltInput
                name="age"
                control={control}
                label="age"
                required
                size="small"
                rules={{ required: 'required' }}
                disabled
            />
            <PrebuiltInput
                name="class"
                control={control}
                label="class"
                required
                size="small"
                rules={{ required: 'required' }}
            />
            <PrebuiltInput
                name="name"
                control={control}
                label="name"
                required
                size="small"
                rules={{ required: 'required' }}
            />
            <div className="flex justify-between ">
                <Button onClick={handleSubmitButtonClick}>Submit</Button>
                <Button onClick={handleClearFormData}>Clear</Button>
            </div>
        </div>
    );
};

export default StudentForm;
