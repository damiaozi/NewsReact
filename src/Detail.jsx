//组件
import React,{ Component } from 'react' //es6
import {render} from 'react-dom'
import MessageItem from './MessageItem.jsx'
import {get} from './request.js'
let type = 0;
export default class Detail extends Component{
    constructor(props,context){
        super(props);
        this.state={
            loadding:true,
            error:null,
            data:null
        }
    }
  

    componentDidMount(){
        var _this = this;
        var nid = this.props.location.query.nid;
        console.log(nid);
        //获取新闻列表数据
        getDetailData(nid,function(jsondata,error){
           if (error) {
                console.log(error);
                _this.setState({loadding:false,error:error}); 
            }else{
                console.log(jsondata);
                _this.setState({loadding:false,data:jsondata}); 
            }
        }); 
        
    }

	render(){
        if (this.state.loadding) {
            return <span>Loadding...</span>;
        }else if (this.state.error !==null) {
            return <span>Error:{this.state.error.message}</span>;
        }else{
           
            var data = this.state.data;
            var oNews = data.data.news[0];
            
            var aContent = oNews.content;
           

            var contentList = aContent.map((repo,index)=>{
                // console.log(repo);
             
                let type = repo.type;
                if (type == 'image') {
                    //图片
                    let imgUrl = repo.data.original.url;
                }else if(type == 'text'){
                    //文本类型
                    
                }
             return(<MessageItem key={index} type={type} data={repo} />);  
            });
            // console.log(repoList);
            return (
                <div>
                   {contentList}
                   {this.props.children}
                </div>
            );
        }
		
	}
}


function getDetailData(nids,callback){

    var baiduId ='7C35091F8552AFD19AA4A03D0828F99B%3AFG%3D1';
    var buss='';
    var display_Time = 0;
    // var nids = '3409260327877268760';
    var _wf =1;
    var params = {
        mid:baiduId,
        cuid:'',
        bduss:buss,
        ln:20,
        wf:_wf,
        action:display_Time===0?1:0,
        down:0,
        display_time:display_Time,
        withtoppic:1,
        baiduid:baiduId,
        orientation:1,
        from:'news_webapp',
        pd:'webapp',
        os:'iphone',
        nids:nids,
        remote_device_type:1,
        os_type:2,
        screen_size_width:window.innerWidth,
        screen_size_height:window.innerWidth
    }
    var url ='./news?tn=bdapibaiyue&t=recommendinfo';
    get(url,params,callback);
  
}