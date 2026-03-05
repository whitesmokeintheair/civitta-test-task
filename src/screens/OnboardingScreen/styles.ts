import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';

export const styles = StyleSheet.create({
	screen: {
		flex: 1,
		alignItems: 'center',
		paddingHorizontal: 20,
		paddingTop: 6,
		paddingBottom: 24,
		justifyContent: 'space-between',
	},
	card: {
		flex: 0,
		marginTop: 12,
		width: '100%',
		borderRadius: 36,
		paddingHorizontal: 20,
		paddingVertical: 36,
	},
	pager: {
		width: '100%',
	},
	title: {
		fontSize: 24,
		fontWeight: '700',
		color: colors.brandTitle,
		textAlign: 'center',
	},
	body: {
		marginTop: 16,
		fontSize: 14,
		lineHeight: 21,
		color: colors.textSecondary,
		textAlign: 'center',
		paddingHorizontal: 16,
	},
	dotsRow: {
		marginBottom: 18,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		gap: 6,
	},
	dot: {
		width: 6,
		height: 6,
		borderRadius: 4,
		backgroundColor: colors.dotInactive,
	},
	activeDot: {
		width: 6,
		height: 18,
		borderRadius: 5,
		backgroundColor: colors.brandPrimary,
	},
});
