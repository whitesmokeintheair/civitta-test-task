import type {
	AccountApiResponse,
	AccountData,
	SignupInstruction,
	SignupRequest,
} from '../types/api';
import { signup } from '../services/signup';
import { fetchAccountData } from '../services/account';
import { mapAccountApiToAccountData } from '../utils/accountMapper';

function isSignupInstruction(x: unknown): x is SignupInstruction {
	if (!x || typeof x !== 'object') return false;
	const o = x as any;
	const c = o.basicAuthCredentials;

	return (
		c &&
		typeof c.username === 'string' &&
		typeof c.password === 'string' &&
		(typeof o.nextStep === 'string' || typeof o.nextStep === 'undefined')
	);
}

function extractPath(nextStep?: string): string {
	if (!nextStep) return '/interview/account';
	const match = nextStep.match(/\/[a-zA-Z0-9/_-]+/);
	return match ? match[0] : '/interview/account';
}

export async function runSignupFlow(
	payload: SignupRequest,
): Promise<AccountData> {
	const instructionRaw = await signup(payload);

	if (!isSignupInstruction(instructionRaw)) {
		throw new Error(
			'Unexpected signup response format (missing credentials/nextStep).',
		);
	}

	const { username, password } = instructionRaw.basicAuthCredentials;
	const path = extractPath(instructionRaw.nextStep);
	const apiAccount = await fetchAccountData({
		path,
		username,
		password,
	});

	return mapAccountApiToAccountData(apiAccount);
}
