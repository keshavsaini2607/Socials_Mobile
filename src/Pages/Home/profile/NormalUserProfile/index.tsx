import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import BackHeader from '../../../../components/BackHeader';
import {Box, Flex, HStack, Image, Stack, VStack, Text} from 'native-base';

import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import CustomButton from '../../../../components/CustomButton';

const NormalUserProfile = () => {
  return (
    <SafeAreaView>
      <BackHeader />
      <Stack mx={2} position="relative">
        <Flex flexDirection="row">
          <Image
            source={{
              uri: 'https://cdn.pixabay.com/photo/2015/07/17/22/42/typing-849806_1280.jpg',
            }}
            style={styles.mentoImage}
            alt="user_mentor_image"
          />
          <Flex ml={4} width="1/2" justifyContent="space-between">
            <VStack>
              <Text fontSize="lg" fontWeight="bold">
                Keshav Saini
              </Text>
              <Text numberOfLines={2} style={styles.textWrap}>
                SDE1 Microsoft Softwares LTD.
              </Text>
            </VStack>
            <HStack space={2}>
              <AntDesignIcons
                name="linkedin-square"
                size={25}
                color="#0B64C3"
              />
              <AntDesignIcons name="github" size={25} />
              <AntDesignIcons name="twitter" size={25} color="#0B64C3" />
            </HStack>
          </Flex>
        </Flex>

        <Box mt={4}>
          <Text fontSize="xl">About Mentor</Text>
          <Text color="gray.600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
            temporibus deserunt expedita sit quibusdam accusamus, aspernatur,
            perspiciatis modi maiores minima itaque tenetur nemo blanditiis!
            Consectetur voluptatum facilis repellat ipsum, amet vitae
            consequuntur dignissimos expedita eligendi aspernatur
            necessitatibus, impedit aliquam cupiditate exercitationem
            accusantium vero optio assumenda neque, earum quasi. Enim, autem!
          </Text>
        </Box>

        <Box mt={4}>
          <Text fontSize="xl">Updated Resume</Text>
          <CustomButton title="Download Resume" click={() => {}} />
        </Box>
      </Stack>
    </SafeAreaView>
  );
};

export default NormalUserProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mentoImage: {
    width: 150,
    height: 150,
    aspectRatio: 1,
    borderRadius: 5,
  },
  textWrap: {
    flexWrap: 'wrap',
    width: '100%',
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    padding: 10,
    width: '100%',
  },
});
