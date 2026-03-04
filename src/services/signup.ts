import { postJson } from './api';
import type { SignupRequest, SignupResponse } from '../types/api';

export const DEMO_SIGNUP_RESPONSE: SignupResponse = {
	profile: { name: 'John Ogaga', avatarInitial: 'J' },
	bank: { name: 'Kuda Bank', logoText: 'K' },
	account: {
		type: 'Savings',
		number: '1234567890',
		availableBalance: 'N12,000.00',
		dateAdded: '15/05/20, 10:03 AM',
	},
	transactions: [
		{
			initial: 'J',
			title: 'John Ogaga',
			subtitle: 'Zenith Bank 12:03 AM',
			amount: '+N20,983',
			positive: true,
		},
		{
			initial: 'T',
			title: 'The Place Restuarant',
			subtitle: 'GT-Bank 12:03 AM',
			amount: '-N983',
		},
		{
			initial: 'P',
			title: 'Transfer to Philip',
			subtitle: 'GT-Bank 12:03 AM',
			amount: '-N298',
		},
		{
			initial: 'H',
			title: 'Habib Yogurt',
			subtitle: 'GT-Bank 12:03 AM',
			amount: '-N4,115',
		},
	],
};

const SIGNUP_ENDPOINT = 'https://artjoms-spole.fly.dev/signup';

export async function signup(payload: SignupRequest): Promise<SignupResponse> {
	return await postJson<SignupRequest, SignupResponse>(
		SIGNUP_ENDPOINT,
		payload,
	);
}
