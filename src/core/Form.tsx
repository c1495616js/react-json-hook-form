import { FormProvider, useForm } from 'react-hook-form';
import { FieldSchema } from '@/types';
import FieldControl from './FieldControl';

interface FormProps {
  fields: FieldSchema[];
}

const Form = ({ fields }: FormProps) => {
  const formMethods = useForm();

  return (
    <form>
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
