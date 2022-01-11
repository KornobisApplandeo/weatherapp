import React, {FC} from 'react';
import {
  ActivityIndicator,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import {colors, FontFamily} from '../types/enums';

interface Props {
  title: string;
  isLoading: boolean;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

const Button: FC<Props> = ({title, isLoading, style, onPress}) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <Text style={styles.text}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    backgroundColor: colors.orange,
    padding: 15,
    width: 200,
    alignItems: 'center',
    shadowOffset: {
      width: 20,
      height: 20,
    },
  },
  text: {
    fontFamily: FontFamily.ROBOTO_BOLD,
    color: colors.white,
    fontSize: 12,
  },
});

export default Button;
