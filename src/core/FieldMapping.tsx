import type { FieldMappingType } from '@/types';
import { TextField } from '@/components/fields';

const defaultFieldMapping: FieldMappingType = {
  text: TextField,
  number: TextField,
};

export const FieldMapping = defaultFieldMapping;
