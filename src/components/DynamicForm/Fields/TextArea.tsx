import React from 'react';
import {TextArea} from 'native-base';

type props = {
  formField: any;
  controllerField: any;
};

const FormTextArea = ({formField, controllerField}: props) => {
  return (
    <TextArea
      autoCompleteType="text"
      key={formField.key}
      placeholder={formField.label}
      isRequired={formField.required}
      value={controllerField.value}
      onBlur={controllerField.onBlur}
      onChangeText={valueChange => controllerField.onChange(valueChange)}
    />
  );
};

export default FormTextArea;
