import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native';

export default function App() {
  const [loading, setLoading] = useState(true);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bus Arrival Time:</Text>
      <Text style={styles.arrivalTime}>{loading ? <ActivityIndicator color={"blue"} />: "loaded"} </Text>
      <TouchableOpacity style={styles.button} onPress={()=>setLoading(false)}>
      <Text style={styles.buttonText}>Refresh</Text>
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
  fontSize:30,
  marginVertical: 20,
  },
  arrivalTime:{
    fontSize: 20,
  },
  button:{
    backgroundColor: 'green',
    padding: 20,
    marginVertical: 20,
  },
  buttonText:{fontSize: 30,},

});
