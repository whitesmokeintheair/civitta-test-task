import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import {
	DarkTheme,
	DefaultTheme,
	NavigationContainer,
} from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import { AppNavigator, InitialFlow } from './src/navigation/AppNavigator';
import { getAuthState } from './src/storage/authState';
import { ScreenNames } from './src/navigation/screens';
import { ThemeProvider, useTheme } from './src/theme/ThemeContext';

const AppContent = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [initialFlow, setInitialFlow] = useState<InitialFlow>(
		ScreenNames.Root.OnboardingFlow,
	);
	const { name } = useTheme();

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
		<>
			<NavigationContainer theme={name === 'dark' ? DarkTheme : DefaultTheme}>
				<AppNavigator initialFlow={initialFlow} />
			</NavigationContainer>
			<Toast />
		</>
	);
};

export const App = () => {
	return (
		<ThemeProvider>
			<AppContent />
		</ThemeProvider>
	);
};
