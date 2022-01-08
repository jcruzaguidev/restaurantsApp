import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Restaurants } from '../../pages';

const stack = createNativeStackNavigator();

const RestaurantsStack = () => {
   const { Navigator, Screen } = stack;

   return (
      <>
         <Navigator>
            <Screen name='restaurants' component={ Restaurants } options={{ title:'Restaurantes' }} />
         </Navigator>
      </>
   );
};

export default RestaurantsStack;
