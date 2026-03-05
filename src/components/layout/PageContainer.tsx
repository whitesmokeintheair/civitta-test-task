import React, { ReactNode, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../theme/ThemeContext';

type PageContainerProps = {
	children: ReactNode;
	header?: ReactNode;
};

export const PageContainer = ({
	children,
	header,
}: PageContainerProps) => {
	const { colors } = useTheme();
	const styles = useMemo(() => createStyles(colors), [colors]);

	return (
		<SafeAreaView style={styles.safeArea}>
			<View style={styles.container}>
				{header ? <View style={styles.header}>{header}</View> : null}
				<View style={styles.content}>{children}</View>
			</View>
		</SafeAreaView>
	);
};

const createStyles = (colors: ReturnType<typeof useTheme>['colors']) =>
	StyleSheet.create({
	safeArea: {
		flex: 1,
		backgroundColor: colors.backgroundPrimary,
	},
	container: {
		flex: 1,
		backgroundColor: colors.backgroundPrimary,
	},
	header: {
		paddingTop: 8,
	},
	content: {
		flex: 1,
	},
	});
