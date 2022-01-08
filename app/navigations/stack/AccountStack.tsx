import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Account, Login, Register } from '../../pages';

const stack = createNativeStackNavigator();

const AccountStack = () => {
   const { Navigator, Screen } = stack;

   return (
      <>
         <Navigator>
            <Screen name='account' component={ Account } options={{ title:'Cuenta' }} />
            <Screen name='login' component={ Login } options={{ title:'Login' }} />
            <Screen name='register' component={ Register } options={{ title:'Registro' }} />
         </Navigator>
      </>
   );
};

export default AccountStack;
