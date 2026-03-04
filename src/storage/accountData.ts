import AsyncStorage from '@react-native-async-storage/async-storage';
import type { AccountData } from '../types/api';

export const ACCOUNT_DATA_KEY = 'account_data_v1';

export async function getStoredAccountData(): Promise<AccountData | undefined> {
	try {
		const value = await AsyncStorage.getItem(ACCOUNT_DATA_KEY);
		if (!value) return undefined;
		return JSON.parse(value) as AccountData;
	} catch {
		return undefined;
	}
}

export async function setStoredAccountData(data: AccountData): Promise<void> {
	try {
		await AsyncStorage.setItem(ACCOUNT_DATA_KEY, JSON.stringify(data));
	} catch {}
}

export async function clearStoredAccountData(): Promise<void> {
	try {
		await AsyncStorage.removeItem(ACCOUNT_DATA_KEY);
	} catch {}
}
