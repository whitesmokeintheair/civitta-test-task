import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScreenNames, type RootFlowName } from './screens';
import { RootStackParamList } from './types';
import { MyAccountScreen } from '../screens/MyAccountScreen/MyAccountScreen';
import { OnboardingScreen } from '../screens/OnboardingScreen/OnboardingScreen';
import { SignupScreen } from '../screens/SignupScreen/SignupScreen';

export type InitialFlow = RootFlowName;

type AppNavigatorProps = {
	initialFlow: InitialFlow;
};

type RootParamList = {
	[ScreenNames.Root.OnboardingFlow]: undefined;
	[ScreenNames.Root.AuthFlow]: undefined;
	[ScreenNames.Root.MainFlow]: undefined;
};

const Root = createNativeStackNavigator<RootParamList>();
const Onboarding =
	createNativeStackNavigator<
		Pick<RootStackParamList, typeof ScreenNames.Onboarding>
	>();
const Auth =
	createNativeStackNavigator<
		Pick<RootStackParamList, typeof ScreenNames.Signup>
	>();
const Main =
	createNativeStackNavigator<
		Pick<RootStackParamList, typeof ScreenNames.MyAccount>
	>();

const OnboardingStack = () => {
	return (
		<Onboarding.Navigator screenOptions={{ headerShown: false }}>
			<Onboarding.Screen
				name={ScreenNames.Onboarding}
				component={OnboardingScreen}
			/>
		</Onboarding.Navigator>
	);
};

const AuthStack = () => {
	return (
		<Auth.Navigator screenOptions={{ headerShown: false }}>
			<Auth.Screen
				name={ScreenNames.Signup}
				component={SignupScreen}
			/>
		</Auth.Navigator>
	);
};

const MainStack = () => {
	return (
		<Main.Navigator screenOptions={{ headerShown: false }}>
			<Main.Screen
				name={ScreenNames.MyAccount}
				component={MyAccountScreen}
			/>
		</Main.Navigator>
	);
};

export const AppNavigator = ({ initialFlow }: AppNavigatorProps) => {
	return (
		<Root.Navigator
			initialRouteName={initialFlow}
			screenOptions={{ headerShown: false }}
		>
			<Root.Screen
				name={ScreenNames.Root.OnboardingFlow}
				component={OnboardingStack}
			/>
			<Root.Screen
				name={ScreenNames.Root.AuthFlow}
				component={AuthStack}
			/>
			<Root.Screen
				name={ScreenNames.Root.MainFlow}
				component={MainStack}
			/>
		</Root.Navigator>
	);
};
