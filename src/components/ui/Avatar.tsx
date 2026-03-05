import React, { useMemo } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useTheme } from '../../theme/ThemeContext';

type AvatarProps = {
	size?: number;
	uri?: string;
	fallbackText?: string;
};

export const Avatar = ({
	size = 44,
	uri,
	fallbackText = 'A',
}: AvatarProps) => {
	const { colors } = useTheme();
	const styles = useMemo(() => createStyles(colors), [colors]);
	const radius = size / 2;

	return (
		<View
			style={[
				styles.circle,
				{ width: size, height: size, borderRadius: radius },
			]}
		>
			{uri ? (
				<Image
					source={{ uri }}
					style={{ width: size, height: size, borderRadius: radius }}
				/>
			) : (
				<Text style={styles.text}>
					{fallbackText.slice(0, 1).toUpperCase()}
				</Text>
			)}
		</View>
	);
};

const createStyles = (colors: ReturnType<typeof useTheme>['colors']) =>
	StyleSheet.create({
	circle: {
		overflow: 'hidden',
		backgroundColor: colors.backgroundPrimary,
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		color: colors.titlePrimary,
		fontWeight: '600',
	},
	});
