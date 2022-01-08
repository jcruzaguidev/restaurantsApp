import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Search } from '../../pages';

const stack = createNativeStackNavigator();

const SearchStack = () => {
   const { Navigator, Screen } = stack;

   return (
      <>
         <Navigator>
            <Screen name='search' component={ Search } options={{ title:'Búsqueda' }} />
         </Navigator>
      </>
   );
};

export default SearchStack;
