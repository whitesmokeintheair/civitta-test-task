import React, { createContext, useContext, useMemo } from 'react';
import { useColorScheme } from 'react-native';
import { createTheme } from './theme';
import type { Theme } from './types';

const ThemeContext = createContext<Theme | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
	const scheme = useColorScheme();

	const theme = useMemo(() => {
		return createTheme(scheme === 'dark' ? 'dark' : 'light');
	}, [scheme]);

	return (
		<ThemeContext.Provider value={theme}>
			{children}
		</ThemeContext.Provider>
	);
}

export function useTheme() {
	const ctx = useContext(ThemeContext);
	if (!ctx) throw new Error('useTheme must be used inside ThemeProvider');
	return ctx;
}
