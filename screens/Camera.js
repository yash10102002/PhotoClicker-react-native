import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image, Dimensions } from 'react-native';
import { BaseRouter } from '@react-navigation/native';
import { Camera } from "expo-camera"
import {FontAwesome} from "@expo/vector-icons"
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function CameraScreen({route, navigation}){              
    const [hasCameraPermission, sethasCameraPermission] = useState(null)
    const [type, setType] = useState(Camera.Constants.Type.back)
    const [isFlashLightOn, setisFlashLightOn] = useState(Camera.Constants.FlashMode.off)    
    var camera

    useEffect(() => {
        (async () => {
          const { status } = await Camera.requestPermissionsAsync();          
          status ? sethasCameraPermission(true) : sethasCameraPermission(false)
        })();
      }, []);

      const flipCamera = () => {          
          type === Camera.Constants.Type.back 
          ? setType(Camera.Constants.Type.front) : setType(Camera.Constants.Type.back)          
      }

      const FlashLight = () => {               
          isFlashLightOn === Camera.Constants.FlashMode.off 
          ? setisFlashLightOn(Camera.Constants.FlashMode.on) : setisFlashLightOn(Camera.Constants.FlashMode.off)
      }

      const takePicture = async () => {                    
            if(camera){
            let photo = await camera.takePictureAsync()                        
            navigation.navigate("Home",{photo: photo})
          }
      }


      

      if (hasCameraPermission === null) {
        return <View />;
      }
      if (hasCameraPermission === false) {
        return <Text>No access to camera</Text>;
      }
        return (        
            <View style={{flex:1}}>
                <Camera autoFocus={true} useCamera2Api={true} focusDepth={0.9}
                style={styles.cameraview} 
                type={type}
                flashMode = {isFlashLightOn}
                ref={ref => {
                  camera = ref;
                }}

                >
                <View style={styles.actionContainer}>
                  <TouchableOpacity
                  style={styles.iconHolder}
                  onPress = { () =>  flipCamera()}
                  >
                    <FontAwesome  
                    name="camera"
                    size={35}
                    style={styles.icon}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                  style={styles.iconHolder}
                  onPress = { () =>  takePicture()}
                  >
                    <FontAwesome  
                    name="circle"
                    size={35}
                    style={styles.icon}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                  style={styles.iconHolder}
                  onPress = { () =>  FlashLight()}
                  >
                    <FontAwesome  
                    name="flash"
                    size={35}
                    style={styles.icon}
                    />
                  </TouchableOpacity>
                </View>     
                </Camera>                                 
            </View>                             
        );
    
}

const styles = StyleSheet.create({   
  cameraview : {
    flex: 1,
    height: Dimensions.get('window').height,
    width:Dimensions.get('window').width
  },  
  actionContainer: {
    flex: 1,
    flexDirection:'row',
    backgroundColor:'transparent',    
    marginBottom:20,
    alignSelf:'flex-end',
    marginTop:650
  },  
  iconHolder: {
    flex: 1,  
    alignItems:'center',
    alignSelf:'flex-end',    
  },
  icon: {
    marginBottom:10,
    color:'#FFF',
    marginHorizontal:50
  },
});
