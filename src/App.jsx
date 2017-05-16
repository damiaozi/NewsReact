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
                 <Route path="/baijia" component={ImgList} />
                 <Route path="/local" component={ImgList} />
                 <Route path="/imgs" component={ImgList} />
                 <Route path="/info" component={ImgList} />
          </div>
        </Router>
        )
    }
}


