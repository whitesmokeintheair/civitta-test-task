import React, { ReactNode } from 'react';
import {
  KeyboardTypeOptions,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from 'react-native';

type AppInputProps = {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions;
  autoCapitalize?: TextInputProps['autoCapitalize'];
  secureTextEntry?: boolean;
  error?: string;
  right?: ReactNode;
};

export default function AppInput({
  label,
  value,
  onChangeText,
  placeholder,
  keyboardType,
  autoCapitalize = 'none',
  secureTextEntry,
  error,
  right,
}: AppInputProps) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.inputBox}>
        <Text style={{ fontSize: 13, lineHeight: 16, fontWeight: '600', color: '#9AA0AF', marginBottom: 8 }}>
          {label}
        </Text>
        <View style={styles.inputRow}>
          <TextInput
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            keyboardType={keyboardType}
            autoCapitalize={autoCapitalize}
            secureTextEntry={secureTextEntry}
            style={styles.input}
            placeholderTextColor="#A9AFBF"
          />
          {right ? <View style={styles.rightSlot}>{right}</View> : null}
        </View>
      </View>
      {error ? (
        <Text style={{ fontSize: 12, lineHeight: 16, color: '#DC2626', marginTop: 6 }}>
          {error}
        </Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
  },
  inputBox: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  input: {
    flex: 1,
    fontSize: 27,
    lineHeight: 32,
    color: '#111827',
    paddingVertical: 0,
  },
  rightSlot: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
