import axios from 'axios';
import type { AccountApiResponse } from '../types/api';

const BASE_URL = 'https://artjoms-spole.fly.dev';

export async function fetchAccountData(opts: {
	path: string;
	username: string;
	password: string;
}): Promise<AccountApiResponse> {
	const res = await axios.get<AccountApiResponse>(`${BASE_URL}${opts.path}`, {
		auth: { username: opts.username, password: opts.password },
		headers: { Accept: 'application/json' },
		timeout: 15000,
	});

	return res.data;
}
