import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Form } from '@/index';
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
    defaultValue: 'hihihihi',
  },
  {
    fieldName: 'password',
    inputType: 'number',
    label: 'password',
    defaultValue: 3,
  },
];

const Template: ComponentStory<typeof Form> = (args) => (
  <Form {...args} fields={fields} />
);

export const TextField = Template.bind({});
