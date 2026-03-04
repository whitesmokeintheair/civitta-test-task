import React, { useMemo, useState } from 'react';
import {
	KeyboardAvoidingView,
	Linking,
	Platform,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import PageContainer from '../components/layout/PageContainer';
import HeaderBar from '../components/layout/HeaderBar';
import HeaderAction from '../components/ui/HeaderAction';
import AppInput from '../components/ui/AppInput';
import PasswordInput from '../components/ui/PasswordInput';
import Checkbox from '../components/ui/Checkbox';
import AppButton from '../components/ui/AppButton';
import { signup } from '../services/signup';
import { RootStackParamList } from '../types/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Signup'>;

type FormErrors = {
	name?: string;
	email?: string;
	password?: string;
	terms?: string;
};

const LINK_URL = 'https://example.com';

export default function SignupScreen({ navigation }: Props) {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [acceptedTerms, setAcceptedTerms] = useState(false);
	const [errors, setErrors] = useState<FormErrors>({});
	const [isSubmitting, setIsSubmitting] = useState(false);

	const canSubmit = useMemo(
		() =>
			!isSubmitting &&
			name.trim() &&
			email.trim() &&
			password.trim() &&
			acceptedTerms,
		[acceptedTerms, email, isSubmitting, name, password],
	);

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
		if (!validate()) return;

		setIsSubmitting(true);
		try {
			const response = await signup({
				name: name.trim(),
				email: email.trim(),
				password: password.trim(),
			});
			navigation.navigate('MyAccount', { data: response });
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<PageContainer>
			<KeyboardAvoidingView
				style={styles.flex}
				behavior={Platform.OS === 'ios' ? 'padding' : undefined}
			>
				<ScrollView
					style={styles.flex}
					contentContainerStyle={styles.scrollContent}
					keyboardShouldPersistTaps='handled'
					showsVerticalScrollIndicator={false}
				>
					<View>
						<Text
							style={{
								fontSize: 48,
								lineHeight: 54,
								fontWeight: '700',
								color: '#3121D5',
							}}
						>
							Create account
						</Text>
						<Text
							style={{
								marginTop: 10,
								fontSize: 17,
								lineHeight: 26,
								color: '#6B7280',
							}}
						>
							Complete the sign up to get started
						</Text>

						<View style={styles.inputs}>
							<AppInput
								label='Name'
								value={name}
								onChangeText={(value) => {
									setName(value);
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
									if (errors.password)
										setErrors((prev) => ({ ...prev, password: undefined }));
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
							<Text
								style={{
									flex: 1,
									fontSize: 14,
									lineHeight: 22,
									color: '#1F2937',
								}}
							>
								By signing up, you agree to the{' '}
								<Text
									style={{ color: '#2F2CE5' }}
									onPress={openExampleLink}
								>
									Terms of Service
								</Text>{' '}
								and{' '}
								<Text
									style={{ color: '#2F2CE5' }}
									onPress={openExampleLink}
								>
									Privacy Policy
								</Text>
							</Text>
						</View>
						{errors.terms ? (
							<Text
								style={{
									marginTop: 8,
									fontSize: 12,
									lineHeight: 16,
									color: '#DC2626',
								}}
							>
								{errors.terms}
							</Text>
						) : null}
					</View>

					<View style={styles.footer}>
						<Text
							style={{
								textAlign: 'center',
								fontSize: 16,
								lineHeight: 24,
								color: '#111827',
							}}
						>
							Already have an account?{' '}
							<Text
								style={{ color: '#2F2CE5' }}
								onPress={openExampleLink}
							>
								Sign in
							</Text>
						</Text>

						<View style={styles.buttonWrap}>
							<AppButton
								title='Create account'
								onPress={onSubmit}
								loading={isSubmitting}
								disabled={!canSubmit}
							/>
						</View>
					</View>
				</ScrollView>
			</KeyboardAvoidingView>
		</PageContainer>
	);
}

const styles = StyleSheet.create({
	flex: {
		flex: 1,
	},
	scrollContent: {
		flexGrow: 1,
		justifyContent: 'space-between',
		paddingHorizontal: 20,
		paddingTop: 18,
		paddingBottom: 24,
	},
	inputs: {
		marginTop: 28,
		gap: 14,
	},
	termsRow: {
		marginTop: 20,
		flexDirection: 'row',
		alignItems: 'flex-start',
		gap: 10,
	},
	footer: {
		marginTop: 26,
		gap: 18,
	},
	buttonWrap: {
		marginBottom: 6,
	},
});
