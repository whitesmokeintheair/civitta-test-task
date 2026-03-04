import React, { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type PageContainerProps = {
	children: ReactNode;
	header?: ReactNode;
};

export const PageContainer = ({
	children,
	header,
}: PageContainerProps) => {
	return (
		<SafeAreaView style={styles.safeArea}>
			<View style={styles.container}>
				{header ? <View style={styles.header}>{header}</View> : null}
				<View style={styles.content}>{children}</View>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
		backgroundColor: '#F4F6FF',
	},
	container: {
		flex: 1,
		backgroundColor: '#F4F6FF',
	},
	header: {
		paddingTop: 8,
	},
	content: {
		flex: 1,
	},
});
