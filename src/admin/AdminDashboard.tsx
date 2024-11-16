// CustomDrawerContent.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const CollapsibleMenuItem = ({ title, submenus }: { title: string, submenus: string[] }) => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <View>
      {/* Menu Item */}
      <TouchableOpacity onPress={() => setCollapsed(!collapsed)}>
        <Text style={styles.menuItem}>{title}</Text>
      </TouchableOpacity>

      {/* Submenus */}
      {!collapsed && submenus.map((submenu, index) => (
        <Text key={index} style={styles.submenu}>{submenu}</Text>
      ))}
    </View>
  );
};

const CustomDrawerContent = (props: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Custom Drawer</Text>
      <CollapsibleMenuItem
        title="Item 1"
        submenus={['Submenu 1.1', 'Submenu 1.2', 'Submenu 1.3']}
      />
      <CollapsibleMenuItem
        title="Item 2"
        submenus={['Submenu 2.1', 'Submenu 2.2', 'Submenu 2.3']}
      />
      <CollapsibleMenuItem
        title="Item 3"
        submenus={['Submenu 3.1', 'Submenu 3.2', 'Submenu 3.3']}
      />
      <CollapsibleMenuItem
        title="Item 4"
        submenus={['Submenu 4.1', 'Submenu 4.2', 'Submenu 4.3']}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
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

export default CustomDrawerContent;
