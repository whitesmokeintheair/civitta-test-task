import React, { useMemo } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { useTheme } from '../../theme/ThemeContext';

type CheckboxProps = {
  checked: boolean;
  onChange: () => void;
};

export const Checkbox = ({ checked, onChange }: CheckboxProps) => {
  const { colors } = useTheme();
  const styles = useMemo(() => createStyles(colors), [colors]);

  return (
    <Pressable onPress={onChange} style={styles.button} hitSlop={8}>
      <View style={styles.box}>{checked ? <View style={styles.inner} /> : null}</View>
    </Pressable>
  );
};

const createStyles = (colors: ReturnType<typeof useTheme>['colors']) =>
  StyleSheet.create({
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
    borderColor: colors.borderSubtle,
    borderRadius: 4,
    backgroundColor: colors.backgroundSecondary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inner: {
    width: 12,
    height: 12,
    borderRadius: 2,
    backgroundColor: colors.buttonPrimary,
  },
});
