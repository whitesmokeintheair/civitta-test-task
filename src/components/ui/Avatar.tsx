import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

type AvatarProps = {
  size?: number;
  uri?: string;
  fallbackText?: string;
};

export default function Avatar({ size = 44, uri, fallbackText = 'A' }: AvatarProps) {
  const radius = size / 2;
  const textSize = Math.max(14, Math.floor(size * 0.38));

  return (
    <View style={[styles.circle, { width: size, height: size, borderRadius: radius }]}>
      {uri ? (
        <Image source={{ uri }} style={{ width: size, height: size, borderRadius: radius }} />
      ) : (
        <Text style={[styles.text, { fontSize: textSize }]}>{fallbackText.slice(0, 1).toUpperCase()}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  circle: {
    overflow: 'hidden',
    backgroundColor: '#E8EBF7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#111827',
    fontWeight: '700',
  },
});
