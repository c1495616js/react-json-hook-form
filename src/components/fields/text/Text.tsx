/* eslint-disable react/display-name */
import { FieldSchema } from '@/types';
import React from 'react';
import type { FieldValues, UseFormRegister } from 'react-hook-form';

type Props = Pick<FieldSchema, 'config' | 'fieldName' | 'defaultValue'>;

const TextField =
  (register: UseFormRegister<FieldValues>) =>
  ({ fieldName, config, defaultValue }: Props) => {
    return (
      <input
        type="text"
        {...register(fieldName, config)}
        defaultValue={defaultValue}
      />
    );
  };

export default TextField;
