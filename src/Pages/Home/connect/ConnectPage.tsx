import {
  SafeAreaView,
  View,
  StyleSheet,
  StatusBar,
  ScrollView,
} from 'react-native';
import React from 'react';
import {Flex, Text} from 'native-base';
import Searchbar from '../../../components/Searchbar';
import MentorCard from '../../../components/MentorCard';

const ConnectPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView>
        <View style={styles.connectHeader}>
          <Text fontSize="xl">Connect with your favourite mentors!</Text>
          <Text color="gray.700">
            And tell them your story and convince them to refer you for your
            next dream job.
          </Text>
        </View>
        <Searchbar />
        <Flex
          mx={2}
          flexDirection="row"
          flexWrap="wrap"
          justifyContent="space-between">
          <MentorCard />
          <MentorCard />
          <MentorCard />
          <MentorCard />
          <MentorCard />
          <MentorCard />
          <MentorCard />
          <MentorCard />
          <MentorCard />
        </Flex>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ConnectPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  connectHeader: {
    padding: 10,
  },
  searchInput: {
    width: '80%',
  },
});
