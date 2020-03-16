import React from 'react';
import './four.css';
import Option from '../assembly/options'
import aa from '../imge/u895.svg'
import bb from '../imge/u889.svg'
import cc from '../imge/u102.png'
import dd from '../imge/u891.png'

class Four extends React.Component{
	constructor(props){
	    super(props);
	    this.state={
			
	    }
	}
	render(){
	  return (
		<div className="four">
			<div className="f-head">
				<div className='f-my'>我的</div>
				<div style={{float:"right",marginTop:"10px"}}>,
					<img style={{width:"31px"}} src={aa}/>,
				</div>
			</div>
			<div className='f-my-cont'>,
				<div style={{float:'left'}}>
					<div className='f-tx'><img src={bb}/></div>
					<span>调用QQ、微信昵称</span>
				</div>
				<div style={{float:'right'}}><img style={{width:'12px'}} src={dd}/></div>
			</div>
			<Option imge={cc} title="设置" />
			<Option imge={cc} title="反馈" />
			<Option imge={cc} title="帮助" />
			<Option imge={cc} title="关于" />
			<Option imge={cc} title="分享" />
		</div>
		);
	}
}

export default Four;
