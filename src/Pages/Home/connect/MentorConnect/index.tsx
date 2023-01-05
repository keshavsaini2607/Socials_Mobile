import {Pressable, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import {Box, Flex, HStack, Image, Stack, Text, VStack} from 'native-base';
import BackHeader from '../../../../components/BackHeader';

//Assets
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import CustomButton from '../../../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';

const referredImages = [
  'https://cdn.pixabay.com/photo/2016/11/29/02/14/man-1866784_1280.jpg',
  'https://cdn.pixabay.com/photo/2021/03/02/13/04/laptop-6062423_1280.jpg',
  'https://cdn.pixabay.com/photo/2019/03/17/12/57/phone-4060860_1280.jpg',
  'https://cdn.pixabay.com/photo/2015/11/26/00/14/woman-1063100_1280.jpg',
  'https://cdn.pixabay.com/photo/2015/07/09/00/29/woman-837156_1280.jpg',
];

const MentorConnect = () => {
  const {navigate} = useNavigation();

  function initiateReferralApplication() {
    navigate('ReferralApplication');
  }
  return (
    <SafeAreaView style={styles.container}>
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
          <Text fontSize="xl">Referrals Given So Far(4)</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <HStack space={4} mt={2}>
              {referredImages.map(rfImage => (
                <Pressable
                  key={rfImage}
                  onPress={() => navigate('NormalUserProfile')}>
                  <Image
                    source={{uri: rfImage}}
                    alt="reffered_user"
                    style={styles.refferedImage}
                  />
                  <Text>Rohan Joshi</Text>
                </Pressable>
              ))}
            </HStack>
          </ScrollView>
        </Box>
      </Stack>
      <VStack style={styles.footer} space={4}>
        <CustomButton title="Send A Hi 🙂" click={() => {}} />
        <CustomButton
          title="Ask For Referral"
          click={initiateReferralApplication}
        />
      </VStack>
    </SafeAreaView>
  );
};

export default MentorConnect;

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
  refferedImage: {
    width: 80,
    height: 80,
    borderRadius: 5,
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    padding: 10,
    width: '100%',
  },
});
