import React from 'react';
import { Pressable, Text, StyleSheet, View } from 'react-native';

type CheckboxProps = {
  checked: boolean;
  label: string;
  onToggle: () => void;
};

export default function Checkbox({ checked, label, onToggle }: CheckboxProps) {
  return (
    <Pressable onPress={onToggle} style={styles.row}>
      <View style={[styles.box, checked && styles.checked]} />
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  box: {
    width: 18,
    height: 18,
    borderWidth: 1,
    borderColor: '#9CA3AF',
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
  },
  checked: {
    backgroundColor: '#2563EB',
    borderColor: '#2563EB',
  },
  label: {
    color: '#111827',
  },
});
