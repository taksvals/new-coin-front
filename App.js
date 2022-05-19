import React from 'react';
import 'localstorage-polyfill';
import {NavigationContainer} from '@react-navigation/native';

//Redux
import { Provider } from 'react-redux';
import store from './src/store';

import AppStack from './src/navigation/AppStack';

const App = () => {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<AppStack />
			</NavigationContainer>
		</Provider>
	);
}

export default App;