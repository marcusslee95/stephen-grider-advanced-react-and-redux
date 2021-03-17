import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import reducer from './reducers'
import reduxPromise from 'redux-promise'
import { composeWithDevTools } from 'redux-devtools-extension';


const Root = ({ children, initialState = {} }) => {//component - aka. function that returns some jsx - that we use to avoid writing redundant code in our tests -> our test components that receive or change state need access from state from the provider component so we need to also have the Provider component wrapping them
    const store = createStore(
        reducer,
        initialState,
        composeWithDevTools(  //let's us use redux devtools
            applyMiddleware( reduxPromise) //let's us do asynchronous stuff in our action creators
        )
    )
    // console.log(store.getState())
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default Root