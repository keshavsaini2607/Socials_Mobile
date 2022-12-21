import {Pressable, SafeAreaView} from 'react-native';
import React from 'react';
import {
  Box,
  Text,
  Flex,
  FormControl,
  Stack,
  Input,
  WarningOutlineIcon,
  View,
} from 'native-base';
import GoogleLogin from '../../../components/SocialButtons/GoogleLoginButton';
import GithubLogin from '../../../components/SocialButtons/GithubLoginButton';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../../../components/CustomButton';

const LoginPage = () => {
  const {navigate} = useNavigation();
  const login = () => {};

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
            <FormControl isRequired>
              <Stack mx="4">
                <FormControl.Label>Email</FormControl.Label>
                <Input
                  type="text"
                  placeholder="email"
                  paddingTop="4"
                  paddingBottom="4"
                />
                <FormControl.ErrorMessage
                  leftIcon={<WarningOutlineIcon size="xs" />}>
                  Atleast 6 characters are required.
                </FormControl.ErrorMessage>
              </Stack>
              <Stack mx="4" my="2">
                <FormControl.Label>Password</FormControl.Label>
                <Input
                  type="password"
                  placeholder="password"
                  paddingTop="4"
                  paddingBottom="4"
                />
                <FormControl.HelperText>
                  Must be atleast 6 characters.
                </FormControl.HelperText>
                <FormControl.ErrorMessage
                  leftIcon={<WarningOutlineIcon size="xs" />}>
                  Atleast 6 characters are required.
                </FormControl.ErrorMessage>
              </Stack>
              <Stack mx="4">
                <Box alignItems="flex-end">
                  <Text>Reset Password</Text>
                </Box>
              </Stack>
              <Stack mx="4" my="8">
                <CustomButton title="Login" click={login} />
              </Stack>
            </FormControl>
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
