import React, { useMemo } from 'react';
import { ActivityIndicator, Pressable, StyleSheet, Text } from 'react-native';
import { useTheme } from '../../theme/ThemeContext';

type AppButtonProps = {
	title: string;
	onPress: () => void;
	disabled?: boolean;
	loading?: boolean;
};

export const AppButton = ({
	title,
	onPress,
	disabled = false,
	loading = false,
}: AppButtonProps) => {
	const { colors } = useTheme();
	const styles = useMemo(() => createStyles(colors), [colors]);
	const isDisabled = disabled || loading;

	return (
		<Pressable
			style={({ pressed }) => [
				styles.button,
				isDisabled && styles.disabled,
				pressed && !isDisabled && styles.pressed,
			]}
			onPress={onPress}
			disabled={isDisabled}
		>
			{loading ? (
				<ActivityIndicator color={colors.buttonPrimaryContent} />
			) : (
				<Text style={styles.label}>{title}</Text>
			)}
		</Pressable>
	);
};

const createStyles = (colors: ReturnType<typeof useTheme>['colors']) =>
	StyleSheet.create({
	button: {
		height: 56,
		borderRadius: 28,
		backgroundColor: colors.buttonPrimary,
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: 20,
	},
	pressed: {
		opacity: 0.9,
	},
	disabled: {
		opacity: 0.5,
	},
	label: {
		color: colors.buttonPrimaryContent,
		fontSize: 16,
		lineHeight: 36,
		fontWeight: '600',
		textAlign: 'center',
	},
	});
