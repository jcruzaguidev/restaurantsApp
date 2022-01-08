import React from 'react';
import { Platform, StatusBar } from 'react-native';
import Navigations from './app/navigations/Navigations';
import Toast from 'react-native-toast-message';
import { toastConfig } from './app/utils/toast';

export default function App() {
   if (Platform.OS == 'ios') {
      StatusBar.setBarStyle('dark-content', true);
   }

   return (
      <>
         <Navigations /> 
         <Toast config={ toastConfig } />
      </>
   );
}
