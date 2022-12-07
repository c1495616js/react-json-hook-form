import { RegisterOptions } from 'react-hook-form';

/**
 * Fields
 */
import type { TextControlType, TextFieldComponent } from '@/components/fields';

// extend type here:
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

// extend type here:
export type Component = TextFieldComponent;

export type FieldMappingType = Record<ControlType, Component>;
