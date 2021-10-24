import React, { useState, useLayoutEffect } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Button,
	FlatList,
	TextInput,
} from 'react-native';
import { stocks } from '../../mocks';
import { Ionicons } from '@expo/vector-icons';
import List from '../../components/List';
import Pagination from '../../components/Pagination';

const Home = ({ navigation }) => {
	const [stock, setStock] = useState(stocks);
	const [count, setCount] = useState(0);
	const [searchInputVisible, setSearchInputVisible] = useState(false);
	const [pageNumber, setPageNumber] = useState(1);
	const [stockNumber] = useState(10);

	const currentPageNumber = pageNumber * stockNumber - stockNumber;
	const paginatedStocks = stock.splice(currentPageNumber, stockNumber);

	const handlePrev = () => {
		if (pageNumber === 1) return;
		setPageNumber(pageNumber - 1);
	};
	const handleNext = () => {
		setPageNumber(pageNumber + 1);
	};

	const renderItem = ({ item }) => <List data={item} navigation={navigation} />;
	const renderSeparator = () => {
		return (
			<View
				style={{
					height: 1,
					width: '86%',
					backgroundColor: '#CED0CE',
					marginLeft: '8%'
				}}
			/>
		);
	};

	const searchHandler = () => {
		setSearchInputVisible(true);
		setCount((c) => c + 1);
	};

	useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<Ionicons
					name='search'
					size={20}
					color={'white'}
					onPress={() => searchHandler()}
					title='Update count'
				/>
			)
		});
	}, [navigation, setCount]);

	return (
		<View style={styles.container}>
			<Text>Count: {count}</Text>
			{searchInputVisible ? <TextInput placeholder='search' /> : null}
			<FlatList
				data={paginatedStocks}
				renderItem={renderItem}
				keyExtractor={(item) => item['ISIN No']}
				ItemSeparatorComponent={renderSeparator}
			/>
			<Pagination handleNext={handleNext} handlePrev={handlePrev}/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});

export default Home;
