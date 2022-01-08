import React from 'react';
import { Overlay } from "react-native-elements";
import { ActivityIndicator, Text, View } from "react-native";
import { styles } from "./Loading.styles";

interface Props {
   isVisible:boolean;
   text:string
}

const Loading = (props:Props) => {
   const { isVisible, text } = props;

   return (
      <>
         <Overlay
            isVisible={isVisible}
            overlayStyle={ styles.overlay }
         >
            <View style={ styles.view }>
               <ActivityIndicator size='large' color='#247aff' />
               {
                  text && <Text style={ styles.text }>{ text }</Text>
               }
            </View>
         </Overlay>
      </>
   );
};

export default Loading;
