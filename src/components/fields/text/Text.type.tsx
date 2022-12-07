import type { FieldValues, UseFormRegister } from 'react-hook-form';
import React from 'react';

import type { FieldSchema } from '@/types';

export type TextControlType = 'text' | 'number';

export type TextFieldProps = React.InputHTMLAttributes<HTMLInputElement> &
  Pick<FieldSchema, 'config' | 'fieldName' | 'defaultValue'>;

export type TextFieldComponent = (
  register: UseFormRegister<FieldValues>
) => (props: TextFieldProps) => JSX.Element;
