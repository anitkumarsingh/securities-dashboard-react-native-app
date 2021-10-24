import React, { useState, useLayoutEffect } from 'react';
import {
	View,
	StyleSheet,
	FlatList,
	TextInput,
	SafeAreaView,
	TouchableOpacity
} from 'react-native';
import { stocks } from '../../mocks';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import List from '../../components/List';
import Pagination from '../../components/Pagination';
import Loader from '../../components/Loader';

const Home = ({ navigation }) => {
	const [stock, setStock] = useState(stocks);
	const [searchInputVisible, setSearchInputVisible] = useState(false);
	const [pageNumber, setPageNumber] = useState(1);
	const [stockNumber] = useState(10);
	const [isLoading, setIsLoading] = useState(false);
	const [searchTerm, setSearchTerm] = useState('');
	const [stockHolder, setStockHolder] = useState(stocks);
	const [isASCOrder, setIsASCOrder] = useState(true);

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

	const searchFilter = (text) => {
		setIsLoading(true);
		setSearchTerm(text);
		const newData = stockHolder.filter((item) => {
			const itemData = `${item['Security Id'].toUpperCase()}`;
			const textData = text.toUpperCase();
			return itemData.indexOf(textData) > -1;
		});
		setTimeout(() => {
			setIsLoading(false);
			setStock(newData);
		}, 10);
	};

	const renderHeader = () => {
		return (
			<View style={styles.textInput}>
				<TextInput
					placeholder='Search Stocks by Security Id...'
					onChangeText={(text) => searchFilter(text)}
					value={searchTerm}
					autoFocus={true}
				/>
			</View>
		);
	};
	const SortStocks = () => {
		const copyArray = [...stockHolder];
		setIsASCOrder(!isASCOrder);
		if (isASCOrder) {
			copyArray.sort(function (a, b) {
				return a['Face Value'] - b['Face Value'];
			});
		} else {
			copyArray.sort(function (a, b) {
				return b['Face Value'] - a['Face Value'];
			});
		}
		setStock(copyArray);
	};

	useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<SafeAreaView style={styles.inputContainer}>
					<TouchableOpacity onPress={() => setSearchInputVisible(!searchInputVisible)}>
						<Ionicons name='search' size={20} color={'white'} title='Search Stocks' />
					</TouchableOpacity>
					<TouchableOpacity onPress={() => SortStocks()}>
						{isASCOrder ? (
							<MaterialCommunityIcons
								name='sort-ascending'
								size={20}
								color={'white'}
								title='Sort Stocks by Face Value'
							/>
						) : (
							<MaterialCommunityIcons
								name='sort-descending'
								size={20}
								color={'white'}
								title='Sort Stocks by Face Value'
							/>
						)}
					</TouchableOpacity>
				</SafeAreaView>
			)
		});
	}, [navigation, searchInputVisible, isASCOrder]);

	if (isLoading) {
		return <Loader />;
	}

	return (
		<SafeAreaView style={styles.container}>
			<FlatList
				data={paginatedStocks}
				renderItem={renderItem}
				keyExtractor={(item) => item['ISIN No']}
				ItemSeparatorComponent={renderSeparator}
				ListHeaderComponent={searchInputVisible ? renderHeader : null}
			/>
			<Pagination handleNext={handleNext} handlePrev={handlePrev} />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	inputContainer: {
		flexDirection: 'row'
	},
	textInput: {
		flex: 1,
		marginHorizontal: 22,
		marginVertical: 10,
		borderBottomColor: '#d3d3d3',
		borderBottomWidth: 1
	}
});

export default Home;
