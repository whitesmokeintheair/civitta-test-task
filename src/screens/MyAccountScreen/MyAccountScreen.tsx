import React, { useEffect, useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { PageContainer } from '../../components/layout/PageContainer';
import { HeaderBar } from '../../components/layout/HeaderBar';
import { ContentContainer } from '../../components/layout/ContentContainer';
import { HeaderAction } from '../../components/ui/HeaderAction';
import { Avatar } from '../../components/ui/Avatar';
import type { AccountData, Transaction } from '../../types/api';
import type { MyAccountScreenProps } from '../../types/navigation';
import { DEMO_SIGNUP_RESPONSE } from '../../services/signup';
import { getStoredAccountData } from '../../storage/accountData';
import { styles } from './styles';

const DEFAULT_ACCOUNT_DATA: AccountData = DEMO_SIGNUP_RESPONSE;

export const MyAccountScreen = ({ navigation }: MyAccountScreenProps) => {
	const insets = useSafeAreaInsets();
	const [accountData, setAccountData] = useState<AccountData>(DEFAULT_ACCOUNT_DATA);

	useEffect(() => {
		let mounted = true;
		async function loadAccountData() {
			const stored = await getStoredAccountData();
			if (!mounted) return;
			if (stored) setAccountData(stored);
		}
		loadAccountData();
		return () => {
			mounted = false;
		};
	}, []);

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
						<Text style={styles.logoText}>{accountData.bank.logoText}</Text>
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
						<Text style={[styles.infoValue, styles.infoValuePositive]}>
							{accountData.account.availableBalance}
						</Text>
					</View>
					<View style={styles.infoRow}>
						<Text style={styles.infoLabel}>Date added</Text>
						<Text style={styles.infoValue}>{accountData.account.dateAdded}</Text>
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
						{accountData.transactions.map((item: Transaction, index) => (
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
								<Text
									style={[
										styles.transactionAmount,
										item.positive && styles.infoValuePositive,
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
};
