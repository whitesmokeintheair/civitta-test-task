import React, { ReactNode } from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

type HeaderActionProps = {
	type: 'text' | 'icon';
	label?: string;
	icon?: ReactNode;
	onPress: () => void;
	disabled?: boolean;
};

export default function HeaderAction({
	type,
	label,
	icon,
	onPress,
	disabled = false,
}: HeaderActionProps) {
	const content =
		type === 'icon' ? (
			(icon ?? <Text style={styles.iconText}>{'<'}</Text>)
		) : (
			<Text style={styles.textLabel}>{label}</Text>
		);

	return (
		<Pressable
			onPress={onPress}
			style={[styles.button, disabled && styles.disabled]}
			hitSlop={8}
			disabled={disabled}
		>
			{content}
		</Pressable>
	);
}

const styles = StyleSheet.create({
	button: {
		minWidth: 64,
		minHeight: 44,
		borderRadius: 22,
		backgroundColor: '#FFFFFF',
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: 14,
		paddingVertical: 10,
	},
	disabled: {
		opacity: 0.5,
	},
	textLabel: {
		color: '#131313',
		fontSize: 14,
	},
	iconText: {
		color: '#111827',
		fontSize: 18,
		lineHeight: 22,
		fontWeight: '600',
	},
});
