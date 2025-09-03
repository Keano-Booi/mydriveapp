import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
const age= 22;
const licenseyears= 0;
let feedback='';

if (age>=18){
  feedback= 'You are allowed to drive.Awe mase kind!'
}else 
{
  feedback='your are not allowed to drive yet.Sorry!'
}
  
if (licenseyears>= 3){ 
  feedback ='you are allowed to drive.'
  }else
  {
  feedback ='You are not allowed to drive'
  }




  
  
  return (
    <View style={styles.container}>
     <Text style={styles.response}>{feedback}
      {/*This is my message to the user*/}
     </Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
   response:{
    fontSize: 28,
    color:'black',
    

   }
});
