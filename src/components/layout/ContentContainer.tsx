import React, { PropsWithChildren } from 'react';
import { View, StyleSheet } from 'react-native';

export default function ContentContainer({ children }: PropsWithChildren) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 12,
  },
});
