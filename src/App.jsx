//组件
import React,{ Component } from 'react' //es6
import {render} from 'react-dom'

 import {Link,Route,BrowserRouter as Router} from 'react-router-dom' 

import MessageList from './MessageList.jsx'
import Nav from './Nav.jsx'
import ImgList from './ImgList.jsx'
export default class App extends Component{


    render() {
        return ( <Router>
          <div>
                <Nav />
                <hr/>
                 <Route exact path="/" component={MessageList}/>
                 <Route path="/baijia" component={MessageList} />
                 <Route path="/imgs" component={ImgList} />
          </div>
        </Router>
        )
    }
}


