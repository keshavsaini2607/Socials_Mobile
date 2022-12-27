import React from 'react';
import {Box, FormControl, Input, ScrollView, Stack} from 'native-base';
import CustomButton from '../CustomButton';
import {FormInterface} from '../../shared/interfaces/FormInterface';
import {Controller, useForm} from 'react-hook-form';

type props = {
  data: FormInterface;
  submit: (formData: any) => void;
};

const DynamicForm = ({data, submit}: props) => {
  const {control, handleSubmit} = useForm({mode: 'onBlur'});

  const onSubmit = (formData: any) => submit(formData);

  return (
    <ScrollView>
      <Stack mx="4">
        <FormControl>
          {data.formFields.map((field: any) => (
            <Controller
              control={control}
              name={field.key}
              render={({field: {onChange, value, onBlur}}) => (
                <Input
                  key={field.key}
                  type={field.controlType}
                  placeholder={field.key}
                  isRequired={field.required}
                  py={4}
                  value={value}
                  onBlur={onBlur}
                  onChangeText={valueChange => onChange(valueChange)}
                />
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
