import { RegisterOptions } from 'react-hook-form';

/**
 * Fields
 */
import type { TextControlType } from '@/components/fields';

export type ControlType = TextControlType;

export interface SelectOption {
  label: string;
  value: string;
}

export interface FieldSchema {
  label: string;
  inputType: ControlType;
  fieldName: string;
  defaultValue?: any;
  options?: SelectOption[];
  config?: RegisterOptions;
}
