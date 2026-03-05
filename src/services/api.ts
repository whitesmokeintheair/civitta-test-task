import axios, { AxiosError } from 'axios';
import { AccountData } from '../types/api';

const BASE_URL = 'https://artjoms-spole.fly.dev';

type ApiErrorBody = {
	message?: string;
	error?: string;
};

function getAxiosErrorMessage(err: unknown): string {
	if (axios.isAxiosError(err)) {
		const data = err.response?.data;

		if (typeof data === 'string' && data.trim()) return data;

		if (data && typeof data === 'object') {
			const body = data as ApiErrorBody;
			if (body.message?.trim()) return body.message;
			if (body.error?.trim()) return body.error;
		}

		if (err.response?.status)
			return `Request failed with status ${err.response.status}`;
		return err.message || 'Network error';
	}

	if (err instanceof Error) return err.message;
	return 'Unknown error';
}

export async function postJson<TReq, TRes>(
	url: string,
	payload: TReq,
): Promise<TRes> {
	try {
		const res = await axios.post<TRes>(url, payload, {
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
			timeout: 15000,
		});

		return res.data;
	} catch (err: unknown) {
		const message = getAxiosErrorMessage(err);
		const status = axios.isAxiosError(err) ? err.response?.status : undefined;
		throw new Error(
			`POST ${url} failed${status ? ` (${status})` : ''}: ${message}`,
		);
	}
}

function extractPath(nextStep: string): string {
	const match = nextStep.match(/\/[a-zA-Z0-9/_-]+/);
	return match ? match[0] : '/interview/account';
}

export async function getAccountData(opts: {
	nextStep: string;
	username: string;
	password: string;
}): Promise<AccountData> {
	const path = extractPath(opts.nextStep);
	const url = `${BASE_URL}${path}`;

	const res = await axios.get<AccountData>(url, {
		auth: { username: opts.username, password: opts.password },
		headers: { Accept: 'application/json' },
		timeout: 15000,
	});

	return res.data;
}
