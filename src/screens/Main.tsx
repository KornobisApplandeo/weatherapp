import React, {FC, useCallback, useState} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {IWeatherResponse, searchForWeather, WeatherData} from '../api';
import {BaseTextInput, Button} from '../components';
import WeatherItem from '../components/WeatherItem';
import {colors, FontFamily} from '../types/enums';

const Main: FC = () => {
  const [searchInput, setSerachInput] = useState<string>();
  const [weatherResult, setWeatherResult] = useState<WeatherData[]>();
  const [isLoading, setIsLoading] = useState(false);

  const searchWeather = useCallback(async () => {
    if (searchInput) {
      try {
        setIsLoading(true);
        const response = await searchForWeather(searchInput);
        const jsonResponse: IWeatherResponse = await response?.json();
        if (jsonResponse) {
          setWeatherResult(jsonResponse.list);
        }
        setIsLoading(false);
      } catch (e) {
        console.log('error:', e);
        setIsLoading(false);
      }
    }
  }, [searchInput]);

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollview}
        contentInsetAdjustmentBehavior="automatic">
        <View style={styles.bodyWrapper}>
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>Hello Sunshine!</Text>
            <Text style={styles.subtitle}>
              Can you please tell me the weather in Germany?
            </Text>
            <Text style={styles.body}>Please enter a city</Text>
            <BaseTextInput onChangeText={setSerachInput} style={styles.input} />
            <Button
              title="Have a look"
              isLoading={isLoading}
              style={styles.button}
              onPress={searchWeather}
            />
            {weatherResult?.map((item, index) => (
              <View key={index} style={styles.weatherItem}>
                <WeatherItem data={item} />
              </View>
            ))}
          </View>
          <View style={styles.image}>
            <Image source={require('../assets/images/taxi-design.png')} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bodyWrapper: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
  },
  scrollview: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  titleWrapper: {
    paddingHorizontal: 30,
    alignItems: 'center',
    width: '100%',
  },
  title: {
    paddingVertical: 30,
    fontFamily: FontFamily.NUNITO_BLACK,
    fontSize: 30,
    color: colors.orange,
  },
  subtitle: {
    fontFamily: FontFamily.NUNITO_BLACK,
    fontSize: 30,
    textAlign: 'center',
  },
  body: {
    fontFamily: FontFamily.ROBOTO_REGULAR,
    fontSize: 16,
    paddingTop: 30,
    paddingBottom: 15,
  },
  weatherItem: {
    width: '100%',
    paddingBottom: 20,
  },
  input: {
    width: '80%',
    height: 50,
    borderWidth: 1,
  },
  button: {
    marginVertical: 20,
  },
  image: {
    width: 300,
    height: 300,
    overflow: 'hidden',
    alignSelf: 'flex-end',
  },
});

export default Main;
