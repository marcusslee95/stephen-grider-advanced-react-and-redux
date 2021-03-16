import ReactDOM from 'react-dom'
import App from './components/App'
import Root from './Root'

ReactDOM.render( //Provider is the thing that provides the whole app access to the global state object -> components can now be wrapped in connect() to access values from state and change values in state by sending actions 
    <Root>
        <App/>
    </Root>, document.querySelector('#root'))



