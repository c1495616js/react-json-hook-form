/* eslint-disable react/display-name */
import React from 'react';

import { FieldSchema } from '@/types';
import type { FieldValues, UseFormRegister } from 'react-hook-form';

type Props = React.InputHTMLAttributes<HTMLInputElement> &
  Pick<FieldSchema, 'config' | 'fieldName' | 'defaultValue'>;

const TextField =
  (register: UseFormRegister<FieldValues>) =>
  ({ fieldName, config, defaultValue, type = 'text' }: Props) => {
    return (
      <input
        type={type}
        {...register(fieldName, config)}
        defaultValue={defaultValue}
      />
    );
  };

export default TextField;
