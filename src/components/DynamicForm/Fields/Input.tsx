import React from 'react';
import {Input} from 'native-base';

type props = {
  formField: any;
  controllerField: any;
};

const FormInput = ({formField, controllerField}: props) => {
  return (
    <Input
      key={formField.key}
      type={formField.controlType}
      placeholder={formField.key}
      isRequired={formField.required}
      py={4}
      value={controllerField.value}
      onBlur={controllerField.onBlur}
      onChangeText={valueChange => controllerField.onChange(valueChange)}
    />
  );
};

export default FormInput;
