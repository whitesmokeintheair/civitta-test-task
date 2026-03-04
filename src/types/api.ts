export type SignupRequest = {
	name: string;
	email: string;
	password: string;
};

export type Transaction = {
	initial: string;
	title: string;
	subtitle: string;
	amount: string;
	positive?: boolean;
};

export type AccountProfile = {
	name: string;
	avatarInitial: string;
};

export type BankInfo = {
	name: string;
	logoText: string;
};

export type AccountInfo = {
	type: string;
	number: string;
	availableBalance: string;
	dateAdded: string;
};

export type AccountData = {
	profile: AccountProfile;
	bank: BankInfo;
	account: AccountInfo;
	transactions: Transaction[];
};

export type SignupResponse = AccountData;
