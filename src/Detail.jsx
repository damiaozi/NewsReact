//组件
import React,{ Component } from 'react' //es6
import {render} from 'react-dom'
import MessageItem from './MessageItem.jsx'
import {get} from './request.js'
import HotScroll from './components/HotScroll.jsx'
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
                // console.log(jsondata);
                _this.setState({loadding:false,data:jsondata}); 
            }
        }); 
        
    }

	render(){
        console.log('detail','render')
        if (this.state.loadding) {
            return <span>Loadding...</span>;
        }else if (this.state.error !==null) {
            return <span>Error:{this.state.error.message}</span>;
        }else{
           
            var data = this.state.data;
            // console.log('data',data);
              // console.log('aNews',data.data.news);
            var aNews = data.data.news
            if (!aNews) {
                 // console.log('return','null');
                return null
            }
          
           let tittle =  <div className="detail-header">
            <div className="tittle">{aNews[0].title}</div>
            <div className="bottom"><b className="tip-type">{aNews[0].site}</b><b className="tip-time">{aNews[0].ts}</b>
            </div>
            </div>  

            var aContent = aNews[0].content;
            var contentList = aContent.map((repo,index)=>{
                // console.log(repo);
             
                let type = repo.type;
                var contentItem = <div></div>
                if (type == 'image') {
                    //图片
                    let imgUrl = repo.data.original.url;
                    contentItem = <div key={index} className="conItem">
                    <img src={imgUrl} />
                    </div>
                }else if(type == 'text'){
                    //文本类型
                    contentItem = <div key={index} className="conItem">
                    <p>{repo.data}</p>
                    </div>
                }
             return contentItem;  
            });
            // console.log(repoList);
            return (
                <div className="deatil-wrap">
                    <HotScroll />
                    <div className="detail-container">
                        {tittle}
                       {contentList}
                       {this.props.children}
                    </div>
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