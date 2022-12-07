import { useFormContext } from 'react-hook-form';
import { FieldSchema } from '@/types';
import { TextField } from '@/components/fields';

const FieldControl = ({
  inputType,
  fieldName,
  defaultValue,
  options = [],
  config = {},
}: FieldSchema) => {
  const { register } = useFormContext();

  const RegisterTextField = TextField(register);

  switch (inputType) {
    case 'text':
      return (
        <RegisterTextField
          fieldName={fieldName}
          config={config}
          defaultValue={defaultValue}
        />
      );
    case 'number':
      return (
        <RegisterTextField
          type="number"
          fieldName={fieldName}
          config={config}
          defaultValue={defaultValue}
        />
      );
    // case 'select': {
    //   return (
    //     <select
    //       {...register(fieldName, config)}
    //       defaultValue={defaultValue}
    //       name={fieldName}
    //       id={fieldName}
    //     >
    //       {options.map((o, index) => (
    //         <option key={index} value={o.value}>
    //           {o.label}
    //         </option>
    //       ))}
    //     </select>
    //   );
    // }

    default:
      return null;
  }
};

export default FieldControl;
