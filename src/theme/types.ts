export type ThemeName = 'light' | 'dark';

export type ThemePalette = typeof import('./palette').themePalette.light;

export type Theme = {
	name: ThemeName;
	colors: ThemePalette;
};
