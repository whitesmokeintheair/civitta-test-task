import AsyncStorage from '@react-native-async-storage/async-storage';

const HAS_SEEN_ONBOARDING_KEY = 'has_seen_onboarding_v1';
const IS_SIGNED_UP_KEY = 'is_signed_up_v1';
const ACCOUNT_DATA_KEY = 'account_data_v1';

export type AuthState = {
  hasSeenOnboarding: boolean;
  isSignedUp: boolean;
  accountData?: unknown;
};

export async function getAuthState(): Promise<AuthState> {
  try {
    const [hasSeenValue, isSignedUpValue, accountDataValue] = await Promise.all([
      AsyncStorage.getItem(HAS_SEEN_ONBOARDING_KEY),
      AsyncStorage.getItem(IS_SIGNED_UP_KEY),
      AsyncStorage.getItem(ACCOUNT_DATA_KEY),
    ]);

    let accountData: unknown;
    if (accountDataValue) {
      try {
        accountData = JSON.parse(accountDataValue);
      } catch {
        accountData = accountDataValue;
      }
    }

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
  } catch {
    // Intentionally ignore storage errors to keep UI flow resilient.
  }
}

export async function setSignedUp(
  value = true,
  accountData?: unknown
): Promise<void> {
  try {
    const operations: Promise<void>[] = [
      AsyncStorage.setItem(IS_SIGNED_UP_KEY, String(value)),
    ];

    if (accountData === undefined) {
      operations.push(AsyncStorage.removeItem(ACCOUNT_DATA_KEY));
    } else {
      operations.push(
        AsyncStorage.setItem(ACCOUNT_DATA_KEY, JSON.stringify(accountData))
      );
    }

    await Promise.all(operations);
  } catch {
    // Intentionally ignore storage errors to keep UI flow resilient.
  }
}

export async function clearSignedUp(): Promise<void> {
  try {
    await Promise.all([
      AsyncStorage.removeItem(IS_SIGNED_UP_KEY),
      AsyncStorage.removeItem(ACCOUNT_DATA_KEY),
    ]);
  } catch {
    // Intentionally ignore storage errors to keep UI flow resilient.
  }
}
