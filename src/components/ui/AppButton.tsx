import React from 'react';
import { ActivityIndicator, Pressable, StyleSheet, Text } from 'react-native';

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
				<ActivityIndicator color='#FFFFFF' />
			) : (
				<Text style={styles.label}>{title}</Text>
			)}
		</Pressable>
	);
};

const styles = StyleSheet.create({
	button: {
		height: 56,
		borderRadius: 28,
		backgroundColor: '#2F2CE5',
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
		color: '#FFFFFF',
		fontSize: 16,
		lineHeight: 36,
		fontWeight: '600',
		textAlign: 'center',
	},
});
