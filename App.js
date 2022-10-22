import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View, Image, ImageStyle, StatusBar, SafeAreaView, ImageBackground, Dimensions } from 'react-native';
import { useFonts } from 'expo-font';
import { Themes } from './assets/Themes';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



export default function App() {
  let [fontsLoaded] = useFonts({
    Sydney: require('./assets/Fonts/Sydney-Serial-Regular.ttf'),
    SydneyBold: require('./assets/Fonts/Sydney-Serial-Bold.ttf'),
  });
  
  if (!fontsLoaded) return <AppLoading />;
  StatusBar.setBarStyle(Themes.light.statusBar);
 

  return (
      <SafeAreaView style={styles.safeContainer}>
        
        <View style={styles.navBar}>
          <Image
          style={styles.navlogo}
          source={require('./assets/Icons/menu_light.png')}
          />
          <Text
            style={{
              fontFamily: 'SydneyBold', 
              fontSize: 32,
              color: 'black'
            }}>
            ensom
          </Text> 
          <Image
          style={styles.navlogo}
          source={require('./assets/Icons/sun.png')}
          />
        </View>

        {/* blank line */}
        <View style={styles.emptyline}>  
        </View>

{/* mtl picture */}
        <View style={styles.profileContainer}>
          <ImageBackground source={require('./assets/Profiles/mtl.jpg')} ImageStyle = {{borderRadius: 30}} resizeMode='cover' style={styles.imageProfile}>
            <Text style={{
              fontFamily: 'Sydney', 
              fontSize: 34, 
              color: 'white',
            }}>MTL</Text>
            <Text style={{
              fontFamily: 'Sydney', 
              fontSize: 20,
              color: 'white',
            }}>2 miles away</Text>
          </ImageBackground>
        </View>

        {/* blank line */}
        <View style={styles.emptyline}>  
        </View>

{/* part with audio */}
        <View style={styles.whiteBox}>
          <Text
            style={{
              fontFamily: 'Sydney', 
              fontSize: 24,
              color: 'black'
            }}>
            My hottest take
          </Text>
{/* nesting the audio stuff on the same line */}
          <View style={styles.audiorow}>
              <Image
              style={styles.navlogo}
              source={require('./assets/Icons/player_light.png')}
              />
              <Image
              style={styles.audiologo}
              source={require('./assets/Icons/audio_waveform_light.png')}
              />
          </View>
          
        </View>

      <View style={styles.emptylinebig}>  
      </View>

{/* bottom bar group */}
        <View style={styles.navBarBottom}>
          <Image
          style={styles.navlogo}
          source={require('./assets/Icons/discover_dark.png')}
          />
          
          <Image
          style={styles.navlogo}
          source={require('./assets/Icons/heart_dark.png')}
          />

          <Image
          style={styles.navlogo}
          source={require('./assets/Icons/messages_light.png')}
          />
        </View>

      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    backgroundColor: '#fcf8f7',
  },
  navBar: {
    height: 0.05 * windowHeight,
    width: windowWidth,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '10%',
  },
  navlogo: {
    width: windowWidth * 0.10,
    height: windowWidth * 0.10,
  },
  emptyline: {
    height: 0.025 * windowHeight,
  },
  profileContainer: {
    width: 0.80 * windowWidth,
    alignContent: 'center',
    alignSelf: 'center',
    borderRadius: 15,
  },
  imageProfile: {
    borderRadius: 15,
    height: 0.50 * windowHeight,
    justifyContent: 'space-between',
    padding: '2.5%',

  },
  whiteBox: {
    backgroundColor: 'white',
    alignSelf: 'center',
    justifyContent: 'space-between',
    paddingVertical: 30,
    paddingHorizontal: 10,
    borderRadius: 15,
    height: 0.175 * windowHeight,
    width: 0.8 * windowWidth,
  },
  audiologo: {
    height: windowWidth * 0.10,
    width: windowWidth * 0.65,
    resizeMode: 'contain',
  },
  audiorow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  emptylinebig: {
    height: 0.10 * windowHeight,
  },
  navBarBottom: {
    backgroundColor: 'black',
    width: windowWidth,
    height: 0.10 * windowHeight,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
  },
});
