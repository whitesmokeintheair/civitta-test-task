import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/app/AppNavigator';
import { getHasSeenOnboarding } from './src/storage/onboarding';
import { RootStackParamList } from './src/types/navigation';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [initialRouteName, setInitialRouteName] =
    useState<keyof RootStackParamList>('Onboarding');

  useEffect(() => {
    let mounted = true;

    async function loadOnboardingFlag() {
      try {
        const hasSeenOnboarding = await getHasSeenOnboarding();
        if (!mounted) return;
        setInitialRouteName(hasSeenOnboarding ? 'Signup' : 'Onboarding');
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
      <AppNavigator initialRouteName={initialRouteName} />
    </NavigationContainer>
  );
}
