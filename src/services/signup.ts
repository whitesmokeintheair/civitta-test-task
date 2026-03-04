import axios from 'axios';
import { postJson } from './api';
import type { SignupRequest, SignupResponse } from '../types/api';

export const DEMO_SIGNUP_RESPONSE: SignupResponse = {
	user: { name: 'Demo User', email: 'demo@example.com' },
	account: { bank: 'Demo Bank', type: 'Savings', balance: '+$12,480.00' },
	transactions: [
		{ name: 'Alice', meta: 'Demo Bank • 10:12', amount: '+$280.00' },
		{ name: 'Groceries', meta: 'Demo Bank • Yesterday', amount: '-$43.20' },
	],
} as const;

const SIGNUP_ENDPOINT = 'https://artjoms-spole.fly.dev/signup';

export async function signup(payload: SignupRequest): Promise<SignupResponse> {
	return await postJson<SignupRequest, SignupResponse>(
		SIGNUP_ENDPOINT,
		payload,
	);
}
