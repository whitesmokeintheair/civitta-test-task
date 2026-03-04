import React, { useState } from 'react';
import { Pressable, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AppInput } from './AppInput';

type PasswordInputProps = {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  error?: string;
};

export const PasswordInput = ({
  label,
  value,
  onChangeText,
  placeholder,
  error,
}: PasswordInputProps) => {
  const [isHidden, setIsHidden] = useState(true);

	const toggle = (
		<Pressable
			onPress={() => setIsHidden((prev) => !prev)}
      style={{
        minWidth: 28,
        minHeight: 28,
        alignItems: 'center',
        justifyContent: 'center',
      }}
		>
			<Ionicons
				name={isHidden ? 'eye-outline' : 'eye-off-outline'}
				size={20}
				color='#2F2CE5'
			/>
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
};
