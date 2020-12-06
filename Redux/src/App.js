import React from 'react';
import { Provider } from 'react-redux';
import Count from './components/Count';
import Controls from './components/Controls';
import store from './store';

function App() {
    return (
        <Provider store={store}>
          <div>
            <Count />
            <br />
            <Controls />
          </div>
        </Provider>
    );
}

export default App;
