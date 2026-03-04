import axios, { AxiosError } from 'axios';

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
