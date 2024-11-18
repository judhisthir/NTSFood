import React from 'react';
import { Linking, StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native';

const DashboardInfo = () => {
  const cardInfo = [
    {
      id: 1,
      nos: 12,
      categotyType: 'Shop',
      moreInfoLink: 'https://www.youtube.com',
    },
    {
      id: 2,
      nos: 15,
      categotyType: 'Service',
      moreInfoLink: 'https://www.example.com',
    },
    {
      id: 3,
      nos: 9,
      categotyType: 'Product',
      moreInfoLink: 'https://www.example.com',
    },
    {
      id: 4,
      nos: 7,
      categotyType: 'Shop',
      moreInfoLink: 'https://www.youtube.com',
    },
    {
      id: 5,
      nos: 22,
      categotyType: 'Service',
      moreInfoLink: 'https://www.example.com',
    },
    {
      id: 6,
      nos: 19,
      categotyType: 'Product',
      moreInfoLink: 'https://www.example.com',
    },
  ];

  const handleMoreInfoPress = (url: string) => {
    Linking.openURL(url);
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{item.nos}</Text>
      <Text style={styles.cardCategory}>{item.categotyType}</Text>
      <TouchableOpacity onPress={() => handleMoreInfoPress(item.moreInfoLink)}>
        <Text style={styles.moreInfo}>More Info</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <FlatList
      data={cardInfo}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2} // This ensures 2 cards per row
      columnWrapperStyle={styles.columnWrapper}
      contentContainerStyle={styles.cardContainer}
    />
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    padding: 10,
  },
  columnWrapper: {
    justifyContent: 'space-between',
    marginBottom: 16, // space between rows
  },
  card: {
    flex: 1,
    margin: 8,
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 5, // for Android shadow
    shadowColor: '#000', // for iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardCategory: {
    marginTop: 8,
    fontSize: 14,
    color: '#888',
  },
  moreInfo: {
    marginTop: 8,
    color: '#007BFF',
    textDecorationLine: 'underline',
  },
});

export default DashboardInfo;
