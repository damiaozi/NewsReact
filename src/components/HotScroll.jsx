//组件
import React,{ Component } from 'react' //es6
import {render} from 'react-dom'
import {get} from '../request.js'
  let timer;
export default class HotScroll extends Component{
	constructor(props,context){
        super(props);
        this.state={
            loadding:true,
            error:null,
            data:null,
            sTop:0
        }

    }

     componentDidMount(){
        var _this = this;
        //获取热点新闻数据
        getHotWordData(function(jsondata,error){
           if (error) {
                // console.log(error);
                _this.setState({loadding:false,error:error}); 
            }else{
                // console.log(jsondata);
                _this.setState({loadding:false,data:jsondata}); 
                let len = jsondata.data.length;

                timer=setInterval(function(){
                    let _sTop = _this.state.sTop -18;
                     // console.log(len*18)
                    if (_sTop <= -len*18) {
                        _sTop = 0;
                        
                    }
                    _this.setState({sTop:_sTop})
                },2000)
            }
        }); 
    }

    render(){
        if (this.state.loadding) {
            return <span>Loadding...</span>;
        }else if (this.state.error !==null) {
            return <span>Error:{this.state.error.message}</span>;
        }else{
        	// var data = this.state.data;
        	// var aNews = data.data.news;
          
            var aNews = this.state.data.data;
              // console.log('hot',aNews);
		    var hotList = aNews.map((repo,index)=>{
        		 return(<li key={index} >
        		 	<p>{repo.title}</p></li>)
        	});
        // console.log('hot',hotList);
        	return(
				<div className="hot-scroll">
					<div className="hot-info"><span>
						热点
					</span></div>	
					
                     <ul style={{top:this.state.sTop}}>
                        {hotList}
                    </ul>
                   
                   
				</div>
        		)

        }
    } 

    componentWillUnmount(){
        //停止定时器
        console.log('componentWillUnmount')
        clearInterval(timer)
    }   
}

     function getHotWordData(callback){ 
            var params = {
                // wf:0     
                v:  'hot_word',
                 type:0
            }
            // var url ='./news?tn=bdapibaiyue&t=hotwordnews';
             var url ='./news?tn=bdapipchot&m=rddata';
            get(url,params,callback);
        }

        // https://m.news.baidu.com/news?tn=bdapipchot&m=rddata&v=hot_word&type=0