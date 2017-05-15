import React from 'react'
import {
	render
} from 'react-dom'
import {
	BrowserRouter,
	Route
} from 'react-router-dom'

import MessageList from './MessageList.jsx'
import App from './App.jsx'
import ImgList from './ImgList.jsx'

render(<App />, document.getElementById('root'));

// render((
// 		<BrowserRouter>
// 		<div>
// 			<Route exact path="/" component={App}/>
// 			<Route path="/baijia" component={MessageList} />
// 			<Route path="/imgs" component={ImgList} />
// 		</div>
          
//      </BrowserRouter>
// 	),
// 	document.getElementById('root')
// );