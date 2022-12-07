import React from 'react';
import type { FieldMappingType } from '@/types';

interface IFormContext {
  customFieldMapping?: Partial<FieldMappingType>;
}

const FormContext = React.createContext<IFormContext | null>(null);

export const JsonFormContextProvider = ({
  children,
  customFieldMapping,
}: React.PropsWithChildren<IFormContext>) => {
  return (
    <FormContext.Provider
      value={customFieldMapping ? { customFieldMapping } : null}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useJsonFormContext = () => React.useContext(FormContext);
