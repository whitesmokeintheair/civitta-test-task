import AsyncStorage from '@react-native-async-storage/async-storage';
import type { AccountData } from '../types/api';
import {
	clearStoredAccountData,
	getStoredAccountData,
	setStoredAccountData,
} from './accountData';

const HAS_SEEN_ONBOARDING_KEY = 'has_seen_onboarding_v1';
const IS_SIGNED_UP_KEY = 'is_signed_up_v1';

export type AuthState = {
	hasSeenOnboarding: boolean;
	isSignedUp: boolean;
	accountData?: AccountData;
};

export async function getAuthState(): Promise<AuthState> {
	try {
		const [hasSeenValue, isSignedUpValue, accountData] = await Promise.all(
			[
				AsyncStorage.getItem(HAS_SEEN_ONBOARDING_KEY),
				AsyncStorage.getItem(IS_SIGNED_UP_KEY),
				getStoredAccountData(),
			],
		);

		return {
			hasSeenOnboarding: hasSeenValue === 'true',
			isSignedUp: isSignedUpValue === 'true',
			accountData,
		};
	} catch {
		return {
			hasSeenOnboarding: false,
			isSignedUp: false,
		};
	}
}

export async function setHasSeenOnboarding(value = true): Promise<void> {
	try {
		await AsyncStorage.setItem(HAS_SEEN_ONBOARDING_KEY, String(value));
	} catch {}
}

export async function setSignedUp(
	value = true,
	accountData?: AccountData,
): Promise<void> {
	try {
		await AsyncStorage.setItem(IS_SIGNED_UP_KEY, String(value));
		if (accountData !== undefined) {
			await setStoredAccountData(accountData);
		} else if (!value) {
			await clearStoredAccountData();
		}
	} catch {}
}

export async function clearSignedUp(): Promise<void> {
	try {
		await Promise.all([AsyncStorage.removeItem(IS_SIGNED_UP_KEY), clearStoredAccountData()]);
	} catch {}
}
