import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
const age=22;
let feedback='';

if (age>= 18) {
  feedback= 'You are allowed to drive.Awe mase kind!'
}else
{
  feedback='your are not allowed to drive yet.Sorry!'
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
   response:{
    fontSize: 28,
    color:'blue',
    

   }
});
