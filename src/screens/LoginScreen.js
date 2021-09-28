import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  SafeAreaView,
  Dimensions,
} from 'react-native';
// redux
import {useDispatch} from 'react-redux';
import {LoginAction} from './../redux/actions/user';
// com
import Input from '../components/login/Input';
import ButtonRegular from '../components/login/ButtonRegular';
import ScrollKeyboardBox from '../components/common/ScrollKeyboardBox';

// utils
import {COLORS} from '../utils/variables';
import {Pokemon} from './../assets/icons';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [usernameError, setUsernameError] = useState('');

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [disableCondition, setDisableCondition] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    if (username && password) {
      setDisableCondition(false);
    } else {
      setDisableCondition(true);
    }
  }, [username, password]);

  const userChangeHandler = e => {
    setUsernameError('');
    const {text} = e.nativeEvent;
    setUsername(text);
  };

  const passChangeHandler = e => {
    setPasswordError('');
    const {text} = e.nativeEvent;
    setPassword(text);
  };

  const validation = () => {
    if (username.toLowerCase() !== 'john') {
      setUsernameError('username is wrong');
      return false;
    } else if (password.toLowerCase() !== 'doe') {
      setPasswordError('password is wrong');
      return false;
    } else {
      return true;
    }
  };

  const _login = () => {
    if (validation()) {
      dispatch(
        LoginAction({
          fullname: `${username} ${password}`,
          token: `${username}-${password}`,
        }),
      );
    }
  };

  const {parent, title, insideScroll, body, head, pokeImg} = styles;

  return (
    <SafeAreaView style={parent}>
      <ScrollKeyboardBox>
        <View style={insideScroll}>
          <View style={head}>
            <Image source={Pokemon} style={pokeImg} />
          </View>
          <View style={body}>
            <Text style={title}>Login Pokedex</Text>
            <Input
              title="username"
              placeholder="john"
              change={userChangeHandler}
              value={username.toString()}
              error={usernameError}
            />
            <Input
              title="password"
              placeholder="doe"
              change={passChangeHandler}
              value={password.toString()}
              error={passwordError}
              secureTextEntry={true}
            />
            <ButtonRegular
              title="Log in"
              backgroundColor={disableCondition ? COLORS.cb : COLORS.cfe367e}
              color="#fff"
              width="100%"
              marginTop={32}
              loadingColor="#fff"
              press={_login}
              disabled={disableCondition}
            />
          </View>
        </View>
      </ScrollKeyboardBox>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: COLORS.main,
  },
  insideScroll: {
    height: Dimensions.get('screen').height,
  },
  head: {
    height: 240,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: COLORS.c393939,
    fontSize: 20,
    textAlign: 'left',
    width: '100%',
    fontWeight: 'bold',
  },
  body: {
    backgroundColor: 'white',
    flex: 1,
    borderTopLeftRadius: 30,
    elevation: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    width: '100%',
  },
  pokeImg: {width: '100%', height: 140, resizeMode: 'contain'},
});

export default LoginScreen;
