import React, { PropsWithChildren } from 'react';
import {
	Pressable,
	StyleProp,
	StyleSheet,
	Text,
	View,
	ViewStyle,
} from 'react-native';

type ContentContainerProps = PropsWithChildren<{
	hasHeader?: boolean;
	headerTitle?: string;
	style?: StyleProp<ViewStyle>;
}>;

export default function ContentContainer({
	children,
	hasHeader = false,
	headerTitle,
	style,
}: ContentContainerProps) {
	return (
		<View style={[styles.container, style]}>
			{hasHeader ? (
				<View style={styles.headerRow}>
					<Text style={styles.headerTitle}>{headerTitle}</Text>
					<Pressable style={styles.headerAction}>
						<Text style={styles.headerActionLabel}>Edit</Text>
					</Pressable>
				</View>
			) : null}
			{children}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FFFFFF',
		borderRadius: 48,
		paddingHorizontal: 24,
		paddingVertical: 18,
		gap: 12,
	},
	headerRow: {
		minHeight: 34,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginBottom: 8,
	},
	headerTitle: {
		fontSize: 24,
		lineHeight: 30,
		fontWeight: '700',
		color: '#111827',
	},
	headerAction: {
		minWidth: 44,
		minHeight: 30,
		borderRadius: 15,
		backgroundColor: '#F3F4F6',
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: 10,
	},
	headerActionLabel: {
		fontSize: 13,
		fontWeight: '600',
		color: '#374151',
	},
});
