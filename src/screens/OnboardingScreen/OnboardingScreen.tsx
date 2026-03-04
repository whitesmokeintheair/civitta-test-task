import React, { useRef, useState } from 'react';
import { Image, Text, View, useWindowDimensions } from 'react-native';
import PagerView from 'react-native-pager-view';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PageContainer } from '../../components/layout/PageContainer';
import { HeaderBar } from '../../components/layout/HeaderBar';
import { ContentContainer } from '../../components/layout/ContentContainer';
import { HeaderAction } from '../../components/ui/HeaderAction';
import { AppButton } from '../../components/ui/AppButton';
import { ScreenNames } from '../../navigation/screens';
import { setHasSeenOnboarding } from '../../storage/authState';
import type { OnboardingScreenProps } from '../../navigation/types';
import { styles } from './styles';

const PAGES = [
	{
		title: 'You ought to know where your money goes',
		body: 'Get an overview of how you are performing and motivate yourself to achieve even more.',
	},
	{
		title: 'Track every account in one place',
		body: 'Connect your accounts and keep your spending, income, and savings in a single view.',
	},
	{
		title: 'Take control with better money habits',
		body: 'Set a plan, monitor progress, and stay consistent with goals that matter to you.',
	},
	{
		title: 'Get insights and grow your savings',
		body: 'Understand trends in your spending and make confident decisions every day.',
	},
];

export const OnboardingScreen = ({ navigation }: OnboardingScreenProps) => {
	const { height: screenHeight } = useWindowDimensions();
	const insets = useSafeAreaInsets();
	const pagerRef = useRef<PagerView>(null);
	const [pageIndex, setPageIndex] = useState(0);
	const [isFinishing, setIsFinishing] = useState(false);

	const isLastPage = pageIndex === PAGES.length - 1;

	const finishOnboarding = async () => {
		if (isFinishing) return;
		setIsFinishing(true);
		await setHasSeenOnboarding(true);
		const rootNav = navigation.getParent();
		rootNav?.reset({
			index: 0,
			routes: [{ name: ScreenNames.Root.AuthFlow }],
		});
	};

	const onNext = async () => {
		if (isLastPage) {
			await finishOnboarding();
			return;
		}
		pagerRef.current?.setPage(pageIndex + 1);
	};

	const imageHeight = Math.min(330, Math.max(200, screenHeight * 0.37));
	const pagerHeight = Math.min(170, Math.max(120, screenHeight * 0.2));
	const screenBottomPadding = Math.max(24, insets.bottom + 12);
	const cardBottomPadding = Math.max(24, insets.bottom + 10);

	return (
		<PageContainer
			header={
				<HeaderBar
					rightAction={
						<HeaderAction
							type='text'
							label='Skip'
							onPress={finishOnboarding}
							disabled={isFinishing}
						/>
					}
				/>
			}
		>
			<View style={[styles.screen, { paddingBottom: screenBottomPadding }]}> 
				<Image
					source={require('../../../assets/onboarding.png')}
					resizeMode='contain'
					style={{ height: imageHeight }}
				/>

				<ContentContainer
					style={[styles.card, { paddingBottom: cardBottomPadding }]}
				>
					<PagerView
						ref={pagerRef}
						style={[styles.pager, { height: pagerHeight }]}
						initialPage={0}
						onPageSelected={(event) => setPageIndex(event.nativeEvent.position)}
					>
						{PAGES.map((page, index) => (
							<View key={index}>
								<Text style={styles.title}>{page.title}</Text>
								<Text style={styles.body}>{page.body}</Text>
							</View>
						))}
					</PagerView>

					<View style={styles.dotsRow}>
						{PAGES.map((_, dotIndex) => {
							const active = dotIndex === pageIndex;
							return (
								<View
									key={dotIndex}
									style={[styles.dot, active && styles.activeDot]}
								/>
							);
						})}
					</View>

					<AppButton
						title='Next'
						onPress={onNext}
						loading={isFinishing}
						disabled={isFinishing}
					/>
				</ContentContainer>
			</View>
		</PageContainer>
	);
};
