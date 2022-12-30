import {StyleSheet} from 'react-native';
import React from 'react';
import {Flex, Image, Text, Box} from 'native-base';

//Assets
import AntDesign from 'react-native-vector-icons/AntDesign';
import MatIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';

const Post = () => {
  return (
    <Box my={4}>
      <Flex flexDirection="row" alignItems="center" paddingBottom={1}>
        <Image
          source={{
            uri: 'https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_1280.jpg',
          }}
          style={styles.profile}
          alt="imageLink"
        />
        <Box
          ml={2}
          borderBottomWidth={1}
          flex={1}
          borderBottomColor="gray.400"
          paddingBottom={1}>
          <Text bold>Keshav Saini</Text>
          <Text color="blue.400">Sponsored Link</Text>
        </Box>
      </Flex>
      <Box>
        <Text color="gray.700" my="1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
          temporibus sequi voluptatem.
        </Text>
      </Box>
      <Box>
        <Image
          source={{
            uri: 'https://cdn.pixabay.com/photo/2022/12/22/20/18/oil-candles-7672890_1280.jpg',
          }}
          style={styles.postImage}
          alt="imageLink"
        />
        <Flex paddingTop={2} flexDirection="row" justifyContent="space-between">
          <Flex flexDirection="row">
            <AntDesign name="hearto" size={25} />
            <Box mx={2} />
            <MatIcon name="comment-text-outline" size={25} />
          </Flex>
          <FeatherIcon name="bookmark" size={25} />
        </Flex>
      </Box>
    </Box>
  );
};

export default Post;

const styles = StyleSheet.create({
  profile: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  postImage: {
    height: 200,
  },
});
