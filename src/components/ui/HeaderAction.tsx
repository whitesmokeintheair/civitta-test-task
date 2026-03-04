import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

type HeaderActionProps = {
  label: string;
  onPress: () => void;
};

export default function HeaderAction({ label, onPress }: HeaderActionProps) {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
  },
  label: {
    color: '#2563EB',
    fontWeight: '600',
  },
});
