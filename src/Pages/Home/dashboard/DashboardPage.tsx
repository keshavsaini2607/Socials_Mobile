import {Animated, StyleSheet, View} from 'react-native';
import React, {useRef} from 'react';

//Components
import CollapsableTopbar from '../../../components/CollapsableTopbar';
import Post from '../../../components/Post';

//static assets
import dashimage from '../../../assets/dash.jpg';
import {BANNER_H} from '../../../utils/constants';

const DashboardPage = () => {
  const scrollA = useRef(new Animated.Value(0)).current;

  return (
    <View>
      <CollapsableTopbar title="Socials" scrollA={scrollA} />
      <Animated.ScrollView
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollA}}}],
          {
            useNativeDriver: true,
          },
        )}
        scrollEventThrottle={16}>
        <View style={bannerStyles.bannerContainer}>
          <Animated.Image
            style={bannerStyles.banner(scrollA)}
            source={dashimage}
          />
        </View>
        <View style={styles.posts}>
          {/* <Text style={styles.headingText}>
            You'll find the posts that interest's you over here
          </Text> */}
          <Post />
          <Post />
          <Post />
          <Post />
        </View>
      </Animated.ScrollView>
    </View>
  );
};

export default DashboardPage;

const bannerStyles = {
  bannerContainer: {
    marginTop: -1000,
    paddingTop: 1000,
    alignItems: 'center',
    overflow: 'hidden',
  },
  banner: (scrollA: any) => ({
    height: BANNER_H,
    width: '200%',
    transform: [
      {
        translateY: scrollA.interpolate({
          inputRange: [-BANNER_H, 0, BANNER_H, BANNER_H + 1],
          outputRange: [-BANNER_H / 2, 0, BANNER_H * 0.75, BANNER_H * 0.75],
        }),
      },
      {
        scale: scrollA.interpolate({
          inputRange: [-BANNER_H, 0, BANNER_H, BANNER_H + 1],
          outputRange: [2, 1, 0.5, 0.5],
        }),
      },
    ],
  }),
};

const styles = StyleSheet.create({
  headingText: {
    fontSize: 25,
    fontWeight: 'bold',
    letterSpacing: 1,
    lineHeight: 30,
    fontFamily: 'ProstoOne-Regular',
  },
  posts: {
    padding: 10,
  },
});
