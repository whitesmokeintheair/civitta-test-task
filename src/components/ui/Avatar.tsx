import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type AvatarProps = {
  initials: string;
};

export default function Avatar({ initials }: AvatarProps) {
  return (
    <View style={styles.circle}>
      <Text style={styles.text}>{initials}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E5E7EB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#111827',
    fontWeight: '700',
  },
});
