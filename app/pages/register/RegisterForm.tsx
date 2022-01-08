import React, { useState} from 'react';
import { View } from 'react-native'
import { Input, Button } from 'react-native-elements';
import { size, isEmpty } from 'lodash';
import { useNavigation } from "@react-navigation/native";
import Toast from 'react-native-toast-message';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../utils/firebase';
import { Loading } from '../../components';
import { validationEmail } from '../../utils/validateEmail';
import { styles } from './Register.styles';

const INITIAL_STATE = {
   email:'',
   password:'',
   replyPassword:''
}

export const RegisterForm = () => {
   const [loading, setLoading] = useState(false);
   const [formData, setFormData] = useState(INITIAL_STATE);
    const navigation = useNavigation<any>();

   const onChange = (value:string, type:string) => {
      setFormData({ ...formData, [type]:value });
   }

   const handleSubmit = () => {
      if (
         isEmpty(formData.email) ||
         isEmpty(formData.password) ||
         isEmpty(formData.replyPassword)
      ) {
         Toast.show({
            type: 'errorToast',
            text1: 'Alerta!',
            text2: 'Todos los campos son necesarios.',
         });
      } else if (!validationEmail(formData.email)) {
         Toast.show({
            type: 'errorToast',
            text1: 'Alerta!',
            text2: 'El formato del correo no es válido.',
         });
      } else if (formData.password !== formData.replyPassword) {
         Toast.show({
            type: 'errorToast',
            text1: 'Alerta!',
            text2: 'Las contraseñas no coinciden.',
         });
      } else if (size(formData.password) < 6) {
         Toast.show({
            type: 'errorToast',
            text1: 'Alerta!',
            text2: 'La contraseña debe tener minimo 6 caracteres!!!',
         });
      } else {
         setLoading(true);
         createUserWithEmailAndPassword(auth, formData.email, formData.password)
            .then(() => {
               setLoading(false);
               navigation.navigate("account");
            })
            .catch((err) => {
               setLoading(false);

               Toast.show({
                  type: 'errorToast',
                  text1: 'Error!',
                  text2: 'El correo está en uso.',
               });
               console.log(err);
            });
      }
   };

   return (
      <>
         <View style={ styles.inputForm }>
            <Input
               placeholder="Correo electrónico"
               containerStyle={ styles.inputForm }
               onChange={ e => onChange(e.nativeEvent.text, 'email') }
            />
            <Input
               placeholder="Contraseña"
               containerStyle={ styles.inputForm }
               secureTextEntry={ true }
               onChange={ e => onChange(e.nativeEvent.text, 'password') }
            />
            <Input
               placeholder="Repetir contraseña"
               containerStyle={ styles.inputForm }
               secureTextEntry={ true }
               onChange={ e => onChange(e.nativeEvent.text, 'replyPassword') }
            />
            <Button 
               title="Registrarse"
               containerStyle={ styles.btnContainerStyle }
               buttonStyle={ styles.btnRegister }
               onPress={ handleSubmit }
            />
            <Loading isVisible={ loading } text="Creando cuenta" />
         </View>
      </>
   );
};
