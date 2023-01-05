import {View, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import {Image, Text} from 'native-base';
import {useNavigation} from '@react-navigation/native';

const MentorCard = () => {
  const navigation = useNavigation();

  function handlePress() {
    navigation.navigate('MentorConnect');
  }
  return (
    <Pressable style={styles.card} onPress={handlePress}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: 'https://cdn.pixabay.com/photo/2015/01/08/18/30/entrepreneur-593371_1280.jpg',
          }}
          style={styles.mentorImage}
        />
      </View>
      <View style={styles.infoContainer}>
        <Text bold color="blue.900">
          Sachin Raj
        </Text>
        <Text fontSize="xs">SDE: Microsoft</Text>
      </View>
    </Pressable>
  );
};

export default MentorCard;

const styles = StyleSheet.create({
  card: {
    padding: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    width: '45%',
    marginTop: 10,
  },
  imageContainer: {
    alignItems: 'center',
  },
  mentorImage: {
    width: 150,
    height: 180,
    borderRadius: 5,
  },
  infoContainer: {
    paddingHorizontal: 5,
  },
});
