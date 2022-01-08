import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AccountStack, FavoritesStack, RestaurantsStack, SearchStack, TopRestaurantsStack } from "./stack";
import { Icon } from "react-native-elements/dist/icons/Icon";

const Tab = createBottomTabNavigator();

const Navigations = () => {

   function screenOptions( route:any, color:string ){
      const { name } = route;
      let iconName:string = '';

      switch (name) {
         case "restaurants-stack":
            iconName = "compass-outline"
            break;
         case "favorites-stack":
            iconName = "heart-outline"
            break;
         case "top-restaurants-stack":
            iconName = "star-outline"
            break;
         case "search-stack":
            iconName = "magnify"
            break;
         case "account-stack":
            iconName = "home-outline"
            break;
         default:
            break;
      }

      return (
         <Icon name={ iconName } type={ 'material-community' } size={ 22 } color={ color }/>
      )
   }

   return (
     <NavigationContainer>
        <Tab.Navigator
           screenOptions={({ route }) => ({
               tabBarIcon: ({ color }) => screenOptions(route, color)
           })}
        >
         <Tab.Screen
           name="restaurants-stack"
           component={ RestaurantsStack }
           options={{ title: "Restaurantes", headerShown: false }}
         />
         <Tab.Screen
           name="favorites-stack"
           component={ FavoritesStack }
           options={{ title: "Favoritos", headerShown: false }}
         />
         <Tab.Screen
           name="top-restaurants-stack"
           component={ TopRestaurantsStack }
           options={{ title: "Top 5", headerShown: false }}
         />
         <Tab.Screen
           name="search-stack"
           component={ SearchStack }
           options={{ title: "Búsqueda", headerShown: false }}
         />
         <Tab.Screen
           name="account-stack"
           component={ AccountStack }
           options={{ title: "Cuenta", headerShown: false }}
         />
       </Tab.Navigator>
     </NavigationContainer>
   );
};

export default Navigations;
