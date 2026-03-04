import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

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

const styles = StyleSheet.create({
	circle: {
		overflow: 'hidden',
		backgroundColor: '#F5F7FF',
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		color: '#2C14DD',
		fontWeight: '600',
	},
});
