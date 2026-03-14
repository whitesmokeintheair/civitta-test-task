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
	const { name, colors } = useTheme();

	const navigationTheme =
		name === 'dark'
			? {
					...DarkTheme,
					colors: {
						...DarkTheme.colors,
						background: colors.backgroundPrimary,
						card: colors.backgroundSecondary,
						text: colors.textPrimary,
						border: colors.systemSecondary,
						primary: colors.systemPrimary,
						notification: colors.systemPrimary,
					},
				}
			: {
					...DefaultTheme,
					colors: {
						...DefaultTheme.colors,
						background: colors.backgroundPrimary,
						card: colors.backgroundSecondary,
						text: colors.textPrimary,
						border: colors.systemSecondary,
						primary: colors.systemPrimary,
						notification: colors.systemPrimary,
					},
				};

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

	console.log('theme name', name, colors.backgroundPrimary);

	if (isLoading) {
		return (
			<View
				style={{
					flex: 1,
					backgroundColor: colors.backgroundPrimary,
				}}
			/>
		);
	}

	return (
		<>
			<NavigationContainer theme={navigationTheme}>
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
