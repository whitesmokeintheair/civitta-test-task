import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import PageContainer from '../components/layout/PageContainer';
import HeaderBar from '../components/layout/HeaderBar';
import ContentContainer from '../components/layout/ContentContainer';
import HeaderAction from '../components/ui/HeaderAction';
import Avatar from '../components/ui/Avatar';
import { MyAccountScreenProps } from '../types/navigation';

type Transaction = {
	id: string;
	initial: string;
	title: string;
	subtitle: string;
	amount: string;
	positive?: boolean;
};

const transactions: Transaction[] = [
	{
		id: '1',
		initial: 'J',
		title: 'John Ogaga',
		subtitle: 'Zenith Bank 12:03 AM',
		amount: '+N20,983',
		positive: true,
	},
	{
		id: '2',
		initial: 'T',
		title: 'The Place Restuarant',
		subtitle: 'GT-Bank 12:03 AM',
		amount: '-N983',
	},
	{
		id: '3',
		initial: 'P',
		title: 'Transfer to Philip',
		subtitle: 'GT-Bank 12:03 AM',
		amount: '-N298',
	},
	{
		id: '4',
		initial: 'H',
		title: 'Habib Yogurt',
		subtitle: 'GT-Bank 12:03 AM',
		amount: '-N4,115',
	},
];

export default function MyAccountScreen({ navigation }: MyAccountScreenProps) {
	const insets = useSafeAreaInsets();

	return (
		<PageContainer
			header={
				<View style={styles.headerWrap}>
					<HeaderBar
						title='My Account'
						leftAction={
							<HeaderAction
								type='icon'
								onPress={() => navigation.goBack()}
							/>
						}
					/>
				</View>
			}
		>
			<ScrollView
				contentContainerStyle={[
					styles.content,
					{ paddingBottom: Math.max(28, insets.bottom + 14) },
				]}
				showsVerticalScrollIndicator={false}
			>
				<View style={styles.bankSection}>
					<View style={styles.logoSquare}>
						<Text style={styles.logoText}>K</Text>
					</View>
					<Text style={styles.bankName}>Kuda Bank</Text>
				</View>

				<ContentContainer style={styles.infoCard}>
					<View style={styles.infoRow}>
						<Text style={styles.infoLabel}>Type of account</Text>
						<Text style={styles.infoValue}>Savings</Text>
					</View>
					<View style={styles.infoRow}>
						<Text style={styles.infoLabel}>Account No</Text>
						<Text style={styles.infoValue}>1234567890</Text>
					</View>
					<View style={styles.infoRow}>
						<Text style={styles.infoLabel}>Avaliable Balance</Text>
						<Text style={styles.infoValuePositive}>N12,000.00</Text>
					</View>
					<View style={styles.infoRow}>
						<Text style={styles.infoLabel}>Date added</Text>
						<Text style={styles.infoValue}>15/05/20, 10:03 AM</Text>
					</View>
				</ContentContainer>

				<ContentContainer style={styles.transactionsCard}>
					<View style={styles.transactionsHeader}>
						<Text style={styles.transactionsTitle}>Recent Transactions</Text>
						<Pressable style={styles.chevronButton}>
							<Ionicons
								name='chevron-forward'
								size={14}
								color='#111827'
							/>
						</Pressable>
					</View>

					<View style={styles.transactionList}>
						{transactions.map((item) => (
							<View
								key={item.id}
								style={styles.transactionRow}
							>
								<Avatar
									size={40}
									fallbackText={item.initial}
								/>
								<View style={styles.transactionCenter}>
									<Text style={styles.transactionTitle}>{item.title}</Text>
									<Text style={styles.transactionSubtitle}>
										{item.subtitle}
									</Text>
								</View>
								<Text
									style={[
										styles.transactionAmount,
										item.positive && styles.transactionAmountPositive,
									]}
								>
									{item.amount}
								</Text>
							</View>
						))}
					</View>
				</ContentContainer>
			</ScrollView>
		</PageContainer>
	);
}

const styles = StyleSheet.create({
	headerWrap: {
		position: 'relative',
	},
	avatarChip: {
		position: 'absolute',
		left: 38,
		top: -4,
		backgroundColor: '#FFFFFF',
		borderRadius: 28,
		padding: 4,
		shadowColor: '#000000',
		shadowOpacity: 0.15,
		shadowRadius: 10,
		shadowOffset: { width: 0, height: 4 },
		elevation: 4,
	},
	content: {
		paddingHorizontal: 20,
		paddingTop: 14,
		gap: 14,
	},
	bankSection: {
		alignItems: 'center',
		marginTop: 8,
		marginBottom: 6,
	},
	logoSquare: {
		width: 54,
		height: 54,
		borderRadius: 12,
		backgroundColor: '#4D2B87',
		alignItems: 'center',
		justifyContent: 'center',
	},
	logoText: {
		color: '#FFFFFF',
		fontSize: 28,
		lineHeight: 30,
		fontWeight: '700',
	},
	bankName: {
		marginTop: 10,
		fontSize: 31,
		lineHeight: 36,
		fontWeight: '600',
		color: '#111827',
	},
	infoCard: {
		flex: 0,
		borderRadius: 18,
		paddingHorizontal: 18,
		paddingVertical: 16,
		gap: 12,
	},
	infoRow: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	infoLabel: {
		fontSize: 15,
		lineHeight: 23,
		color: '#6B7280',
	},
	infoValue: {
		fontSize: 16,
		lineHeight: 23,
		color: '#111827',
		fontWeight: '500',
	},
	infoValuePositive: {
		fontSize: 16,
		lineHeight: 23,
		color: '#059669',
		fontWeight: '600',
	},
	transactionsCard: {
		flex: 0,
		borderRadius: 18,
		paddingHorizontal: 18,
		paddingVertical: 16,
		gap: 10,
	},
	transactionsHeader: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	transactionsTitle: {
		fontSize: 15,
		lineHeight: 22,
		color: '#374151',
		fontWeight: '600',
	},
	chevronButton: {
		width: 24,
		height: 24,
		borderRadius: 12,
		backgroundColor: '#EFF1F8',
		alignItems: 'center',
		justifyContent: 'center',
	},
	transactionList: {
		gap: 12,
		marginTop: 4,
	},
	transactionRow: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 12,
	},
	transactionCenter: {
		flex: 1,
		gap: 1,
	},
	transactionTitle: {
		fontSize: 16,
		lineHeight: 22,
		color: '#111827',
		fontWeight: '600',
	},
	transactionSubtitle: {
		fontSize: 13,
		lineHeight: 18,
		color: '#8B93A7',
	},
	transactionAmount: {
		fontSize: 15,
		lineHeight: 22,
		color: '#111827',
		fontWeight: '500',
	},
	transactionAmountPositive: {
		color: '#16A34A',
		fontWeight: '600',
	},
});
