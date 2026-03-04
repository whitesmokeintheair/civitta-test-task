import React, { useMemo, useState } from 'react';
import {
	KeyboardAvoidingView,
	Linking,
	Platform,
	ScrollView,
	Text,
	View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PageContainer } from '../../components/layout/PageContainer';
import { HeaderBar } from '../../components/layout/HeaderBar';
import { HeaderAction } from '../../components/ui/HeaderAction';
import { AppInput } from '../../components/ui/AppInput';
import { PasswordInput } from '../../components/ui/PasswordInput';
import { Checkbox } from '../../components/ui/Checkbox';
import { AppButton } from '../../components/ui/AppButton';
import { ScreenNames } from '../../constants/screens';
import { DEMO_SIGNUP_RESPONSE, signup } from '../../services/signup';
import { setSignedUp } from '../../storage/authState';
import { setStoredAccountData } from '../../storage/accountData';
import type { SignupScreenProps } from '../../types/navigation';
import { styles } from './styles';

type FormErrors = {
	name?: string;
	email?: string;
	password?: string;
	terms?: string;
};

const LINK_URL = 'https://example.com';
const FOOTER_BLOCK_HEIGHT = 118;

export const SignupScreen = ({ navigation }: SignupScreenProps) => {
	const insets = useSafeAreaInsets();
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [acceptedTerms, setAcceptedTerms] = useState(false);
	const [errors, setErrors] = useState<FormErrors>({});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitError, setSubmitError] = useState<string | null>(null);

	const canSubmit = useMemo(() => {
		const ok =
			name.trim().length > 0 &&
			email.trim().length > 0 &&
			password.trim().length > 0 &&
			acceptedTerms;

		return ok && !isSubmitting;
	}, [acceptedTerms, email, isSubmitting, name, password]);

	const openExampleLink = () => {
		Linking.openURL(LINK_URL);
	};

	const validate = (): boolean => {
		const nextErrors: FormErrors = {};

		if (!name.trim()) nextErrors.name = 'Name is required';
		if (!email.trim()) {
			nextErrors.email = 'Email is required';
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
			nextErrors.email = 'Enter a valid email';
		}
		if (!password.trim()) {
			nextErrors.password = 'Password is required';
		} else if (password.trim().length < 6) {
			nextErrors.password = 'Password must be at least 6 characters';
		}
		if (!acceptedTerms) {
			nextErrors.terms = 'Please accept terms to continue';
		}

		setErrors(nextErrors);
		return Object.keys(nextErrors).length === 0;
	};

	const onSubmit = async () => {
		if (isSubmitting) return;

		setSubmitError(null);
		if (!validate()) return;

		setIsSubmitting(true);
		try {
			const response = await signup({
				name: name.trim(),
				email: email.trim(),
				password: password.trim(),
			});
			await setSignedUp(true, response);
			const rootNav = navigation.getParent();
			rootNav?.reset({
				index: 0,
				routes: [{ name: ScreenNames.Root.MainFlow }],
			});
		} catch (e: unknown) {
			if (e instanceof Error) {
				setSubmitError('Signup failed. Please try again.');
			}
		} finally {
			setIsSubmitting(false);
		}
	};

	const proceedWithDemoData = async () => {
		setSubmitError(null);
		await setStoredAccountData(DEMO_SIGNUP_RESPONSE);
		await setSignedUp(true);

		const rootNav = navigation.getParent();
		rootNav?.reset({
			index: 0,
			routes: [{ name: ScreenNames.Root.MainFlow }],
		});
	};

	return (
		<PageContainer
			header={
				<HeaderBar
					leftAction={
						<HeaderAction
							type='icon'
							onPress={() => navigation.goBack()}
						/>
					}
				/>
			}
		>
			<KeyboardAvoidingView
				style={styles.flex}
				behavior={Platform.OS === 'ios' ? 'padding' : undefined}
				keyboardVerticalOffset={Platform.OS === 'ios' ? insets.top + 56 : 0}
			>
				<View style={styles.flex}>
					<ScrollView
						style={styles.flex}
						contentContainerStyle={[
							styles.scrollContent,
							{
								paddingBottom: FOOTER_BLOCK_HEIGHT + insets.bottom,
							},
						]}
						keyboardShouldPersistTaps='handled'
						keyboardDismissMode={Platform.OS === 'ios' ? 'on-drag' : 'none'}
						showsVerticalScrollIndicator={false}
					>
						<View>
							<Text style={styles.title}>Create account</Text>
							<Text style={styles.subtitle}>
								Complete the sign up to get started
							</Text>

							<View style={styles.inputs}>
								<AppInput
									label='Name'
									value={name}
									onChangeText={(value) => {
										setName(value);
										if (submitError) setSubmitError(null);
										if (errors.name)
											setErrors((prev) => ({ ...prev, name: undefined }));
									}}
									autoCapitalize='words'
									placeholder='Your full name'
									error={errors.name}
								/>
								<AppInput
									label='Email'
									value={email}
									onChangeText={(value) => {
										setEmail(value);
										if (submitError) setSubmitError(null);
										if (errors.email)
											setErrors((prev) => ({ ...prev, email: undefined }));
									}}
									keyboardType='email-address'
									placeholder='you@email.com'
									error={errors.email}
								/>
								<PasswordInput
									label='Password'
									value={password}
									onChangeText={(value) => {
										setPassword(value);
										if (submitError) setSubmitError(null);
										if (errors.password) {
											setErrors((prev) => ({ ...prev, password: undefined }));
										}
									}}
									placeholder='Enter password'
									error={errors.password}
								/>
							</View>

							<View style={styles.termsRow}>
								<Checkbox
									checked={acceptedTerms}
									onChange={() => {
										setAcceptedTerms((prev) => !prev);
										if (errors.terms)
											setErrors((prev) => ({ ...prev, terms: undefined }));
									}}
								/>
								<Text style={styles.termsText}>
									By signing up, you agree to the{' '}
									<Text
										style={styles.link}
										onPress={openExampleLink}
									>
										Terms of Service
									</Text>{' '}
									and{' '}
									<Text
										style={styles.link}
										onPress={openExampleLink}
									>
										Privacy Policy
									</Text>
								</Text>
							</View>
							{errors.terms ? (
								<Text style={styles.termsError}>{errors.terms}</Text>
							) : null}
						</View>
					</ScrollView>

					<View style={styles.footer}>
						<Text style={styles.footerText}>
							Already have an account?{' '}
							<Text
								style={styles.link}
								onPress={openExampleLink}
							>
								Sign in
							</Text>
						</Text>

						{submitError ? (
							<View style={{ gap: 10 }}>
								<Text style={styles.submitError}>{submitError}</Text>

								{__DEV__ && (
									<AppButton
										title='Use demo data'
										onPress={proceedWithDemoData}
										disabled={isSubmitting}
									/>
								)}
							</View>
						) : (
							<AppButton
								title='Create account'
								onPress={onSubmit}
								loading={isSubmitting}
								disabled={!canSubmit}
							/>
						)}
					</View>
				</View>
			</KeyboardAvoidingView>
		</PageContainer>
	);
};
