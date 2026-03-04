import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from '../screens/OnboardingScreen';
import SignupScreen from '../screens/SignupScreen';
import MyAccountScreen from '../screens/MyAccountScreen';
import { ScreenNames } from '../constants/screens';
import { RootStackParamList } from '../types/navigation';

type InitialFlow = 'OnboardingFlow' | 'AuthFlow' | 'MainFlow';

type AppNavigatorProps = {
  initialFlow: InitialFlow;
};

type RootParamList = {
  [ScreenNames.Root.OnboardingFlow]: undefined;
  [ScreenNames.Root.AuthFlow]: undefined;
  [ScreenNames.Root.MainFlow]: undefined;
};

const Root = createNativeStackNavigator<RootParamList>();
const Onboarding = createNativeStackNavigator<
  Pick<RootStackParamList, typeof ScreenNames.Onboarding>
>();
const Auth = createNativeStackNavigator<
  Pick<RootStackParamList, typeof ScreenNames.Signup>
>();
const Main = createNativeStackNavigator<
  Pick<RootStackParamList, typeof ScreenNames.MyAccount>
>();

function OnboardingStack() {
  return (
    <Onboarding.Navigator screenOptions={{ headerShown: false }}>
      <Onboarding.Screen name={ScreenNames.Onboarding} component={OnboardingScreen} />
    </Onboarding.Navigator>
  );
}

function AuthStack() {
  return (
    <Auth.Navigator screenOptions={{ headerShown: false }}>
      <Auth.Screen name={ScreenNames.Signup} component={SignupScreen} />
    </Auth.Navigator>
  );
}

function MainStack() {
  return (
    <Main.Navigator screenOptions={{ headerShown: false }}>
      <Main.Screen name={ScreenNames.MyAccount} component={MyAccountScreen} />
    </Main.Navigator>
  );
}

export default function AppNavigator({ initialFlow }: AppNavigatorProps) {
  return (
    <Root.Navigator initialRouteName={initialFlow} screenOptions={{ headerShown: false }}>
      <Root.Screen
        name={ScreenNames.Root.OnboardingFlow}
        component={OnboardingStack}
      />
      <Root.Screen name={ScreenNames.Root.AuthFlow} component={AuthStack} />
      <Root.Screen name={ScreenNames.Root.MainFlow} component={MainStack} />
    </Root.Navigator>
  );
}
