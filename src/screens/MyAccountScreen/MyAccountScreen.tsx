import React from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { PageContainer } from '../../components/layout/PageContainer';
import { HeaderBar } from '../../components/layout/HeaderBar';
import { ContentContainer } from '../../components/layout/ContentContainer';
import { HeaderAction } from '../../components/ui/HeaderAction';
import { Avatar } from '../../components/ui/Avatar';
import type { Transaction } from '../../types/api';
import type { MyAccountScreenProps } from '../../navigation/types';
import { useAccountData } from '../../hooks/useAccountData';
import { colors } from '../../constants/colors';
import { styles } from './styles';

function isPositiveAmount(value: string): boolean {
	const numericValue = Number(value.replace(/[^\d.-]/g, ''));
	return !Number.isNaN(numericValue) && numericValue > 0;
}

export const MyAccountScreen = ({ navigation }: MyAccountScreenProps) => {
	const insets = useSafeAreaInsets();
	const accountData = useAccountData();

	if (!accountData) {
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
				<View style={{ padding: 20 }}>
					<Text>No account data found.</Text>
				</View>
			</PageContainer>
		);
	}

	const availableBalanceStyle = isPositiveAmount(
		accountData.account.availableBalance,
	)
		? [styles.infoValue, styles.infoValuePositive]
		: styles.infoValue;

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
						<Text style={styles.logoText}>
							{accountData.bank.logoText ?? ''}
						</Text>
					</View>
					<Text style={styles.bankName}>{accountData.bank.name}</Text>
				</View>

				<ContentContainer style={styles.infoCard}>
					<View style={styles.infoRow}>
						<Text style={styles.infoLabel}>Type of account</Text>
						<Text style={styles.infoValue}>{accountData.account.type}</Text>
					</View>
					<View style={styles.infoRow}>
						<Text style={styles.infoLabel}>Account No</Text>
						<Text style={styles.infoValue}>{accountData.account.number}</Text>
					</View>
					<View style={styles.infoRow}>
						<Text style={styles.infoLabel}>Avaliable Balance</Text>
						<Text style={availableBalanceStyle}>
							{accountData.account.availableBalance}
						</Text>
					</View>
					<View style={styles.infoRow}>
						<Text style={styles.infoLabel}>Date added</Text>
						<Text style={styles.infoValue}>
							{accountData.account.dateAdded}
						</Text>
					</View>
				</ContentContainer>

				<ContentContainer style={styles.transactionsCard}>
					<View style={styles.transactionsHeader}>
						<Text style={styles.transactionsTitle}>Recent Transactions</Text>
						<Pressable style={styles.chevronButton}>
							<Ionicons
								name='chevron-forward'
								size={14}
								color={colors.textPrimary}
							/>
						</Pressable>
					</View>

					<View style={styles.transactionList}>
						{accountData.transactions.map((item: Transaction, index) => {
							const transactionAmountStyle = isPositiveAmount(item.amount)
								? [styles.transactionAmount, styles.infoValuePositive]
								: styles.transactionAmount;

							return (
								<View
									key={`${item.title}-${index}`}
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
									<Text style={transactionAmountStyle}>{item.amount}</Text>
								</View>
							);
						})}
					</View>
				</ContentContainer>
			</ScrollView>
		</PageContainer>
	);
};
