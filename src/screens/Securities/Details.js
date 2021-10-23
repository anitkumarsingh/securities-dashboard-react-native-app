import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { stocks } from '../../mocks';

const Details = ({ route }) => {
	const { itemId } = route.params;
	const filterStocks = stocks.filter((i) => i['Security Id'] === itemId)[0];

	return (
		<View style={styles.container}>
			<View style={styles.bannerContainer}>
				<View style={styles.img} />
				<View>
					<Text style={{ paddingTop: 5,fontWeight:'bold' }}>{filterStocks['Issuer Name']}</Text>
					<Text style={{fontSize:12}}>{filterStocks['Industry']}</Text>
					<View style={styles.info}>
						<View style={{ display: 'flex', flexDirection: 'row' }}>
							<Text>{filterStocks['Instrument']}</Text>
						</View>
						<View style={{ display: 'flex', flexDirection: 'row' }}>
							<Text> | </Text>
							<Text>{filterStocks['ISIN No']}</Text>
						</View>
						<View style={{ display: 'flex', flexDirection: 'row' }}>
							<Text> | </Text>
							<Text>{filterStocks['Group']}</Text>
						</View>
					</View>
				</View>
			</View>
			<View style={styles.info}>
				<View style={{ display: 'flex', flexDirection: 'row' }}>
					<Text>Security Code : </Text>
					<Text>{filterStocks['Security Code']}</Text>
				</View>
				<View style={{ display: 'flex', flexDirection: 'row' }}>
					<Text>Instrument : </Text>
					<Text>{filterStocks['Instrument']}</Text>
				</View>
				<View style={{ display: 'flex', flexDirection: 'row' }}>
					<Text>Face Value : </Text>
					<Text>{filterStocks['Face Value']}</Text>
				</View>
			</View>
			<Text>Security Code</Text>
			<Text>{filterStocks['Security Code']}</Text>
			<Text>itemId: {JSON.stringify(itemId)}</Text>
			<Text>{JSON.stringify(filterStocks)}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1
		// justifyContent: 'center',
		// alignItems: 'center'
	},
	bannerContainer: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-evenly',
		marginTop: 10,
		backgroundColor: '#d3d3d3'
	},
	img: {
		paddingVertical: 35,
		paddingHorizontal: 30,
		backgroundColor: '#fff',
		borderRadius: 500,
		zIndex: 10,
		marginLeft: -140
	},
	bg: {
		backgroundColor: '#d3d3d3',
		// paddingVertical: 20,
		// paddingHorizontal: 190
	},
	info: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		marginVertical: 5
	}
});

export default Details;
