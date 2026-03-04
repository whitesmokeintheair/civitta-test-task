export type SignupRequest = {
	name: string;
	email: string;
	password: string;
};

export type SignupTransaction = {
	name: string;
	meta: string;
	amount: string;
};

export type SignupAccount = {
	bank: string;
	type: string;
	balance: string;
};

export type SignupUser = {
	name: string;
	email: string;
};

export type SignupResponse = {
	user: SignupUser;
	account: SignupAccount;
	transactions: SignupTransaction[];
};
