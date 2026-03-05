import React, { ReactNode, useMemo } from 'react';
import {
	KeyboardTypeOptions,
	StyleSheet,
	Text,
	TextInput,
	TextInputProps,
	View,
} from 'react-native';
import { useTheme } from '../../theme/ThemeContext';

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

export const AppInput = ({
	label,
	value,
	onChangeText,
	placeholder,
	keyboardType,
	autoCapitalize = 'none',
	secureTextEntry,
	error,
	right,
}: AppInputProps) => {
	const { colors } = useTheme();
	const styles = useMemo(() => createStyles(colors), [colors]);

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
						placeholderTextColor={colors.textTertiary}
					/>
					{right ? <View style={styles.rightSlot}>{right}</View> : null}
				</View>
			</View>
			{error ? <Text style={styles.errorText}>{error}</Text> : null}
		</View>
	);
};

const createStyles = (colors: ReturnType<typeof useTheme>['colors']) =>
	StyleSheet.create({
	wrapper: {
		width: '100%',
	},
	inputBox: {
		backgroundColor: colors.backgroundSecondary,
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
		color: colors.textTertiary,
		marginBottom: 6,
	},
	input: {
		flex: 1,
		minHeight: 32,
		fontSize: 16,
		lineHeight: 22,
		color: colors.textPrimary,
		paddingVertical: 0,
	},
	rightSlot: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	errorText: {
		fontSize: 12,
		lineHeight: 16,
		color: colors.systemError,
		marginTop: 6,
	},
	});
