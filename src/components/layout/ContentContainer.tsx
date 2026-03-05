import React, { PropsWithChildren, useMemo } from 'react';
import {
	Pressable,
	StyleProp,
	StyleSheet,
	Text,
	View,
	ViewStyle,
} from 'react-native';
import { useTheme } from '../../theme/ThemeContext';

type ContentContainerProps = PropsWithChildren<{
	hasHeader?: boolean;
	headerTitle?: string;
	style?: StyleProp<ViewStyle>;
}>;

export const ContentContainer = ({
	children,
	hasHeader = false,
	headerTitle,
	style,
}: ContentContainerProps) => {
	const { colors } = useTheme();
	const styles = useMemo(() => createStyles(colors), [colors]);

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
};

const createStyles = (colors: ReturnType<typeof useTheme>['colors']) =>
	StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.backgroundSecondary,
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
		color: colors.textPrimary,
	},
	headerAction: {
		minWidth: 44,
		minHeight: 30,
		borderRadius: 15,
		backgroundColor: colors.buttonTertiary,
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: 10,
	},
	headerActionLabel: {
		fontSize: 13,
		fontWeight: '600',
		color: colors.textTertiary,
	},
	});
