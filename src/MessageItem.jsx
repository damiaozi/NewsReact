//组件
import React,{ Component } from 'react' //es6
import {render} from 'react-dom'

let type = 0;
export default class MessageItem extends Component{
 

    componentDidMount(){
        
    }
    
     handleClick(sNid){
        // console.log('MessageItem-Click',sNid);
        //调用父组件的方法，去做界面跳转
        this.props.gotoDetail(sNid);
    }
	render(){

        // if (this.state.loadding) {
        //     return <span>Loadding...</span>;
        // }else if (this.state.error !==null) {
        //     return <span>Error:{this.state.error.message}</span>;
        // }else{
            type = this.props.type;
            var data = this.props.data;
            return (
                <div onClick={this.handleClick.bind(this,data.nid)}>
                {
                    type==0 ? <MessageItem0 data={data} /> : 
                    type==1 ? <MessageItem1 data={data} /> : 
                    <MessageItem2 data={data}/>
                }
                </div>
            );
        // }
		
	}
}




class MessageItem0 extends Component{
    ComponentWillReceiveProps(newProps){
        // console.log(newProps);
    }
  render() {
    var data = this.props.data;
    return <div className="item-container">
    	<div className="list-main">
    		<div className="tittle">{data.title}</div>
    		<div className="list-bottom"><b className="tip-time">{data.pulltime}</b><b className="tip-type">{data.site}</b></div>
    	</div>	
    	
    </div>;
  }
}

class MessageItem1 extends Component{
  render() {
    var data = this.props.data;
    var imgurl = data.imageurls[0].url;
    // console.log(imgurl);
    return <div className="item-container">
    	<div className="list-img">
    		<img src={imgurl} />
    	</div>
    	<div className="list-main">
    		<div className="tittle">{data.title}</div>
    		<div className="list-bottom"><b className="tip-time">1小时前</b><b className="tip-type">{data.site}</b></div>
    	</div>
    	
    </div>;
  }
}

class MessageItem2 extends Component{
  render() {
    var data = this.props.data;
    return <div className="item-container">
    	<div className="list-main">
    		<div className="tittle">{data.title}</div>
    		<div className="list-imgs">
    			<div className="list-img-wrap">
    			<img src={data.imageurls[0].url}/>
    			</div>
    				<div className="list-img-wrap">
    			<img src={data.imageurls[1].url}/>
    			</div>
    				<div className="list-img-wrap">  
    			<img src={data.imageurls[2].url}/>
    			</div>
    		</div>
    		<div className="list-bottom"><b className="tip-time">1天前</b><b className="tip-type">{data.site}</b></div>
    	</div>
    	
    </div>;
  }
}