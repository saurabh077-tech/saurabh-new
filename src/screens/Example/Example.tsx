import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  useWindowDimensions,
  FlatList,
  ScrollView,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useTheme } from '../../hooks';
import { TouchableOpacity } from 'react-native-gesture-handler';
import axios, { Axios } from 'axios';
import Carousel from 'react-native-reanimated-carousel';
import { useGetPopluarmovieApiQuery } from '@/services/modules/popluar';
import { useNavigation } from '@react-navigation/native';
import { useGetUpcomingmovieApiQuery } from '@/services/modules/upcomming';

const Example = () => {
  const [popluar, setpopluar] = useState([]);
  const [upcomming, setupcomming] = useState([]);
  const { data, isFetching, isLoading } = useGetPopluarmovieApiQuery({});
  // const{data:data1,isFetching} = useGetUpcomingmovieApiQuery
  useEffect(() => {
    init();
  }, [isFetching, isLoading]);
  const init = async () => {
    setpopluar(data?.results);
    // setupcomming(data1?.results);
  };
  // console.log('sfhsddasdh', data1);
  const dimention = useWindowDimensions();
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: '#000' }}>
      <ScrollView>
        <Image
          source={require('@/theme/assets/images/tom_light.png')}
          style={{ height: 50, width: 50, resizeMode: 'contain' }}
          height={50}
          width={50}
          resizeMode="cover"
        />
        {/* tabbar area */}
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginLeft: 10,
            padding: 5,
            height: 50,
            // borderWidth: 2,
            // borderColor: '#000',
          }}
        >
          <TouchableOpacity
            style={styles.tabstyle}
            onPress={() => navigation.navigate('Startup')}
          >
            <Text style={styles.tabtext}>Popler</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabstyle}>
            <Text style={styles.tabtext}>upcoming</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabstyle}>
            <Text style={styles.tabtext}>clasic</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabstyle}>
            <Text style={styles.tabtext}>top10</Text>
          </TouchableOpacity>
        </View>
        <Text
          style={{ color: '#fff', fontSize: 20, fontWeight: '600', top: 1 }}
        >
          Now playing
        </Text>
        <View>
          <Carousel
            height={400}
            width={dimention.width}
            data={popluar as unknown[]}
            autoPlay
            mode="parallax"
            parallaxScrollingOffset={50}
            parallaxScrollingScale={0.9}
            renderItem={({ item, index }) => (
              <View
                key={item?.id}
                style={{
                  width: dimention.width,
                  // alignItems: 'center',
                  display: 'flex',
                  justifyContent: 'center',
                  // borderWidth: 2,
                  // borderColor: '#000',
                }}
              >
                <Image
                  source={{
                    uri: `https://www.themoviedb.org/t/p/w440_and_h660_face${item.backdrop_path}`,
                  }}
                  resizeMode="cover"
                  style={{
                    height: 400,
                    width: '100%',
                    borderRadius: 10,
                  }}
                />
                <Text
                  style={{
                    color: '#fff',
                    fontSize: 20,
                    fontWeight: '600',
                    maxHeight: 24,
                  }}
                >
                  {item?.original_title}
                </Text>
              </View>
            )}
          />
        </View>
        <Text style={{ color: '#f0f0f0', fontSize: 20, fontWeight: '600' }}>
          Popluar
        </Text>

        <FlatList
          data={popluar as unknown[]}
          horizontal
          renderItem={({ item }) => (
            <View
              key={item?.id}
              style={{
                width: dimention.width / 3.1,
                // alignItems: 'center',
                display: 'flex',
                justifyContent: 'center',
                borderWidth: 2,
                borderColor: '#000',
              }}
            >
              <Image
                source={{
                  uri: `https://www.themoviedb.org/t/p/w440_and_h660_face${item.backdrop_path}`,
                }}
                resizeMode="cover"
                style={{
                  height: 200,
                  width: '100%',
                  borderRadius: 10,
                }}
              />
              <Text
                style={{
                  color: '#fff',
                  fontSize: 14,
                  fontWeight: '400',
                  maxHeight: 24,
                }}
              >
                {item?.original_title}
              </Text>
            </View>
          )}
        />
        <Text style={{ color: '#f0f0f0', fontSize: 20, fontWeight: '600' }}>
          upcoming
        </Text>

        <FlatList
          data={upcomming as unknown[]}
          horizontal
          renderItem={({ item }) => (
            <View
              key={item?.id}
              style={{
                width: dimention.width / 3.1,
                // alignItems: 'center',
                display: 'flex',
                justifyContent: 'center',
                borderWidth: 2,
                borderColor: '#000',
              }}
            >
              <Image
                source={{
                  uri: `https://www.themoviedb.org/t/p/w440_and_h660_face${item.backdrop_path}`,
                }}
                resizeMode="cover"
                style={{
                  height: 200,
                  width: '100%',
                  borderRadius: 10,
                }}
              />
              <Text
                style={{
                  color: '#fff',
                  fontSize: 14,
                  fontWeight: '400',
                  maxHeight: 24,
                }}
              >
                {item?.original_title}
              </Text>
            </View>
          )}
        />
      </ScrollView>
    </View>
  );
};

export default Example;

const styles = StyleSheet.create({
  tabstyle: {
    padding: 2,
    margin: 3,
    borderRadius: 15,
    borderColor: '#fff',
    borderWidth: 1,
  },
  tabtext: {
    fontWeight: '400',
    fontSize: 10,
    color: '#fff',
    paddingHorizontal: 4,
    paddingVertical: 2,
  },
});
