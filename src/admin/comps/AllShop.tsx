import React from 'react';
import { View, Text, StyleSheet, Image, Button, ScrollView, Alert } from 'react-native';

const AllShopsPage = () => {
  const shops = [
    {
      id: 1,
      photo: 'https://via.placeholder.com/100',
      name: 'Shop 1',
      location: 'Location 1',
      sellerName: 'Seller 1',
      contact: '123-456-7890',
      timing: '9:00 AM - 9:00 PM',
    },
    {
      id: 2,
      photo: 'https://via.placeholder.com/100',
      name: 'Shop 2',
      location: 'Location 2',
      sellerName: 'Seller 2',
      contact: '987-654-3210',
      timing: '10:00 AM - 8:00 PM',
    },
    {
      id: 3,
      photo: 'https://via.placeholder.com/100',
      name: 'Shop 2',
      location: 'Location 2',
      sellerName: 'Seller 2',
      contact: '987-654-3210',
      timing: '10:00 AM - 8:00 PM',
    },
    {
      id: 4,
      photo: 'https://via.placeholder.com/100',
      name: 'Shop 2',
      location: 'Location 2',
      sellerName: 'Seller 2',
      contact: '987-654-3210',
      timing: '10:00 AM - 8:00 PM',
    },
    // Add more shops as needed
  ];

  return (
    <ScrollView style={styles.container}>
      {/* <Text style={styles.header}>Helo</Text> */}
      {shops.map((shop) => (
        <View key={shop.id} style={styles.card}>
          <Image source={{ uri: shop.photo }} style={styles.photo} />
          <Text style={styles.text}>{shop.name}</Text>
          <Text style={styles.text}>Location: {shop.location}</Text>
          <Text style={styles.text}>Seller: {shop.sellerName}</Text>
          <Text style={styles.text}>Contact: {shop.contact}</Text>
          <Text style={styles.text}>Timing: {shop.timing}</Text>
          <View style={styles.buttonContainer}>
            <Button title="Details" onPress={() => Alert.alert(`Details for ${shop.name}`)} />
            <Button title="Open" onPress={() => Alert.alert(`Opening ${shop.name}`)} />
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,  // Take up full available space
    paddingVertical: 20, // Add vertical padding
    paddingHorizontal: 10, // Add horizontal padding
    backgroundColor: '#f8f8f8',
  },
  header: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20, // Add space between header and content
  },
  card: {
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  photo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 10,
    borderRadius: 8,
  },
  text: {
    fontSize: 14,
    marginBottom: 5,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
});

export default AllShopsPage;
