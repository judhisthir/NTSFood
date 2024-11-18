// Drawer.tsx

import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import AllShopsPage from './comps/AllShop';
import DashboardInfo from './comps/DashboardCards';
import UpdatesSec from './comps/UpdatesSec';
import {ScrollView} from 'react-native-gesture-handler';
// import { NavigationContainer } from '@react-navigation/native';

// Main Screens
function HomeScreen({navigation}: {navigation: any}) {
  return (
    <ScrollView>
      <View style={styles.views}>
        {/* <Text>Home Screen</Text> */}
        <DashboardInfo />
        <UpdatesSec />
        <TouchableOpacity onPress={() => navigation.navigate('SubMenu1')}>
          {/* <Text>Go to Sub Menu-1</Text> */}
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

function SettingsScreen({navigation}: {navigation: any}) {
  return (
    <View>
      <Text>Settings Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('SubMenu2')}>
        <Text>Go to Sub Menu 2</Text>
      </TouchableOpacity>
    </View>
  );
}

function ProfileScreen({navigation}: {navigation: any}) {
  return (
    <View>
      <Text>Profile Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('SubMenu3')}>
        <Text>Go to Sub Menu 3</Text>
      </TouchableOpacity>
    </View>
  );
}

function NotificationsScreen({navigation}: {navigation: any}) {
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
    <View style={styles.views}>
      {/* <Text>Sub Menu 1</Text> */}
      <AllShopsPage />
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
export function CustomDrawerContent({navigation}: {navigation: any}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={styles.item}>Shops</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SubMenu1')}>
        <Text style={styles.subMenu}>All Shops</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SubMenu1')}>
        <Text style={styles.subMenu}>Verify Shops</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SubMenu1')}>
        <Text style={styles.subMenu}>Remove Shops</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
        <Text style={styles.item}>Products</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SubMenu2')}>
        <Text style={styles.subMenu}>All Product</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SubMenu2')}>
        <Text style={styles.subMenu}>Verify Product</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SubMenu2')}>
        <Text style={styles.subMenu}>Removed Product</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SubMenu2')}>
        <Text style={styles.subMenu}>Unavailable Product</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Text style={styles.item}>Offers</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SubMenu3')}>
        <Text style={styles.subMenu}>All Offers</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SubMenu3')}>
        <Text style={styles.subMenu}>Add Offers</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SubMenu3')}>
        <Text style={styles.subMenu}>Verify Offers</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
        <Text style={styles.item}>History</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SubMenu4')}>
        <Text style={styles.subMenu}>Billing</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SubMenu4')}>
        <Text style={styles.subMenu}>Order History</Text>
      </TouchableOpacity>
    </View>
  );
}

// Drawer Navigator
const Drawer = createDrawerNavigator();

export function DrawerNavigator() {
  return (
    <Drawer.Navigator
      // eslint-disable-next-line react/no-unstable-nested-components
      drawerContent={props => <CustomDrawerContent {...props} />}>
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
  views: {
    flex: 1,
  },
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
