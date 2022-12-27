import React from 'react';
import {Box, FormControl, Input, ScrollView, Stack} from 'native-base';
import CustomButton from '../CustomButton';
import {FormInterface} from '../../shared/interfaces/FormInterface';

type props = {
  data: FormInterface;
};

const DynamicForm = ({data}: props) => {
  return (
    <ScrollView>
      <Stack mx="4">
        <FormControl>
          {data.formFields.map((field: any) => (
            <>
              <FormControl.Label mt={2}>{field.label}</FormControl.Label>
              <Input
                key={field.key}
                type={field.controlType}
                placeholder={field.key}
                isRequired={field.required}
                py={4}
              />
            </>
          ))}
          <Box my="8">
            <CustomButton title="Submit" click={() => {}} />
          </Box>
        </FormControl>
      </Stack>
    </ScrollView>
  );
};

export default DynamicForm;
