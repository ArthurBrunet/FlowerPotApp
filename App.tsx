import React, {useEffect} from 'react';
import Router from './src/router/Router';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import moment from 'moment';
import 'moment/locale/fr';
import SplashScreen from 'react-native-splash-screen';
moment.locale('fr');
function App(): JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <SafeAreaProvider>
      <Router />
    </SafeAreaProvider>
  );
}

export default App;
