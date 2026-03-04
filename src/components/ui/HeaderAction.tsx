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
	const isIcon = type === 'icon';
	const content =
		isIcon ? (
			(icon ?? <Text style={styles.iconText}>{'<'}</Text>)
		) : (
			<Text style={styles.textLabel}>{label}</Text>
		);

	return (
		<Pressable
			onPress={onPress}
			style={[
				styles.buttonBase,
				isIcon ? styles.iconButton : styles.textButton,
				disabled && styles.disabled,
			]}
			hitSlop={8}
			disabled={disabled}
		>
			{content}
		</Pressable>
	);
}

const styles = StyleSheet.create({
	buttonBase: {
		minHeight: 44,
		backgroundColor: '#FFFFFF',
		alignItems: 'center',
		justifyContent: 'center',
	},
	textButton: {
		borderRadius: 22,
		paddingHorizontal: 14,
		paddingVertical: 10,
		alignSelf: 'flex-start',
	},
	iconButton: {
		width: 44,
		height: 44,
		borderRadius: 22,
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
