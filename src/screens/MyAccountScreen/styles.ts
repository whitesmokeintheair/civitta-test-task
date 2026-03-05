import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';

export const styles = StyleSheet.create({
	headerWrap: {
		position: 'relative',
	},
	content: {
		paddingHorizontal: 20,
		paddingTop: 28,
	},
	bankSection: {
		alignItems: 'center',
		marginTop: 8,
		marginBottom: 40,
	},
	logoSquare: {
		width: 54,
		height: 54,
		borderRadius: 12,
		backgroundColor: colors.bankLogoBackground,
		alignItems: 'center',
		justifyContent: 'center',
	},
	logoText: {
		color: colors.white,
		fontSize: 28,
		lineHeight: 30,
		fontWeight: '700',
	},
	bankName: {
		marginTop: 10,
		fontSize: 14,
		fontWeight: '600',
		color: colors.textPrimary,
	},
	infoCard: {
		flex: 0,
		borderRadius: 18,
		paddingHorizontal: 18,
		paddingVertical: 24,
		gap: 16,
	},
	infoRow: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	infoLabel: {
		fontSize: 14,
		lineHeight: 22,
		color: colors.textSecondary,
	},
	infoValue: {
		fontSize: 14,
		lineHeight: 22,
		color: colors.textStrong,
		fontWeight: '500',
	},
	infoValuePositive: {
		color: colors.success,
	},
	transactionsCard: {
		borderRadius: 18,
		paddingHorizontal: 16,
		paddingVertical: 24,
		gap: 16,
		marginTop: 24,
	},
	transactionsHeader: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	transactionsTitle: {
		fontSize: 14,
		lineHeight: 22,
		color: colors.textStrong,
		fontWeight: '600',
	},
	chevronButton: {
		width: 24,
		height: 24,
		borderRadius: 12,
		backgroundColor: colors.surfacePressed,
		alignItems: 'center',
		justifyContent: 'center',
	},
	transactionList: {
		gap: 24,
		marginTop: 4,
	},
	transactionRow: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 12,
	},
	transactionCenter: {
		flex: 1,
		gap: 4,
	},
	transactionTitle: {
		fontSize: 14,
		color: colors.textStrong,
		fontWeight: '600',
	},
	transactionSubtitle: {
		fontSize: 12,
		color: colors.textSubtle,
		fontWeight: 400,
	},
	transactionAmount: {
		fontSize: 15,
		lineHeight: 22,
		color: colors.textPrimary,
		fontWeight: '500',
	},
});
