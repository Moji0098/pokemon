import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
// redux
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './redux/store';
// routes
import Routes from './routes';

const App = props => {
  const {parent} = styles;
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <StatusBar backgroundColor="#facb33" />
          <SafeAreaView style={parent}>
            <Routes {...props} />
          </SafeAreaView>
        </PersistGate>
      </Provider>
    </>
  );
};

const styles = StyleSheet.create({
  parent: {
    flex: 1,
  },
});

export default App;
