// App.tsx
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const HomeScreen = () => (
  <SafeAreaView style={styles.container}>
    <Text>Home Screen</Text>
  </SafeAreaView>
);

const SettingsScreen = () => (
  <SafeAreaView style={styles.container}>
    <Text>Settings Screen</Text>
  </SafeAreaView>
);

const CustomDrawerContent = (props: any) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      {/* Collapsible Menu Item */}
      <Text style={styles.menuItem}>Item 1</Text>
      <Text style={styles.submenu}>Submenu 1.1</Text>
      <Text style={styles.submenu}>Submenu 1.2</Text>
      <Text style={styles.submenu}>Submenu 1.3</Text>

      <Text style={styles.menuItem}>Item 2</Text>
      <Text style={styles.submenu}>Submenu 2.1</Text>
      <Text style={styles.submenu}>Submenu 2.2</Text>
      <Text style={styles.submenu}>Submenu 2.3</Text>

      <Text style={styles.menuItem}>Item 3</Text>
      <Text style={styles.submenu}>Submenu 3.1</Text>
      <Text style={styles.submenu}>Submenu 3.2</Text>
      <Text style={styles.submenu}>Submenu 3.3</Text>

      <Text style={styles.menuItem}>Item 4</Text>
      <Text style={styles.submenu}>Submenu 4.1</Text>
      <Text style={styles.submenu}>Submenu 4.2</Text>
      <Text style={styles.submenu}>Submenu 4.3</Text>
    </DrawerContentScrollView>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuItem: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  submenu: {
    fontSize: 16,
    marginLeft: 20,
    marginVertical: 5,
  },
});

export default App;
