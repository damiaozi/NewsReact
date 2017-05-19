import React from 'react'
import {
	render
} from 'react-dom'
import {
	Router,
	Route,
	hashHistory,
	IndexRoute
} from 'react-router'


import MessageList from './MessageList.jsx'
import App from './App.jsx'
import ImgList from './ImgList.jsx'

// render(<App />, document.getElementById('root'));
let routes = <div>
	         <Route path="/" component={App}>
				 <IndexRoute component={MessageList}/>
				 <Route path="/newslist/chosen" component={MessageList} />
                 <Route path="/newslist/baijia" component={ImgList} />
                 <Route path="/newslist/local" component={ImgList} />
                 <Route path="/newslist/imgs" component={ImgList} />
                 <Route path="/newslist/info" component={ImgList} />

	         </Route>
	         <Route path="/detail" component={ImgList} />
          </div>

render(<Router history={hashHistory} routes={routes}>
	</Router>,
	document.getElementById('root')
);