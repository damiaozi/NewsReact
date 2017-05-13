//组件
import React,{ Component } from 'react' //es6
import {render} from 'react-dom'

let msg = 'hello baidu'

let style = {
	backgroundColor:'red',
	fontSize:'22px'
}

const names =['JS','PHP','JAVA'];

const val = 0;
//定义，并保留出去
export default class HelloMsg extends Component {
	render(){
		//这里是租售
		return (
			//这里是注释
			//jsx不能写if else 只能用三目
			<div className={val?'demo':'test'} style={style} onClick={this.handleClick.bind(this,'clickhello')}>
				{/* 这里是注释 */}
				<div ref="message">{msg}</div>
				{
					val ? <p>hello jsx</p> :<p>hellov react</p>
				}

				<div className={this.getClassName()}></div>
				{Boolean(val) && <p>我是与运算符</p>}
				<input onChange={this.handleOnchange.bind(this)}/>
				{
					names.map((item,index) => {
						return <span key={index}>hello,{item}!</span>
					})
				}
			</div>
			)
	}

	getClassName(){
		return val?'demo':'test';
	}

	handleClick(params,ev){
		//this作用域指向当前组件
		// console.log(this);//null 没有this现在
		// console.log(ev.target);//获取事件源
		// alert(params);
		console.log(this.refs.message);
	}

	handleOnchange(ev){
		//打印input输入的值
		console.log(ev.target.value);
	}
}