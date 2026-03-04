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
				<Text style={styles.label}>{label}</Text>
				<View style={styles.inputRow}>
					<TextInput
						value={value}
						onChangeText={onChangeText}
						placeholder={placeholder}
						keyboardType={keyboardType}
						autoCapitalize={autoCapitalize}
						secureTextEntry={secureTextEntry}
						style={styles.input}
						placeholderTextColor='#A9AFBF'
					/>
					{right ? <View style={styles.rightSlot}>{right}</View> : null}
				</View>
			</View>
			{error ? <Text style={styles.errorText}>{error}</Text> : null}
		</View>
	);
}

const styles = StyleSheet.create({
	wrapper: {
		width: '100%',
	},
	inputBox: {
		backgroundColor: '#FFFFFF',
		borderRadius: 16,
		paddingHorizontal: 20,
		paddingVertical: 8,
	},
	inputRow: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 8,
	},
	label: {
		fontSize: 12,
		lineHeight: 16,
		fontWeight: '600',
		color: '#8F97AB',
		marginBottom: 6,
	},
	input: {
		flex: 1,
		minHeight: 32,
		fontSize: 16,
		lineHeight: 22,
		color: '#111827',
		paddingVertical: 0,
	},
	rightSlot: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	errorText: {
		fontSize: 12,
		lineHeight: 16,
		color: '#DC2626',
		marginTop: 6,
	},
});
