import {Pressable, SafeAreaView} from 'react-native';
import React from 'react';
import {Box, Text, Flex, Stack, View} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import DynamicForm from '../../../components/DynamicForm';
import {FormInterface} from '../../../shared/interfaces/FormInterface';
import auth from '@react-native-firebase/auth';

let formData: FormInterface = {
  title: 'Register',
  subTitle: "Let's get you started!",
  formFields: [
    {
      controlType: 'text',
      key: 'fullname',
      label: 'Full Name',
      required: true,
    },
    {
      controlType: 'text',
      key: 'email',
      label: 'Email',
      required: true,
    },
    {
      controlType: 'password',
      key: 'password',
      label: 'Password',
      required: true,
    },
  ],
};

const RegisterPage = () => {
  const {navigate} = useNavigation();

  const submit = async (data: any) => {
    console.log(data);
    await auth()
      .createUserWithEmailAndPassword(data.email, data.password)
      .then(res => {
        console.log('new user created', res);
      })
      .catch(error => {
        console.log('regiter error', error);
      });
  };

  return (
    <SafeAreaView>
      <View height="full">
        <Box>
          <Flex alignItems="center" justifyContent="center" paddingY="10">
            <Text fontSize="2xl" fontWeight="bold" letterSpacing="md">
              Welcome
            </Text>
            <Text
              fontSize="xl"
              width="1/2"
              textAlign="center"
              letterSpacing="md"
              fontWeight="thin">
              Let's get you started
            </Text>
          </Flex>
          <Box w="100%">
            <DynamicForm data={formData} submit={submit} />
          </Box>
        </Box>
        <Stack bottom="2" position="absolute" width="full">
          <Pressable onPress={() => navigate('Login' as never)}>
            <Text textAlign="center" fontSize="lg">
              Already have an account
            </Text>
          </Pressable>
        </Stack>
      </View>
    </SafeAreaView>
  );
};

export default RegisterPage;
