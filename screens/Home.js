import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { BaseRouter } from '@react-navigation/native';

export default function Home({route, navigation}){
  

        const [ph,setPh] = useState("empty")
        useEffect(() => {
          
        }, [])

        const capture = () => {
          if(route.params){                        
            let {photo} = route.params
            return <Image resizeMode='center' style={styles.imageHolder} source={photo} />
        }else{
          return <Text>No</Text>
        }
        }


        return (
            <View style={styles.container}>                     
                {capture()}
                <Button 
                title="Take Photo"
                style={styles.button}
                onPress={() => {
                    navigation.navigate("Camera")
                }}
                />
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
  imageHolder: {
    alignSelf:'center',    
    height:500
  },
  button: {
    margin:20
  }
});
