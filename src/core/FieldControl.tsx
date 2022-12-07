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

  switch (inputType) {
    case 'text':
      const RegisterTextField = TextField(register);
      return (
        <RegisterTextField
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
    // case 'number':
    //   return (
    //     <input
    //       type="number"
    //       {...register(fieldName, config)}
    //       defaultValue={defaultValue}
    //     />
    //   );
    default:
      return null;
  }
};

export default FieldControl;
