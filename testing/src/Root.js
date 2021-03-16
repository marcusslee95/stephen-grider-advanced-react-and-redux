import { Provider } from "react-redux"
import { createStore } from "redux"
import reducer from './reducers'

const Root = (props) => {//component - aka. function that returns some jsx - that we use to avoid writing redundant code in our tests -> our test components that receive or change state need access from state from the provider component so we need to also have the Provider component wrapping them
    const store = createStore(
        reducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //let's us use redux devtools
        )
    // console.log(store.getState())
    return (
        <Provider store={store}>
            {props.children}
        </Provider>
    )
}

export default Root