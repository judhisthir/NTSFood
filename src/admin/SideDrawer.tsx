// Drawer.tsx

import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';

// Main Screens
function HomeScreen({ navigation }: { navigation: any }) {
  return (
    <View>
      <Text>Home Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('SubMenu1')}>
        <Text>Go to Sub Menu 1</Text>
      </TouchableOpacity>
    </View>
  );
}

function SettingsScreen({ navigation }: { navigation: any }) {
  return (
    <View>
      <Text>Settings Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('SubMenu2')}>
        <Text>Go to Sub Menu 2</Text>
      </TouchableOpacity>
    </View>
  );
}

function ProfileScreen({ navigation }: { navigation: any }) {
  return (
    <View>
      <Text>Profile Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('SubMenu3')}>
        <Text>Go to Sub Menu 3</Text>
      </TouchableOpacity>
    </View>
  );
}

function NotificationsScreen({ navigation }: { navigation: any }) {
  return (
    <View>
      <Text>Notifications Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('SubMenu4')}>
        <Text>Go to Sub Menu 4</Text>
      </TouchableOpacity>
    </View>
  );
}

// Sub Menu Screens
function SubMenu1() {
  return (
    <View>
      <Text>Sub Menu 1</Text>
    </View>
  );
}

function SubMenu2() {
  return (
    <View>
      <Text>Sub Menu 2</Text>
    </View>
  );
}

function SubMenu3() {
  return (
    <View>
      <Text>Sub Menu 3</Text>
    </View>
  );
}

function SubMenu4() {
  return (
    <View>
      <Text>Sub Menu 4</Text>
    </View>
  );
}

// Custom Drawer Content
export function CustomDrawerContent({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={styles.item}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SubMenu1')}>
        <Text style={styles.subMenu}>Sub Menu 1</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
        <Text style={styles.item}>Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SubMenu2')}>
        <Text style={styles.subMenu}>Sub Menu 2</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Text style={styles.item}>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SubMenu3')}>
        <Text style={styles.subMenu}>Sub Menu 3</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
        <Text style={styles.item}>Notifications</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SubMenu4')}>
        <Text style={styles.subMenu}>Sub Menu 4</Text>
      </TouchableOpacity>
    </View>
  );
}

// Drawer Navigator
const Drawer = createDrawerNavigator();

export function DrawerNavigator() {
  return (
    // eslint-disable-next-line react/no-unstable-nested-components
    <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      <Drawer.Screen name="SubMenu1" component={SubMenu1} />
      <Drawer.Screen name="SubMenu2" component={SubMenu2} />
      <Drawer.Screen name="SubMenu3" component={SubMenu3} />
      <Drawer.Screen name="SubMenu4" component={SubMenu4} />
    </Drawer.Navigator>
  );
}

// Drawer styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingLeft: 20,
  },
  item: {
    paddingVertical: 10,
    fontSize: 18,
  },
  subMenu: {
    paddingLeft: 20,
    fontSize: 16,
    color: 'gray',
  },
});
