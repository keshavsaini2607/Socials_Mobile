import React from 'react';
import {Flex, Stack, Text} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import {Pressable} from 'react-native';

const BackHeader = () => {
  const {goBack} = useNavigation();
  return (
    <Stack mx={2} mb={4}>
      <Pressable onPress={() => goBack()}>
        <Flex flexDirection="row" alignItems="center">
          <Text fontSize="2xl" mr={2} color="blue.600">
            &#x2190;
          </Text>
          <Text fontSize="md" color="blue.600">
            Go Back
          </Text>
        </Flex>
      </Pressable>
    </Stack>
  );
};

export default BackHeader;
