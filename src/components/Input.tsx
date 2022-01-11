import React, {FC} from 'react';
import {TextInput, StyleProp, TextStyle} from 'react-native';

interface Props {
  onChangeText: (text: string) => void;
  style: StyleProp<TextStyle>;
}

const BaseTextInput: FC<Props> = ({onChangeText, style}) => {
  return (
    <TextInput onChangeText={onChangeText} style={style} textAlign="center" />
  );
};

export default BaseTextInput;
