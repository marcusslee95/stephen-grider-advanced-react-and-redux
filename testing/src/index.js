import ReactDOM from 'react-dom'
import App from './components/App'
import { reducer } from './reducers'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

const store = createStore(
    reducer, 
    // {comments: ['Use Redux']},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //let's us use redux devtools
)
console.log(store.getState())

ReactDOM.render( //Provider is the thing that provides the whole app access to the global state object -> components can now be wrapped in connect() to access values from state and change values in state by sending actions 
    <Provider store={store}> 
        <App/>
    </Provider>, document.querySelector('#root'))



