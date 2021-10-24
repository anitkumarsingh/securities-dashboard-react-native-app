import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { AvatarUrl } from '../../constants';

const Details = ({ route }) => {
	const { itemId } = route.params;
	return (
		<View style={styles.container}>
			<View style={styles.bannerContainer}>
				<View>
					<Image
						style={[styles.avatar, styles.img]}
						source={{
							uri: `${AvatarUrl}?background=random&rounded=true&name=${itemId['Security Name']}`
						}}
					/>
				</View>
				<View>
					<Text style={{ paddingTop: 5, fontWeight: 'bold' }}>
						{itemId['Issuer Name']}
					</Text>
					<Text style={{ fontSize: 12 }}>{itemId['Industry']}</Text>
				</View>
			</View>
			<View style={styles.info}>
				<View style={{ display: 'flex', flexDirection: 'row' }}>
					<Text>Security Code : </Text>
					<Text>{itemId['Security Code']}</Text>
				</View>
				<View style={{ display: 'flex', flexDirection: 'row' }}>
					<Text>Instrument : </Text>
					<Text>{itemId['Instrument']}</Text>
				</View>
				<View style={{ display: 'flex', flexDirection: 'row' }}>
					<Text>Face Value : </Text>
					<Text>{itemId['Face Value']}</Text>
				</View>
			</View>
			<View
				style={{
					borderBottomColor: '#d3d3d3',
					borderBottomWidth: 1
				}}
			/>
			<Text>Security Code</Text>
			<Text>{itemId['Security Code']}</Text>
			<Text>{JSON.stringify(itemId)}</Text>
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
		// paddingVertical: 35,
		// paddingHorizontal: 30,
		backgroundColor: '#fff',
		borderRadius: 500,
		zIndex: 10
	},
	bg: {
		backgroundColor: '#d3d3d3'
		// paddingVertical: 20,
		// paddingHorizontal: 190
	},
	info: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		marginVertical: 5
	},
	avatar: {
		width: 50,
		height: 50
	}
});

export default Details;
