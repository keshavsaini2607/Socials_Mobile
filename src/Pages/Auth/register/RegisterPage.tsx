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
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../../../components/CustomButton';

const RegisterPage = () => {
  const {navigate} = useNavigation();

  const register = () => {};

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
            <FormControl isRequired>
              <Stack mx="4">
                <FormControl.Label>Full Name</FormControl.Label>
                <Input
                  type="text"
                  placeholder="full name"
                  paddingTop="4"
                  paddingBottom="4"
                />
                <FormControl.ErrorMessage
                  leftIcon={<WarningOutlineIcon size="xs" />}>
                  Atleast 6 characters are required.
                </FormControl.ErrorMessage>
              </Stack>
              <Stack mx="4" my="2">
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
              <Stack mx="4">
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
              <Stack mx="4" my="8">
                <CustomButton title="Register" click={register} />
              </Stack>
            </FormControl>
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
