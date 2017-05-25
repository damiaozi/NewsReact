//组件
import React,{ Component } from 'react' //es6
import {render} from 'react-dom'
import MessageItem from './MessageItem.jsx'
import {get} from './request.js'
import Carousel from './components/Carousel.js'
import {hashHistory} from 'react-router' 
import HotScroll from './components/HotScroll.jsx'

let type = 0;
export default class MessageList extends Component{
    constructor(props,context){
        super(props);
        this.state={
            loadding:true,
            error:null,
            data:null
        }
    }

    //子组件调用方法，切换
    gotoDetail(nid){
        //传nid给详情页，
         hashHistory.push(`/detail?nid=${nid}`);   
        // console.log('MessageList-gotoDetail',nid);
        // //获取新闻详情接口数据
        // getDetailData(nid,function(data,error){
        //    if (error) {
        //         console.log('MessageList-gotoDetail',error);  
        //    }
        //    else{
        //         //获取到数据跳转到详情页面    
        //         console.log(data); 
        //         hashHistory.push(`/detail?nid=${nid}`);      
        //    }     
        // });
    }
  

    componentDidMount(){
        var _this = this;
        //获取新闻列表数据
        getChosenData(function(jsondata,error){
           if (error) {
                console.log(error);
                _this.setState({loadding:false,error:error}); 
            }else{
                // console.log(jsondata);
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
            // type = this.props.type;//数据决定
            var data = this.state.data;
            // console.log(data);
            //滚动条内容
            var aToppic = data.data.toppic;

            //顶部固定推荐信息
            var aTop = data.data.top;
               var topList = aTop.map((repo,index)=>{
                // console.log(repo);
                var aImgs = repo.imageurls;
                // console.log(aImgs.length);
                type = aImgs.length;
                if (aImgs.length >=3) {
                    type = 2;
                }
             return(<MessageItem key={index} type={type} data={repo} gotoDetail={this.gotoDetail}/>);  
            });
          
          //新闻列表信息
            var aNews = data.data.news;
            // console.log(aNews);
            var repoList = aNews.map((repo,index)=>{
                // console.log(repo);
                var aImgs = repo.imageurls;
                // console.log(aImgs.length);
                type = aImgs.length;
                if (aImgs.length >=3) {
                    type = 2;
                }
             return(<MessageItem key={index} type={type} data={repo} gotoDetail={this.gotoDetail}/>);  
            });
            // console.log(repoList);
            return (
                <div>
                    <div className="top-hide"></div>
                   <Carousel data={aToppic} /> 
                    <HotScroll />
                   {topList}
                   {repoList}
                   {this.props.children}
                </div>
            );
        }
		
	}
}


// const listUrl = '?tn=bdapibaiyue&t=newchosenlist&mid=7C35091F8552AFD19AA4A03D0828F99B%3AFG%3D1&cuid=&bduss=&ln=20&wf=0&action=1&down=0&display_time=0&withtoppic=1&baiduid=7C35091F8552AFD19AA4A03D0828F99B%3AFG%3D1&orientation=1&from=news_webapp&pd=webapp&os=iphone&nids=&remote_device_type=1&os_type=2&screen_size_width=375&screen_size_height=667';

function getChosenData(callback){
    var baiduId ='7C35091F8552AFD19AA4A03D0828F99B%3AFG%3D1';
    var buss='';
    var display_Time = 0;
    var params = {
        mid:baiduId,
        cuid:'',
        bduss:buss,
        ln:20,
        wf:0,
        action:display_Time===0?1:0,
        down:0,
        display_time:display_Time,
        withtoppic:1,
        baiduid:baiduId,
        orientation:1,
        from:'news_webapp',
        pd:'webapp',
        os:'iphone',
        nids:'',
        remote_device_type:1,
        os_type:2,
        screen_size_width:window.innerWidth,
        screen_size_height:window.innerWidth
    }
    var url ='./news?tn=bdapibaiyue&t=newchosenlist';
    get(url,params,callback);
  
}


const detailUrl ='https://m.news.baidu.com/news?tn=bdapibaiyue&t=recommendinfo&baiduid=7C35091F8552AFD19AA4A03D0828F99B%3AFG%3D1&cuid=&bduss=&nids=3409260327877268760&wf=1&remote_device_type=1&os_type=2&screen_size_width=375&screen_size_height=667';

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


// 百家新闻列表
function getBaiJiaData(callback){
    var baiduId ='7C35091F8552AFD19AA4A03D0828F99B%3AFG%3D1';
    var buss='';
    var display_Time = 0;
    var params = {
        mid:baiduId,
        cuid:'',
        bduss:buss,
        ln:20,
        wf:0,
        action:display_Time===0?1:0,
        down:0,
        display_time:display_Time,
        withtoppic:1,
        baiduid:baiduId,
        orientation:1,
        from:'news_webapp',
        pd:'webapp',
        os:'iphone',
        nids:'',
        remote_device_type:1,
        os_type:2,
        screen_size_width:window.innerWidth,
        screen_size_height:window.innerWidth
    }
    var url ='./news?tn=bdapibaiyue&t=getbaijialist';
    get(url,params,callback);
  
}