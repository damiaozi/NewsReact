//组件
import React,{ Component } from 'react' //es6
import {render} from 'react-dom'
import MessageItem from './MessageItem.jsx'

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
  

    componentDidMount(){
        var _this = this;
        //获取数据
        fetch('./newsList.json').then(function (response) {
          return response.json();
        }).then(function (jsonData) {
          // console.log(jsonData);
           _this.setState({loadding:false,data:jsonData}); 
        }).catch(function () {
           console.log('error');
            _this.setState({loadding:false,error:error}); 
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
            console.log(data);
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
             return(<MessageItem key={index} type={type} data={repo} />);  
            });
            console.log(repoList);
            return (
                <div>
                   {repoList}
                </div>
            );
        }
		
	}
}


