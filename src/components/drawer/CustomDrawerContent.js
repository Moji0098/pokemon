import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';

//---redux
import {useDispatch} from 'react-redux';
import {ClearUserAction} from './../../redux/actions/user';
import {useSelectorUserInfo} from './../../redux/selectors/selectors';
//---const
import {COLORS, ROUTES} from './../../utils/variables';
import {BookmarkEmpty, LogOut, PokeballRed, Home} from './../../assets/icons';

function CustomDrawerContent(props) {
  const dispatch = useDispatch();
  const {navigate} = useNavigation();
  const {fullname} = useSelectorUserInfo() || {fullname: '...'};

  const MENU_LIST = [
    {label: 'Home', Icon: Home, route: ROUTES.HOME},
    {label: 'Favorites', Icon: BookmarkEmpty, route: ROUTES.FAVORITES},
  ];

  const logOut = () => {
    dispatch(ClearUserAction());
  };

  return (
    <View style={drawerStyles.drawerMenuBox}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={drawerStyles.contentContainerStyle}
        style={drawerStyles.drawerHead}>
        <View style={drawerStyles.drawerHeaderBox}>
          <PokeballRed style={drawerStyles.drawerProfileImage} />
          <View style={drawerStyles.nameBox}>
            <Text style={drawerStyles.username}>{fullname}</Text>
          </View>
        </View>
      </DrawerContentScrollView>
      <View style={drawerStyles.body}>
        <SafeAreaView style={drawerStyles.drawerMenuBody}>
          {MENU_LIST.map(item => {
            const {label, route, Icon} = item;
            return (
              <TouchableOpacity
                key={label}
                style={drawerStyles.menuItem}
                onPress={() => navigate(route)}>
                <View style={drawerStyles.menuIconBox}>
                  <Icon width={20} />
                </View>
                <Text style={drawerStyles.menuText}>{label}</Text>
              </TouchableOpacity>
            );
          })}
        </SafeAreaView>
        {/* exit */}
        <TouchableOpacity style={drawerStyles.draweExitBtn} onPress={logOut}>
          <View style={drawerStyles.menuIconBox}>
            <LogOut width={20} />
          </View>
          <Text style={drawerStyles.menuText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default CustomDrawerContent;

const drawerStyles = StyleSheet.create({
  menuItem: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 16,
  },
  menuText: {
    fontSize: 14,
    marginLeft: 12,
    color: COLORS.c24,
    fontWeight: 'bold',
  },
  menuIconBox: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuIcon: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  draweExitBtn: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    height: 32,
  },
  drawerMenuBody: {flex: 3},
  drawerShowProfile: {
    fontSize: 12,

    width: '100%',
    color: COLORS.color2,
    textAlign: 'center',
  },
  drawerShowProfileImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  drawerShowProfileBtn: {width: 28, height: 28, position: 'absolute', left: 0},
  drawerShowProfileBox: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
    marginVertical: 8,
  },
  nameBox: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  username: {
    fontSize: 16,
    color: COLORS.c24,
    fontWeight: 'bold',
    marginTop: 12,
  },
  drawerMenuBox: {flex: 1, backgroundColor: COLORS.main},
  drawerHead: {
    flex: 1,
    backgroundColor: COLORS.cf9f9f9,
  },
  drawerHeaderBox: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  drawerProfileImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  body: {
    flex: 3,
    padding: 16,
  },
  contentContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
