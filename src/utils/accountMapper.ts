import type {
	AccountApiResponse,
	AccountData,
	Transaction,
} from '../types/api';

function formatCurrency(amount: number, currency: string): string {
	const sign = amount >= 0 ? '+' : '-';
	const value = Math.abs(amount).toLocaleString();
	return `${sign}${currency}${value}`;
}

function mapTransactions(
	transactions: AccountApiResponse['transactions'],
	currency: string,
): Transaction[] {
	return transactions.map((t) => ({
		initial: t.name.charAt(0).toUpperCase(),
		title: t.name,
		subtitle: `${t.bank} ${t.time}`,
		amount: formatCurrency(t.amount, currency),
		positive: t.amount > 0,
	}));
}

export function mapAccountApiToAccountData(
	api: AccountApiResponse,
): AccountData {
	const firstTransactionName = api.transactions[0]?.name ?? 'User';

	return {
		profile: {
			name: firstTransactionName,
			avatarInitial: firstTransactionName.charAt(0).toUpperCase(),
		},

		bank: {
			name: api.transactions[0]?.bank ?? 'Bank',
			logoText: (api.transactions[0]?.bank ?? 'B')[0],
		},

		account: {
			type: api.accountType,
			number: api.accountNumber,
			availableBalance: `${api.currency}${api.availableBalance.toLocaleString()}`,
			dateAdded: api.dateAdded,
		},

		transactions: mapTransactions(api.transactions, api.currency),
	};
}
