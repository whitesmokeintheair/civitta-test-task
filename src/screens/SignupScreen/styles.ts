import { StyleSheet } from 'react-native';
import type { ThemePalette } from '../../theme/types';

export const createStyles = (colors: ThemePalette) => StyleSheet.create({
	flex: {
		flex: 1,
	},
	scrollContent: {
		flexGrow: 1,
		paddingHorizontal: 20,
		paddingTop: 36,
	},
	title: {
		fontSize: 44,
		lineHeight: 50,
		fontWeight: '700',
		color: colors.titlePrimary,
	},
	subtitle: {
		marginTop: 10,
		fontSize: 17,
		lineHeight: 26,
		color: colors.textSecondary,
	},
	inputs: {
		marginTop: 32,
		gap: 16,
	},
	termsRow: {
		marginTop: 18,
		flexDirection: 'row',
		alignItems: 'flex-start',
		gap: 12,
	},
	termsText: {
		flex: 1,
		fontSize: 14,
		lineHeight: 22,
		color: colors.textPrimary,
	},
	link: {
		color: colors.titlePrimary,
	},
	termsError: {
		marginTop: 8,
		fontSize: 12,
		lineHeight: 16,
		color: colors.systemError,
	},
	footer: {
		gap: 16,
		paddingHorizontal: 20,
		backgroundColor: colors.backgroundPrimary,
	},
	footerText: {
		textAlign: 'center',
		fontSize: 16,
		lineHeight: 24,
		color: colors.textPrimary,
	},
	submitError: {
		textAlign: 'center',
		fontSize: 13,
		lineHeight: 18,
		color: colors.systemError,
	},
});
