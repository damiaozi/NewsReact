//组件
import React,{ Component } from 'react' //es6
import {render} from 'react-dom'


import MessageList from './MessageList.jsx'
import Nav from './Nav.jsx'
import ImgList from './ImgList.jsx'
export default class App extends Component{


    render() {
        return ( 
          <div>
                <Nav />
                <hr/>
                {this.props.children}
          </div>
       
        )
    }
}


