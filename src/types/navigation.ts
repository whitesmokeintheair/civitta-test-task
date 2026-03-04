import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScreenNames } from '../constants/screens';

export type OnboardingParams = undefined;
export type SignupParams = undefined;
export type MyAccountParams = { data?: unknown };

export type RootStackParamList = {
  [ScreenNames.Onboarding]: OnboardingParams;
  [ScreenNames.Signup]: SignupParams;
  [ScreenNames.MyAccount]: MyAccountParams;
};

export type OnboardingScreenProps = NativeStackScreenProps<
  RootStackParamList,
  typeof ScreenNames.Onboarding
>;

export type SignupScreenProps = NativeStackScreenProps<
  RootStackParamList,
  typeof ScreenNames.Signup
>;

export type MyAccountScreenProps = NativeStackScreenProps<
  RootStackParamList,
  typeof ScreenNames.MyAccount
>;
