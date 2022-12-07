import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Form } from '@/index';
import { FieldSchema } from '@/types';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
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
    inputType: 'text',
    label: 'password',
    defaultValue: 'password',
  },
];

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Form> = (args) => (
  <Form
    {...args}
    fields={fields}
    customSubmit={(data, error) => console.log('hi:', data)}
  />
);

//👇 Each story then reuses that template
export const TextField = Template.bind({});
