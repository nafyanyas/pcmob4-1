import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [arrival, setArrival] = useState("");
  const BUSSTOP_URL = "https://arrivelah2.busrouter.sg/?id=83139";

  function loadBusStopData() {
    fetch(BUSSTOP_URL)
    .then((response)=>response.json())
    .then((json) => {
      const myBus = json.services.filter((bus) => bus.no == 155)[0];
      console.log(myBus.next.time);
      setArrival(myBus.next.time);
      setLoading(false);
    });

    }
  

  useEffect(()=> {
    loadBusStopData();
  }, []);
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bus Arrival Time:</Text>
      <Text style={styles.arrivalTime}>{loading ? <ActivityIndicator color={"blue"} />:arrival} </Text>
      <TouchableOpacity style={styles.button} onPress={()=>setLoading(false)}>
      <Text style={styles.buttonText}>REFRESH</Text>
      </TouchableOpacity>
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

  title:{
  fontSize:25,
  marginVertical: 20,
  },
  arrivalTime:{
    fontSize: 20,
  },
  button:{
    backgroundColor: 'orange',
    padding: 20,
    marginVertical: 20,
    borderRadius:50,
  
  },
  buttonText:{fontSize: 20, color: 'blue',},

});
