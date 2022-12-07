import { FormProvider, useForm } from 'react-hook-form';
import { FieldSchema } from '@/types';
import FieldControl from './FieldControl';

interface FormProps {
  fields: FieldSchema[];
  customSubmit?: (data: Record<string, unknown>, error: any) => void;
}

const Form = ({ fields, customSubmit }: FormProps) => {
  const formMethods = useForm();
  const { handleSubmit } = formMethods;

  const onSubmit = (data: Record<string, unknown>, error: any) => {
    customSubmit?.(data, error);
    console.log(data, error);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormProvider {...formMethods}>
        {fields.map((field, i) => (
          <div key={i}>
            <label htmlFor={field.fieldName}>{field.label}</label>
            <FieldControl {...field} />
          </div>
        ))}
      </FormProvider>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
