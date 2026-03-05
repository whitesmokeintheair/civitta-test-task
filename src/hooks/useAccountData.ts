import { useEffect, useState } from 'react';
import type { AccountData } from '../types/api';
import { getStoredAccountData } from '../storage/accountData';

export function useAccountData() {
	const [data, setData] = useState<AccountData | null>(null);

	useEffect(() => {
		getStoredAccountData().then((stored) => {
			setData(stored ?? null);
		});
	}, []);

	return data;
}
