import { StyleSheet } from 'react-native';

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
		color: '#3121D5',
		textAlign: 'center',
	},
	body: {
		marginTop: 16,
		fontSize: 14,
		lineHeight: 21,
		color: '#6B7280',
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
		backgroundColor: '#D1D5DB',
	},
	activeDot: {
		width: 6,
		height: 18,
		borderRadius: 5,
		backgroundColor: '#2F2CE5',
	},
});
