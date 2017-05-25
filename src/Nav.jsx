//组件
import React,{ Component } from 'react' //es6
import {render} from 'react-dom'

import {Link} from 'react-router' 

let aNavJson = [{url:'/newslist/chosen',name:'推荐'}, 
                      {url:'/newslist/baijia',name:'百家'}, 
                      {url:'/newslist/local',name:'本地'}, 
                      {url:'/newslist/imgs',name:'图片'}, 
                      {url:'/newslist/info',name:'娱乐'}
                     ]
export default class Nav extends Component{
    constructor(props,context){
        super(props);
        this.state={
            selIndex:0,
         
        }
        
    }

    handleClick(index){
         // console.log(this)
        console.log(index)
        this.setState({selIndex:index})
   } 

    render() {
      var _this = this;
        var navList = aNavJson.map(function(json,index){
          
            return( <li key={index} className={_this.state.selIndex==index?"selected":""}  onClick={_this.handleClick.bind(_this,index)}><Link className="link" to={json.url} >{json.name}</Link></li>)
        })
        return ( 
            <div className="nav">
                <div className="nav-header">
                     <div className="header-container">
                        <a href="https://m.baidu.com" className="baidu-icon"></a>
                        <a href="Javascript:;" className="profile-icon"></a>
                        <a href="Javascript:;" className="subscribe-icon"></a>
                        <a href="Javascript:;" className="search-icon"></a>
                     </div>
                </div>
                <ul className="nav-menu">
                    {navList}
                </ul>
            </div>

            )
    }


}


