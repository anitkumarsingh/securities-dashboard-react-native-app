import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { AvatarUrl } from '../../constants';
import { FontAwesome } from '@expo/vector-icons';
import { colors } from '../../utils/colors';

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
			<View style={styles.industry}>
				<Text style={{ paddingTop: 5, fontWeight: 'bold' }}>
					<FontAwesome name='industry' size={24} color='green' /> Industry :{' '}
					{itemId['Industry']}
				</Text>
			</View>
			<View
				style={{
					borderBottomColor: '#d3d3d3',
					borderBottomWidth: 1
				}}
			/>
			<View style={styles.info}>
				<View style={{ display: 'flex', flexDirection: 'row' }}>
					<Text style={styles.label}>Security Code : </Text>
					<Text>{itemId['Security Code']}</Text>
				</View>
				<View style={{ display: 'flex', flexDirection: 'row' }}>
					<Text style={styles.label}>Instrument : </Text>
					<Text>{itemId['Instrument']}</Text>
				</View>
				<View style={{ display: 'flex', flexDirection: 'row' }}>
					<Text style={styles.label}>Face Value : </Text>
					<Text>{itemId['Face Value']}</Text>
				</View>
			</View>
			<View
				style={{
					borderBottomColor: '#d3d3d3',
					borderBottomWidth: 1
				}}
			/>
			<View style={styles.info}>
				<View>
					<Text style={styles.label}>Status : </Text>
					<Text>{itemId['Status']}</Text>
				</View>
				<View>
					<Text style={styles.label}>Group : </Text>
					<Text>{itemId['Group']}</Text>
				</View>
				<View>
					<Text style={styles.label}>ISIN No : </Text>
					<Text>{itemId['ISIN No']}</Text>
				</View>
			</View>
			<View
				style={{
					borderBottomColor: '#d3d3d3',
					borderBottomWidth: 1
				}}
			/>
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
		// justifyContent: 'space-evenly',
		marginTop: 50,
		backgroundColor: '#d3d3d3',
		width: '100%'
	},
	img: {
		// paddingVertical: 35,
		// paddingHorizontal: 30,
		backgroundColor: '#fff',
		borderRadius: 500,
		zIndex: 10,
		marginRight: 20
	},
	bg: {
		backgroundColor: '#d3d3d3'
		// paddingVertical: 20,
		// paddingHorizontal: 190
	},
	info: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginVertical: 15
	},
	avatar: {
		width: 100,
		height: 100
	},
	industry: {
		marginHorizontal: 20,
		marginVertical: 20
	},
	label:{
		color:`${colors.secondaryGray}`,
		fontWeight:'bold',
	}
});

export default Details;
