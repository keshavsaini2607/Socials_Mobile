import {Pressable, SafeAreaView} from 'react-native';
import React from 'react';
import {Box, Text, Flex, Stack, View} from 'native-base';
import GoogleLogin from '../../../components/SocialButtons/GoogleLoginButton';
import GithubLogin from '../../../components/SocialButtons/GithubLoginButton';
import {useNavigation} from '@react-navigation/native';
import {FormInterface} from '../../../shared/interfaces/FormInterface';
import DynamicForm from '../../../components/DynamicForm';

const LoginPage = () => {
  const {navigate} = useNavigation();
  // const login = () => {};

  let formData: FormInterface = {
    title: 'Register',
    subTitle: "Let's get you started!",
    formFields: [
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

  return (
    <SafeAreaView>
      <View height="full">
        <Box>
          <Flex alignItems="center" justifyContent="center" paddingY="10">
            <Text fontSize="2xl" fontWeight="bold" letterSpacing="md">
              Hello Again!
            </Text>
            <Text
              fontSize="xl"
              width="1/2"
              textAlign="center"
              letterSpacing="md"
              fontWeight="thin">
              Welcome back you've been missed!
            </Text>
          </Flex>
          <Box w="100%">
            <DynamicForm data={formData} />
          </Box>
        </Box>
        <Stack mx="4">
          <Text textAlign="center">Or Continue With</Text>
          <Flex
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            my="6">
            <GoogleLogin />
            <Box mx="4" />
            <GithubLogin />
          </Flex>
        </Stack>
        <Stack bottom="2" position="absolute" width="full">
          <Pressable onPress={() => navigate('Register' as never)}>
            <Text textAlign="center" fontSize="lg">
              Create a new account
            </Text>
          </Pressable>
        </Stack>
      </View>
    </SafeAreaView>
  );
};

export default LoginPage;
