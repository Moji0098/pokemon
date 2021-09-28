import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

//screens
import HomeScreen from '../screens/HomeScreen';
import PokeDetailsScreen from '../screens/PokeDetailsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

//components
import CustomDrawerContent from './../components/drawer/CustomDrawerContent';

// utils
import {ROUTES} from './../utils/variables';

const Drawer = createDrawerNavigator();

const DrawerStack = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{headerShown: false}}
      initialRouteName={ROUTES.HOME}>
      <Drawer.Screen name={ROUTES.HOME} component={HomeScreen} />
      <Drawer.Screen name={ROUTES.FAVORITES} component={FavoritesScreen} />
      <Drawer.Screen name={ROUTES.POKE_DETAILS} component={PokeDetailsScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerStack;
