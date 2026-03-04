import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { AppNavigator } from './src/navigation/AppNavigator';
import { getAuthState } from './src/storage/authState';
import { ScreenNames } from './src/navigation/screens';

export const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [initialFlow, setInitialFlow] =
    useState<'OnboardingFlow' | 'AuthFlow' | 'MainFlow'>('OnboardingFlow');

  useEffect(() => {
    let mounted = true;

    async function loadOnboardingFlag() {
      try {
        const { hasSeenOnboarding, isSignedUp } = await getAuthState();
        if (!mounted) return;
        if (!hasSeenOnboarding) {
          setInitialFlow(ScreenNames.Root.OnboardingFlow);
        } else if (!isSignedUp) {
          setInitialFlow(ScreenNames.Root.AuthFlow);
        } else {
          setInitialFlow(ScreenNames.Root.MainFlow);
        }
      } finally {
        if (mounted) setIsLoading(false);
      }
    }

    loadOnboardingFlag();

    return () => {
      mounted = false;
    };
  }, []);

  if (isLoading) {
    return <View style={{ flex: 1 }} />;
  }

  return (
    <NavigationContainer>
      <AppNavigator initialFlow={initialFlow} />
    </NavigationContainer>
  );
};
