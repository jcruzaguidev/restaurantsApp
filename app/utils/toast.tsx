import { BaseToast } from 'react-native-toast-message';
import { View, Text } from 'react-native';
import { StyleSheet } from "react-native";

export const toastConfig = {
   successToast: (props:any) => (
      <View style={ styles.viewToastSuccess }>
         <Text style={ styles.titleToast }>{ props.text1 }</Text>
         <Text style={ styles.messageToast }>{ props.text2 }</Text>
      </View>
   ),
   errorToast: (props:any) => (
      <View style={ styles.viewToastError }>
         <Text style={ styles.titleToast }>{ props.text1 }</Text>
         <Text style={ styles.messageToast }>{ props.text2 }</Text>
      </View>
   )
}

const styles = StyleSheet.create({
   viewToastSuccess: {
      width:'96%',
      alignSelf:'center',
      height:90,
      borderRadius:6,
      paddingTop:10,
      color:'#fff',
      backgroundColor:'#247aff'
   },
   viewToastError: {
      width:'96%',
      alignSelf:'center',
      height:90,
      borderRadius:6,
      paddingTop:10,
      color:'#fff',
      backgroundColor:'#fa3b31'
   },
   titleToast: {
      fontSize:20,
      fontWeight:'600',
      marginTop:10,
      alignSelf:'center',
      color:'#fff'
   },
   messageToast: {
      fontSize:16,
      fontWeight:'300',
      alignSelf:'center',
      color:'#fff'
   }
})
