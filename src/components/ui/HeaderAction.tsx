import React, { ReactNode } from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type HeaderActionProps = {
	type: 'text' | 'icon';
	label?: string;
	icon?: ReactNode;
	onPress: () => void;
	disabled?: boolean;
};

export const HeaderAction = ({
	type,
	label,
	icon,
	onPress,
	disabled = false,
}: HeaderActionProps) => {
	const isIcon = type === 'icon';
	const content =
		isIcon ? (
			(
				icon ?? <Ionicons name='chevron-back' size={20} color='#111827' />
			)
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
};

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
});
