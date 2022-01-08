import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Favorites } from '../../pages';

const stack = createNativeStackNavigator();

const FavoritesStack = () => {
   const { Navigator, Screen } = stack;

   return (
      <>
         <Navigator>
            <Screen name='favorites' component={ Favorites } options={{ title:'Favoritos' }} />
         </Navigator>
      </>
   );
};

export default FavoritesStack;
