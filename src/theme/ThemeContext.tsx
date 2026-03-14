import React, { createContext, useContext, useMemo } from 'react';
import { ColorSchemeName, useColorScheme } from 'react-native';
import { createTheme } from './theme';
import { Theme } from './types';

const ThemeContext = createContext<Theme | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
	const scheme = useColorScheme();
	const mode: ColorSchemeName = scheme === 'dark' ? 'dark' : 'light';

	const theme = useMemo(() => createTheme(mode), [mode]);

	return (
		<ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
	);
}

export function useTheme() {
	const value = useContext(ThemeContext);
	if (!value) {
		throw new Error('useAppTheme must be used inside ThemeProvider');
	}
	return value;
}
