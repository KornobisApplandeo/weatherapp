import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {WeatherData} from '../api';
import {colors, FontFamily} from '../types/enums';
import {format} from 'date-fns';

interface Props {
  data: WeatherData;
}

const WeatherItem: FC<Props> = ({data}) => {
  return (
    <View style={styles.container}>
      <View style={styles.dateWrapper}>
        <Text style={styles.timeText}>
          {format(new Date(data.dt_txt), 'eeeeee, dd.MM.yyyy')}
        </Text>
        <Text style={styles.timeText}>
          {format(new Date(data.dt_txt), 'p')}
        </Text>
      </View>
      <Text style={styles.temperatureText}>
        temperature: {data.main.temp} K
      </Text>
      <Text style={styles.feelsLikeTempText}>
        feels like temperature: {data.main.feels_like} K
      </Text>
      <View style={styles.descriptionWrapper}>
        <Text style={styles.descriptionText}>
          {data.weather[0].description}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 20,
  },
  dateWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  temperatureText: {
    fontSize: 16,
    fontFamily: FontFamily.ROBOTO_BOLD,
    paddingVertical: 5,
  },
  feelsLikeTempText: {
    fontSize: 16,
    fontFamily: FontFamily.ROBOTO_BOLD,
  },
  descriptionText: {
    fontSize: 12,
    marginRight: 8,
    fontFamily: FontFamily.ROBOTO_BOLD,
  },
  descriptionWrapper: {
    marginTop: 15,
    borderRadius: 25,
    padding: 7,
    backgroundColor: colors.light_blue,
    alignSelf: 'flex-start',
  },
  timeText: {
    fontSize: 14,
    fontFamily: FontFamily.ROBOTO_BOLD,
    color: colors.orange,
  },
});

export default WeatherItem;
