import { useFonts } from 'expo-font';
import { Header } from 'react-native/Libraries/NewAppScreen';
import { Icons } from './assets/Icons';


const Header = () => {
    return (  
        <View style={styles.navBar}>
        <Image
        style={styles.navlogo}
        source={require('./assets/Icons/menu_light.png')}
        />
        <Text
          style={{
            fontFamily: 'SydneyBold', 
            fontSize: 32,// add a box icon and do justifycontent space between to spred out the container 
            color: 'black'
          }}>
          ensom
        </Text> 
        <Image
        style={styles.navlogo}
        source={require('./assets/Icons/sun.png')}
        />
      </View>
    );
}


export { Header };