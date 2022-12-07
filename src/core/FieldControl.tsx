import { useFormContext } from 'react-hook-form';
import { FieldSchema } from '@/types';
import { FieldMapping } from './FieldMapping';
import { useJsonFormContext } from './FormContext';

const FieldControl = ({
  inputType,
  fieldName,
  defaultValue,
  options = [],
  config = {},
}: FieldSchema) => {
  const { register } = useFormContext();
  const jsonFormContext = useJsonFormContext();
  let newFieldMapping = FieldMapping;

  if (jsonFormContext?.customFieldMapping) {
    newFieldMapping = {
      ...FieldMapping,
      ...jsonFormContext?.customFieldMapping,
    };
  }
  const Field = newFieldMapping[inputType](register);

  switch (inputType) {
    case 'number':
      return (
        <Field
          type="number"
          fieldName={fieldName}
          config={config}
          defaultValue={defaultValue}
        />
      );

    default:
      return (
        <Field
          fieldName={fieldName}
          defaultValue={defaultValue}
          config={config}
        />
      );
  }
};

export default FieldControl;
