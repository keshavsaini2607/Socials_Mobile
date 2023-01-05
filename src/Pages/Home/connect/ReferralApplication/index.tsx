import {SafeAreaView} from 'react-native';
import React from 'react';
import {FormInterface} from '../../../../shared/interfaces/FormInterface';
import {Stack} from 'native-base';
import DynamicForm from '../../../../components/DynamicForm';

const ReferralApplication = () => {
  let formData: FormInterface = {
    title: 'Register',
    subTitle: "Let's get you started!",
    formFields: [
      {
        controlType: 'text',
        key: 'name',
        label: 'Name',
        required: true,
      },
      {
        controlType: 'text',
        key: 'email',
        label: 'Email',
        required: true,
      },
      {
        controlType: 'textarea',
        key: 'reason',
        label: 'Why are you better than the rest?',
        required: true,
      },
    ],
  };

  const submitForm = (values: any) => {
    console.log(values);
  };

  return (
    <SafeAreaView>
      <Stack>
        <DynamicForm data={formData} submit={submitForm} />
      </Stack>
    </SafeAreaView>
  );
};

export default ReferralApplication;
