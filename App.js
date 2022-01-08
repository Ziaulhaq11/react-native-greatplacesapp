import React from 'react';
import PlacesNavigator from './navigation/PlacesNavigation';
import {createStore,combineReducers,applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk'
import placesReducers from './store/places-reducers';

const rootReducer = combineReducers({
  places : placesReducers
})

const store = createStore(rootReducer,applyMiddleware(ReduxThunk))

export default function App() {
  return (
    <Provider store={store}>
      <PlacesNavigator />
    </Provider>
  );
}
