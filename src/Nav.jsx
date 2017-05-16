//组件
import React,{ Component } from 'react' //es6
import {render} from 'react-dom'

import {Link} from 'react-router-dom' 
export default class Nav extends Component{

   render() {
        return ( 
            <div className="nav">
            	<ul className="nav-menu">
            		<li><Link className="link" to='/'>主页</Link></li>
            		<li><Link className="link" to='/baijia'>百家</Link></li>
            		<li><Link className="link" to='/local'>本地</Link></li>
            		<li><Link className="link" to='/imgs'>图片</Link></li>
            		<li><Link className="link" to='/info'>娱乐</Link></li>
                    <li><Link className="link" to='/detail'>测试</Link></li>
            	</ul>
            </div>

            )
    }

}


