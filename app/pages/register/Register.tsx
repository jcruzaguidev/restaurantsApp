import React from 'react';
import { View, Image } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { RegisterForm } from './RegisterForm';
import { styles } from "./Register.styles";

export const Register = () => {

   return (
      <>
         <KeyboardAwareScrollView>
             <Image
                 source={ require("../../../assets/img/logo.png") }
                 resizeMode={"contain"}
                 style={ styles.logo }
             />
             <View style={ styles.viewForm }>
                 <RegisterForm />
             </View>
         </KeyboardAwareScrollView>
      </>
   );
};
