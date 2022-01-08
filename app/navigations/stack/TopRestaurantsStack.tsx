import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TopRestaurants } from '../../pages';

const stack = createNativeStackNavigator();

const TopRestaurantsStack = () => {
   const { Navigator, Screen } = stack;

   return (
      <>
         <Navigator>
            <Screen name='top-restaurant' component={ TopRestaurants } options={{ title:'Top 5' }} />
         </Navigator>
      </>
   );
};

export default TopRestaurantsStack;
