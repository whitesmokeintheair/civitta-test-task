import React, { useState } from 'react';
import { TextInput, View, Pressable, Text, StyleSheet, TextInputProps } from 'react-native';

export default function PasswordInput(props: TextInputProps) {
  const [secure, setSecure] = useState(true);

  return (
    <View style={styles.container}>
      <TextInput
        {...props}
        secureTextEntry={secure}
        style={[styles.input, props.style]}
      />
      <Pressable onPress={() => setSecure((prev) => !prev)} style={styles.toggle}>
        <Text style={styles.toggleText}>{secure ? 'Show' : 'Hide'}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  input: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    paddingRight: 60,
  },
  toggle: {
    position: 'absolute',
    right: 12,
    top: 10,
  },
  toggleText: {
    color: '#2563EB',
    fontWeight: '600',
  },
});
