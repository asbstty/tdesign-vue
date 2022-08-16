import { AllValidateResult, FormRule, ValidateResultType } from '../form/type';

// 允许 Form 统一控制的表单
export const FORM_CONTROL_COMPONENTS = [
  'TInput',
  'TInputNumber',
  'TTextarea',
  'TCascader',
  'TSelect',
  'TOption',
  'TSwitch',
  'TCheckbox',
  'TCheckboxGroup',
  'TRadio',
  'TRadioGroup',
  'TTreeSelect',
  'TDatePicker',
  'TTimePicker',
  'TUpload',
  'TTransfer',
  'TSlider',
];

export type ErrorListType =
  | {
      result: false;
      message: string;
      type: 'error' | 'warning';
    }
  | ValidateResultType;
export type SuccessListType =
  | {
      result: true;
      message: string;
      type: 'success';
    }
  | ValidateResultType;

export interface AnalysisValidateResult {
  successList?: SuccessListType[];
  errorList?: ErrorListType[];
  rules: FormRule[];
  resultList: AllValidateResult[];
  allowSetValue: boolean;
}
