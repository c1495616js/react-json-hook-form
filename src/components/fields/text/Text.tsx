/* eslint-disable react/display-name */
import React from 'react';

import type { TextFieldComponent } from './Text.type';

const TextField: TextFieldComponent =
  (register) =>
  ({ fieldName, config, defaultValue, type = 'text' }) => {
    return (
      <input
        type={type}
        {...register(fieldName, config)}
        defaultValue={defaultValue}
      />
    );
  };

export default TextField;
