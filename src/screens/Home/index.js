import React from 'react';
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native';
import { stocks } from '../../mocks';

const Item = ({ title, securityId, navigation }) => (
	<TouchableOpacity
		onPress={() => {
			navigation.navigate('Securities', {
				itemId:securityId,
			});
		}}>
		<View style={styles.item}>
			<View style={styles.content}>
				<Text style={styles.title}>{title}</Text>
				<Text style={styles.title}>{securityId}</Text>
			</View>
		</View>
	</TouchableOpacity>
);

const Home = ({ navigation }) => {
	const renderItem = ({ item }) => (
		<Item
			title={item['Security Name']}
			securityId={item['Security Id']}
			navigation={navigation}
		/>
	);
	return (
		<View style={styles.container}>
			<FlatList
				data={stocks}
				renderItem={renderItem}
				keyExtractor={(item) => item['ISIN No']}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	item: {
		backgroundColor: '#f9c2ff',
		padding: 20,
		marginVertical: 8,
		marginHorizontal: 16,
		borderRadius: 20
	},
	content: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	title: {
		fontSize: 14
	}
});

export default Home;
