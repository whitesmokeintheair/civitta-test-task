export const ScreenNames = {
	Root: {
		OnboardingFlow: 'OnboardingFlow',
		AuthFlow: 'AuthFlow',
		MainFlow: 'MainFlow',
	},
	Onboarding: 'Onboarding',
	Signup: 'Signup',
	MyAccount: 'MyAccount',
} as const;

export type RootFlowName =
	(typeof ScreenNames.Root)[keyof typeof ScreenNames.Root];

export type ScreenName = typeof ScreenNames;
