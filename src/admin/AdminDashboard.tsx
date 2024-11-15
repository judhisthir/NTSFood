// src/admin/AdminDashboard.tsx
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Appbar, IconButton } from 'react-native-paper';

import { NavigationContainer } from '@react-navigation/native';
import { DrawerNavigator } from './SideDrawer'; 

const AdminDashboard: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header with Appbar */}
      <Appbar.Header>
        <Appbar.Content title="Admin Dashboard" />
        <IconButton icon="bell" onPress={() => console.log('Notifications')} />
        <IconButton icon="account" onPress={() => console.log('Profile')} />
      </Appbar.Header>
      <NavigationContainer>
      <DrawerNavigator />  {/* Use the DrawerNavigator here */}
    </NavigationContainer>
    </SafeAreaView>
  );
};

export default AdminDashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
