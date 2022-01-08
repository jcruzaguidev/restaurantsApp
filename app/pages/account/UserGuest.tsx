import React from 'react';
import { View, ScrollView, Text, Image } from "react-native";
import { Button } from 'react-native-elements';
import { useNavigation } from "@react-navigation/native";
import { styles } from "./Account.styles";

const UserGuest = () => {
   const navigation = useNavigation<any>();

   return (
     <>
       <ScrollView centerContent={true} style={styles.viewBody}>
         <Image
           style={styles.image}
           source={require("../../../assets/img/user-guest.jpg")}
           resizeMode={"contain"}
         />
         <Text style={styles.title}>Consulta tu perfil de 5 Tenedores</Text>
         <Text style={styles.description}>
           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, aperiam
           cumque distinctio inventore nobis numquam officia omnis tenetur ullam
           velit. Aliquid ducimus earum quas sed sint voluptates! Autem, quidem
           voluptas?
         </Text>
         <View style={styles.viewBtn}>
           <Button
             title={"Ver tu perfil"}
             buttonStyle={styles.btnStyle}
             containerStyle={styles.btnContainer}
             onPress={() => navigation.navigate("login")}
           />
         </View>
       </ScrollView>
     </>
   );
};

export default UserGuest;
