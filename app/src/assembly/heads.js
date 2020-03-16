import React from 'react';
import './heads.css'
import {HashRouter,Route,Link,NavLink,Redirect,Switch } from 'react-router-dom'
import bb from '../imge/x.png'
import cc from '../imge/y.svg'
class Heads extends React.Component{
	constructor(props){
	    super(props);
	    this.state={
			index:0,
			path:this.props.path
	    }
	}
	render(){
		console.log(this.props.path)
	  return (
			<div className='head_cont'>
			<Link to={{pathname:this.state.path||'/one'}}><div style={{float:'left'}}><img style={{width:'12px'}} src={bb}/>,
				</div>
			</Link>
				{this.props.title?<div className='hd_cont'>
					<div className='header_bt'
					 onClick={()=>{this.setState({index:0});this.props.onChang(0)}} className={this.state.index==0?'active':''}>{this.props.title[0]},
					</div>
					<div className='header_bt' 
					onClick={()=>{this.setState({index:1});this.props.onChang(1)}} className={this.state.index==1?'active':''}>{this.props.title[1]},
					</div>
				</div>:'记礼事'}
				<div style={{float:'right'}}><Link to={{pathname:this.props.topath}}><img style={{width:'24px'}} src={cc}/></Link></div>
			</div>
		);
	}
}

export default Heads;
