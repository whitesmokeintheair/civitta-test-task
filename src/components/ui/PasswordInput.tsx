import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import AppInput from './AppInput';

type PasswordInputProps = {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  error?: string;
};

export default function PasswordInput({
  label,
  value,
  onChangeText,
  placeholder,
  error,
}: PasswordInputProps) {
  const [isHidden, setIsHidden] = useState(true);

  const toggle = (
    <Pressable
      onPress={() => setIsHidden((prev) => !prev)}
      style={{ minWidth: 30, minHeight: 30, alignItems: 'center', justifyContent: 'center' }}
    >
      <Text style={{ fontSize: 18 }}>{isHidden ? '👁' : '🙈'}</Text>
    </Pressable>
  );

  return (
    <View>
      <AppInput
        label={label}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={isHidden}
        error={error}
        right={toggle}
      />
    </View>
  );
}
