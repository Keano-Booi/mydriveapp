import React from 'react';
import { StyleSheet, Text, View, Image,SafeAreaView} from 'react-native';

export default function App() {
const age= 22;
const licenseyears= 3;
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

  //Adding a switch statement
  let drivingRank='';
  switch (licenseyears) {
      case 0:
        drivingRank='Newbie driver';
        break;
        case 1:
          drivingRank='Rookie driver with a year of experience';
          break; 

          case 2:
            drivingRank='intermediate driver'
            break;

            case 3:
              drivingRank='Qualified driver'
              break;

              case 4 :
              drivingRank='experienced driver'
              break;

              default:
                drivingRank='veteran driver with many years of experience'

  }






  
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
      <Text style={[styles.response,{fontSize:48,color:'black'}]}>Driving license checker</Text>
        <Image source={{uri:'https://media.istockphoto.com/id/1665923565/nl/foto/happy-pretty-young-woman-leaning-out-of-car-window-traveling-on-holiday-road-trip-travel.jpg?s=2048x2048&w=is&k=20&c=0AudEu3qN_2oGk8mVjVqaC2PmzG2CbWIg8jdBFzjVmY=',}}
        style={styles.image}/>
         <Text style={styles.response}>Age: {age}</Text>
         <Text style={styles.response}>licenseyears: {licenseyears}</Text>


     <Text style={[styles.response,{fontSize:42,color:'black'}]}>{feedback}
      {/*This is my message to the user*/}
     </Text>
     <Text style={[styles.response,{fontSize:40,color:'black',alignItems:'center'}]}>{drivingRank}
      {/*This is my message to the user*/}
     </Text>
      
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },

  content:{
    width:'100%',
    alignItems:'center',
  },

   response:{
    fontSize: 28,
    color:'black',
    fontWeight:'bold',
    marginVertical: 30,
   },

   image: {
    width: 700,
    height:400,
    resizeMode:'contain',
    top: 0,

    

   }
});
