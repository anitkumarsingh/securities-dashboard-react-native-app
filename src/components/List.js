import React from 'react';
import { StyleSheet, Text, View, Image,	TouchableOpacity } from 'react-native';
import { AvatarUrl } from '../constants';

const List = ({ data, navigation }) => {
	return (
		<TouchableOpacity
			onPress={() => {
				navigation.navigate('Securities', {
					itemId: data
				});
			}}>
			<View style={styles.item}>
				<View style={styles.content}>
					<View>
						<Image
							style={styles.avatar}
							source={{
								uri: `${AvatarUrl}?background=random&rounded=true&name=${data['Security Name']}`
							}}
						/>
					</View>
					<View>
						<Text style={styles.title}>{data['Security Name']}</Text>
						<Text style={styles.subtitle}>{data['Security Id']}</Text>
					</View>
				</View>
			</View>
		</TouchableOpacity>
	);
};

export default List;

const styles = StyleSheet.create({
	item: {
		// backgroundColor: '#f9c2ff',
		padding: 15,
		// marginVertical: 8,
		marginHorizontal: 16
		// borderRadius: 20
	},
	content: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center'
	},
	title: {
		fontSize: 14,
    fontWeight:'bold'
	},
  subtitle:{
    fontSize:12,
    color:'#666',
    fontWeight:'700'
  },
	avatar: {
		width: 50,
		height: 50,
		marginRight: 10
	}
});
