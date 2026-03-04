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

export type ScreenName = (typeof ScreenNames)[keyof typeof ScreenNames];
