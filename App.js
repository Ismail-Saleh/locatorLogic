import React, {useState,useEffect} from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import { StyleSheet,ActivityIndicator} from 'react-native'

const initialState = {
  latitude: null,
  longitude: null,
  latitudeDelta: 0.015,
  longitudeDelta: 0.0121,
}

const App = () => {

  const [currentPosition, setCurrentPosition] = useState(initialState)
  
  useEffect(()=>{
   


    setCurrentPosition({
      ...currentPosition,
      latitude: 37.78825,
      longitude: -122.4324,
    })
  })
      return currentPosition.latitude ? (
        
          <MapView
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={styles.map}
            region={currentPosition}
          >
          </MapView>
    
        ):
        <ActivityIndicator style={{flex:1}} animating size='large'/>
};
export default App;
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex:1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});