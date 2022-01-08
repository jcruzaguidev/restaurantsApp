import React from 'react';
import { Image, ScrollView, Text, View } from "react-native";
import { Divider } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./Login.styles";

export const Login = () => {

   function CreateAccount() {
      const navigation = useNavigation<any>();

      return (
         <>
            <Text style={ styles.textRegister }>
               Aún no tienes una cuenta?{ " " }
               <Text style={ styles.btnRegister } onPress={ () => navigation.navigate("register") }>
                  Regístrate
               </Text>
            </Text>
         </>
      );
   }

   return (
      <>
         <ScrollView>
             <Image
                 source={ require("../../../assets/img/logo.png") }
                 resizeMode="contain"
                 style={ styles.logo }
             />
             <View style={styles.viewContainer}>
               <Text>Login Form</Text>
               <CreateAccount />
             </View>
             <Divider style={styles.divider} />
             <Text>Social Login</Text>
         </ScrollView>
      </>
   );
};
