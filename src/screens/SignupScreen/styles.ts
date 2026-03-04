import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
		color: '#3121D5',
	},
	subtitle: {
		marginTop: 10,
		fontSize: 17,
		lineHeight: 26,
		color: '#6B7280',
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
		color: '#1F2937',
	},
	link: {
		color: '#2F2CE5',
	},
	termsError: {
		marginTop: 8,
		fontSize: 12,
		lineHeight: 16,
		color: '#DC2626',
	},
	footer: {
		gap: 16,
		paddingHorizontal: 20,
		backgroundColor: '#F4F6FF',
	},
	footerText: {
		textAlign: 'center',
		fontSize: 16,
		lineHeight: 24,
		color: '#111827',
	},
	submitError: {
		textAlign: 'center',
		fontSize: 13,
		lineHeight: 18,
		color: '#DC2626',
	},
});
