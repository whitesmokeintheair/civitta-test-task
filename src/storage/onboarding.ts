import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY = 'has_seen_onboarding';

export async function getHasSeenOnboarding(): Promise<boolean> {
	try {
		const value = await AsyncStorage.getItem(KEY);
		return value === 'true';
	} catch (e) {
		return false;
	}
}

export async function setHasSeenOnboarding(value = true): Promise<void> {
	try {
		await AsyncStorage.setItem(KEY, String(value));
	} catch (e) {}
}
