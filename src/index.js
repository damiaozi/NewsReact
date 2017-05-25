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
import Detail from './Detail.jsx'

// render(<App />, document.getElementById('root'));
let routes = <div>
	         <Route path="/" component={App}>
				 <IndexRoute component={MessageList}/>
				 <Route path="/newslist/:id" component={MessageList} />

	         </Route>
	         <Route path="/detail" component={Detail} />
          </div>

render(<Router history={hashHistory} routes={routes}>
	</Router>,
	document.getElementById('root')
);


// let routes = <div>
// 	         <Route path="/" component={App}>
// 				 <IndexRoute component={MessageList}/>
// 				 <Route path="/newslist/chosen/:id" component={MessageList} />
//                  <Route path="/newslist/baijia/:id" component={MessageList} />
//                  <Route path="/newslist/local/:id" component={MessageList} />
//                  <Route path="/newslist/imgs/:id" component={MessageList} />
//                  <Route path="/newslist/info/:id" component={MessageList} />

// 	         </Route>
// 	         <Route path="/detail" component={Detail} />
//           </div>