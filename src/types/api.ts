export type SignupRequest = {
	name: string;
	email: string;
	password: string;
};

export type SignupInstruction = {
	basicAuthCredentials: {
		username: string;
		password: string;
	};
	message?: string;
	nextStep?: string;
};

export type AccountTransactionApi = {
	amount: number;
	bank: string;
	name: string;
	time: string;
};

export type AccountApiResponse = {
	accountNumber: string;
	accountType: string;
	availableBalance: number;
	currency: string;
	dateAdded: string;
	transactions: AccountTransactionApi[];
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
