import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

type CheckboxProps = {
  checked: boolean;
  onChange: () => void;
};

export default function Checkbox({ checked, onChange }: CheckboxProps) {
  return (
    <Pressable onPress={onChange} style={styles.button} hitSlop={8}>
      <View style={styles.box}>{checked ? <View style={styles.inner} /> : null}</View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    minWidth: 28,
    minHeight: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#D2D6E0',
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inner: {
    width: 12,
    height: 12,
    borderRadius: 2,
    backgroundColor: '#2F2CE5',
  },
});
