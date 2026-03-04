import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

type AppButtonProps = {
  title: string;
  onPress: () => void;
};

export default function AppButton({ title, onPress }: AppButtonProps) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.label}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#111827',
    borderRadius: 8,
  },
  label: {
    color: '#FFFFFF',
    fontWeight: '600',
    textAlign: 'center',
  },
});
