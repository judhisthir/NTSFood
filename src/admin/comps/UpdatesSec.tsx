import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import {black} from 'react-native-paper/lib/typescript/styles/themes/v2/colors';
// import { View } from 'react-native-reanimated/lib/typescript/Animated';

const UpdatesSec = () => {
  const LatestCustormer = [
    {
      id: 1,
      profileImgUrl: 'https://via.placeholder.com/100',
      name: 'Lily shetti',
      email: 'lilyshetty@gmail.com',
      transAmt: 230,
    },
    {
      id: 2,
      profileImgUrl: 'https://via.placeholder.com/100',
      name: 'Lily shetti',
      email: 'lilyshetty@gmail.com',
      transAmt: 230,
    },
    {
      id: 3,
      profileImgUrl: 'https://via.placeholder.com/100',
      name: 'Lilyda shetti',
      email: 'lilyshetty@gmail.com',
      transAmt: 230,
    },
    {
      id: 4,
      profileImgUrl: 'https://via.placeholder.com/100',
      name: 'Lilyda shetti',
      email: 'lilyshetty@gmail.com',
      transAmt: 230,
    },
    {
      id: 5,
      profileImgUrl: 'https://via.placeholder.com/100',
      name: 'Lilyda shetti',
      email: 'lilyshetty@gmail.com',
      transAmt: 230,
    },
    {
      id: 6,
      profileImgUrl: 'https://via.placeholder.com/100',
      name: 'Lilyda shetti',
      email: 'lilyshetty@gmail.com',
      transAmt: 230,
    },
  ];
  // const TopProduct = [
  //     {
  //         id:1,
  //         FoodItem: "panipuri",
  //         NoOfSales: 25,
  //         totalSales: 599,
  //     },
  // ];
  return (
    <>
      <View>
        <View>
          <Text style={styles.name}>Latest Customer</Text>
          {LatestCustormer.map(customer => (
            <View key={customer.id} style={styles.CustomerCard}>
              <View style={styles.userInfoContainer}>
                <Image
                  resizeMode="contain"
                  source={{uri: customer.profileImgUrl}}
                  style={styles.avatar}
                />
                <View style={styles.textContainer}>
                  <Text style={styles.name}>{customer.name}</Text>
                  <Text style={styles.email}>{customer.email}</Text>
                </View>
                <View style={styles.amountContainer}>
                  <Text style={styles.amount}>{customer.transAmt}</Text>
                </View>
              </View>
            </View>
          ))}
          ;
        </View>
        {/* <View>
            </View> */}
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  CustomerCard: {
    display: 'flex',
    width: '50%',
    alignItems: 'stretch',
    gap: 86,
    marginBottom: 10,
    flexDirection: 'row',
  },
  userInfoContainer: {
    marginLeft: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'stretch',
    gap: 18,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 'auto',
  },
  avatar: {
    borderRadius: 50,
    position: 'relative',
    display: 'flex',
    width: 75,
    flexShrink: 0,
    aspectRatio: 1,
  },
  textContainer: {
    display: 'flex',
    marginTop: 'auto',
    marginBottom: 'auto',
    flexDirection: 'column',
  },
  name: {
    fontSize: 26,
    fontWeight: '600',
  },
  email: {
    fontSize: 16,
    fontWeight: '500',
    marginTop: 5,
  },
  amountContainer: {
    alignSelf: 'flex-end',
    borderColor: 'black',
    borderWidth: 1,
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  amount: {
    fontSize: 24,
    fontWeight: '600',
  },
});

export default UpdatesSec;
