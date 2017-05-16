import React from 'react'
import {
	render
} from 'react-dom'
import {
	Link,
	Route,
	BrowserRouter as Router
} from 'react-router-dom'


import MessageList from './MessageList.jsx'
import App from './App.jsx'
import ImgList from './ImgList.jsx'

// render(<App />, document.getElementById('root'));

render((
		<Router>
          <div>
	         <Route exact path="/" component={App}/>
	         <Route path="/detail" component={ImgList} />
          </div>
        </Router>
	),
	document.getElementById('root')
);