import React from 'react';
import {Box, FormControl, ScrollView, Stack} from 'native-base';
import CustomButton from '../CustomButton';
import {FormInterface} from '../../shared/interfaces/FormInterface';
import {Controller, useForm} from 'react-hook-form';
import BackHeader from '../BackHeader';
import FormInput from './Fields/Input';
import FormTextArea from './Fields/TextArea';

type props = {
  data: FormInterface;
  submit: (formData: any) => void;
};

const DynamicForm = ({data, submit}: props) => {
  const {control, handleSubmit} = useForm({mode: 'onBlur'});

  const onSubmit = (formData: any) => submit(formData);

  const renderController = (formField: any, controllerField: any) => {
    switch (formField.controlType) {
      case 'text':
        return (
          <FormInput formField={formField} controllerField={controllerField} />
        );
      case 'textarea':
        return (
          <FormTextArea
            formField={formField}
            controllerField={controllerField}
          />
        );
    }
  };

  return (
    <ScrollView>
      <BackHeader />
      <Stack mx="4">
        <FormControl>
          {data.formFields.map((formField: any) => (
            <Controller
              control={control}
              name={formField.key}
              render={({field}) => (
                <React.Fragment>
                  <FormControl.Label mt={2}>
                    {formField.label}
                  </FormControl.Label>
                  {renderController(formField, field)}
                </React.Fragment>
              )}
            />
          ))}
          <Box my="8">
            <CustomButton title="Submit" click={handleSubmit(onSubmit)} />
          </Box>
        </FormControl>
      </Stack>
    </ScrollView>
  );
};

export default DynamicForm;
