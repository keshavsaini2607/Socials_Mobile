import {Animated, View} from 'react-native';
import React, {useRef} from 'react';

//Components
import CollapsableTopbar from '../../../components/CollapsableTopbar';

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
        <View style={styles.bannerContainer}>
          <Animated.Image style={styles.banner(scrollA)} source={dashimage} />
        </View>
      </Animated.ScrollView>
    </View>
  );
};

export default DashboardPage;

const styles = {
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
