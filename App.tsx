import React from 'react';
import Router from './src/router/Router';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import moment from 'moment';
import 'moment/locale/fr'; // without this line it didn't work
moment.locale('fr');
function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <Router />
    </SafeAreaProvider>
  );
}

export default App;
