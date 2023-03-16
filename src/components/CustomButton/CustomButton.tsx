import React, {FC} from 'react';
import {Props} from './props';
import {Pressable, Text} from 'react-native';
import styles from './styles';

export const CustomButton: FC<Props> = props => {
  const {title, onPress} = props;

  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};
