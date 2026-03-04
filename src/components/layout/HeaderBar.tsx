import React, { ReactNode } from 'react';
import { View, Text, StyleSheet } from 'react-native';

type HeaderBarProps = {
	title?: string;
	leftAction?: ReactNode;
	rightAction?: ReactNode;
};

export default function HeaderBar({
	title,
	leftAction,
	rightAction,
}: HeaderBarProps) {
	return (
		<View style={styles.container}>
			<View style={styles.sideSlot}>{leftAction}</View>
			<View style={styles.titleWrap}>
				{title ? <Text style={styles.title}>{title}</Text> : null}
			</View>
			<View style={[styles.sideSlot, styles.rightSlot]}>{rightAction}</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		minHeight: 52,
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 20,
		gap: 8,
	},
	sideSlot: {
		width: 40,
		minHeight: 40,
		alignItems: 'flex-start',
		justifyContent: 'center',
	},
	rightSlot: {
		alignItems: 'flex-end',
	},
	titleWrap: {
		flex: 1,
		alignItems: 'center',
	},
	title: {
		fontSize: 16,
		lineHeight: 20,
		color: '#131313',
	},
});
