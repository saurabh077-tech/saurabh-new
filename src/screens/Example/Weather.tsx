import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Alert,
  Image,
} from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';

const Weather = () => {
  const [City, setcity] = useState('');
  const [temp, settemp] = useState();
  const [icon, seticon] = useState();
  const [weather, setweather] = useState();
  const apiKey = '53866596a40f4d90f8e2b66ec4232869';
  const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  const getWeatherData = async (city: string) => {
    try {
      const response = await axios.get(apiUrl, {
        params: {
          q: city,
          appid: apiKey,
          units: 'metric', // or 'imperial' for Fahrenheit
        },
      });
      console.log('weather', response);
      console.log('weather', response);
      setweather(response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching weather data:', error);
      Alert.alert('enter correct city name');
      throw error;
    }
  };
  console.log(weather);

  return (
    <View
      style={{
        display: 'flex',
        backgroundColor: '#46383c',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text
        style={{
          textAlign: 'center',
          fontSize: 28,
          fontWeight: '700',
          color: '#fff',
          bottom: 40,
        }}
      >
        Weather App
      </Text>
      <View
        style={{
          height: 100,
          width: '96%',
          alignSelf: 'center',
          display: 'flex',
          flexDirection: 'row',
          // bottom: 60,
          marginTop: 60,
        }}
      >
        <View
          style={{
            flex: 4,
            // borderColor: '#000000',
            // borderWidth: 2,
            // alignItems: 'center',
            justifyContent: 'space-around',
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: '500', color: '#fff' }}>
            Temperature:{weather?.main?.temp}
          </Text>
          <Text style={{ fontSize: 16, fontWeight: '500', color: '#fff' }}>
            Weather condition:{weather?.weather[0]?.main}
          </Text>
          <Text style={{ fontSize: 16, fontWeight: '500', color: '#fff' }}>
            Weather condition:{weather?.weather[0]?.description}
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            // borderColor: '#000000',
            // borderWidth: 2,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Image
            source={
              weather?.weather[0]?.icon == undefined
                ? require('@/Assets/ALT_image.jpeg')
                : {
                    uri: `https://openweathermap.org/img/wn/${weather?.weather[0]?.icon}.png`,
                  }
            }
            style={{ height: 50, width: 50, resizeMode: 'contain' }}
            defaultSource={require('@/Assets/ALT_image.jpeg')} // Add a default image source
            alt="Weather Icon" // Alt attribute is not used in React Native, but you can add a descriptive comment
          />
        </View>
      </View>
      <TextInput
        placeholderTextColor={'#fff'}
        placeholder="enter city name"
        onChangeText={setcity}
        style={{
          borderColor: '#fff',
          color: '#fff',
          borderWidth: 2,
          width: '90%',
          textAlign: 'center',
          fontSize: 18,
          fontWeight: '700',
          marginTop: 40,
        }}
      />
      <TouchableOpacity
        onPress={() => getWeatherData(City)}
        style={{
          borderColor: '#fff',
          backgroundColor: '#fff',
          borderWidth: 2,
          width: '80%',
          marginTop: 20,
          height: 40,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 40,
        }}
      >
        <Text style={{ textAlign: 'center' }}>press me</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => getWeatherData(City)}
        style={{
          // borderColor: '#fff',
          // backgroundColor: '#fff',
          // borderWidth: 2,
          // width: '80%',
          marginTop: 10,
          height: 40,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 40,
        }}
      >
        <Text
          style={{
            textAlign: 'center',
            fontSize: 16,
            fontWeight: 600,
            color: '#fff',
          }}
        >
          Refresh me
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Weather;

const styles = StyleSheet.create({});
