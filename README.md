# Json Schema React Form

#### Features:

- ⚡️ NextJS v13
- ⚛️ React v18
- 🧱 Pnpm for instead npm
- 🌎 Path aliasing for streamlined imports
- 🌈 Prettier + ESLint for consistent code style

#### Usages:

- General:

```tsx
import { Form } from '@c1495616js/react-json-hook-form';
import type { FieldSchema } from '@c1495616js/react-json-hook-form';

/**
 * add the json schema here
 */
const fields: FieldSchema[] = [
  {
    fieldName: 'name',
    inputType: 'text',
    label: 'Name',
    defaultValue: 'Jerry',
  },
  {
    fieldName: 'age',
    inputType: 'number',
    label: 'Age',
    defaultValue: 30,
  },
];

<Form fields={fields} />;
```

- Customize the field component:

```tsx
import { Form, JsonFormContextProvider } from '@/index';
import { TextField as MuiTextField } from '@mui/material';

<JsonFormContextProvider
  customFieldMapping={{
    text:
      (register) =>
      ({ fieldName, config, defaultValue }) =>
        (
          <MuiTextField
            {...register(fieldName, config)}
            defaultValue={defaultValue}
          />
        ),
  }}
>
  <Form fields={fields} />
</JsonFormContextProvider>;
```

#### Refs:

- https://nainacodes.com/blog/create-form-from-json-schema
