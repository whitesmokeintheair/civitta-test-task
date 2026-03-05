import { themePalette } from './palette';
import type { Theme, ThemeName } from './types';

export function createTheme(name: ThemeName): Theme {
	return {
		name,
		colors: themePalette[name] as typeof themePalette.light,
	};
}
