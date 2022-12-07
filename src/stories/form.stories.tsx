import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextField as MuiTextField } from '@mui/material';

import { Form, JsonFormContextProvider } from '@/index';
import { FieldSchema } from '@/types';

export default {
  title: 'Form',
  component: Form,
} as ComponentMeta<typeof Form>;

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

const Template: ComponentStory<typeof Form> = (args) => (
  <Form {...args} fields={fields} />
);

export const TextField = Template.bind({});

const CustomFieldTemplate: ComponentStory<typeof Form> = (args) => (
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
    <Form {...args} fields={fields} />
  </JsonFormContextProvider>
);

export const CustomMuiTextField = CustomFieldTemplate.bind({});
