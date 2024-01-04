import {
  Text,
  SafeAreaView,
  StyleSheet,
  useWindowDimensions,
  TouchableOpacity,
  View,
  TextInput,
  Alert,
} from 'react-native';
import axios, { Axios } from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import { log } from 'console';

export default function App() {
  const [text, onChangeText] = useState('');
  const [disable, setDisable] = useState(false);
  const [otp, setOtp] = useState(1);
  const [remainingSeconds, setRemainingSeconds] = useState(30);
  const dimension = useWindowDimensions();
  const count = useRef(30);
  const onPress = () => {
    count.current = 30;
    if (otp === text) {
      Alert.alert('login');
      return;
    }
    setDisable(true);
    const current = Math.round(Math.random() * 1000000);
    console.log(current);
    setOtp(current.toString());
    const timer = setInterval(() => {
      if (count.current != 0) {
        count.current = count.current - 1;
      }
      setRemainingSeconds(prevSeconds => prevSeconds - 1);
    }, 1000);

    setTimeout(() => {
      setDisable(false);
      setRemainingSeconds(30);
      clearInterval(timer);
    }, 30000);
  };

  useEffect(() => {
    if (disable) {
      const timer = setInterval(() => {
        setRemainingSeconds(prevSeconds => Math.max(0, prevSeconds - 1));
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [disable]);
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          display: 'flex',
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <TextInput
            style={
              (styles.input,
              { width: dimension.width / 2, borderWidth: 1, color: '#000' })
            }
            onChangeText={onChangeText}
            value={text}
            placeholder="please enter otp"
            keyboardType="numeric"
          />
          <TouchableOpacity
            style={[
              styles.button,
              {
                backgroundColor: disable ? '#DDDDDD' : 'blue',
                height: 51,
                alignItems: 'center',
                justifyContent: 'center',
              },
            ]}
            onPress={onPress}
            disabled={disable}
          >
            <Text style={{ fontSize: 16, fontWeight: '600', color: '#fff' }}>
              Press Here
            </Text>
          </TouchableOpacity>
        </View>
        {disable && <Text>{`Remaining: ${count.current}s`}</Text>}
        {disable && <Text>{`please enter the otp: ${otp}`}</Text>}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
