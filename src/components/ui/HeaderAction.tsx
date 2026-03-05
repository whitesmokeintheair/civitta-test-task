import React, { ReactNode, useMemo } from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../theme/ThemeContext';

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
	const { colors } = useTheme();
	const styles = useMemo(() => createStyles(colors), [colors]);
	const isIcon = type === 'icon';
	const content = isIcon ? (
		(icon ?? (
			<Ionicons
				name='chevron-back'
				size={20}
				color={colors.textPrimary}
			/>
		))
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

const createStyles = (colors: ReturnType<typeof useTheme>['colors']) =>
	StyleSheet.create({
		buttonBase: {
			minHeight: 32,
			backgroundColor: colors.backgroundSecondary,
			alignItems: 'center',
			justifyContent: 'center',
		},
		textButton: {
			minWidth: 64,
			borderRadius: 22,
			paddingHorizontal: 14,
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
			color: colors.textPrimary,
			fontSize: 14,
		},
	});
