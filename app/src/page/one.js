import React from 'react';
import Table from '../assembly/table'
import './one.css'
import aa from '../imge/download.svg'
import bb from '../imge/u28.png'
import dd from '../imge/u27.png'

class One extends React.Component{
	constructor(props){
	    super(props);
	    this.state={
			
	    }
	}
	render(){
	  return (
		<div className="one">
			<div className="cont-item">
				<div className='ls_one'>
					<span>历史收礼</span>
					<br/>
					<span>5500.00</span>
				</div>
				<div className='ls_two'>
					<span>历史收礼</span>
					<br/>
					<span>5500.00</span>
				</div>
				<div className='ls_three'>
					<span>历史收礼</span>
					<br/>
					<span>5500.00</span>
				</div>
				<div className='ls_four'>
					<span>历史收礼</span>
					<br/>
					<span>5500.00</span>
				</div>
				<div className='ls_yk_one'>
					<span>历史盈亏</span>
					<br/>
					<span>2948.00</span>
				</div>
				<div className='ls_yk_two'>>
					<span>本月盈亏</span>
					<br/>
					<span>2948.00</span>
				</div>
				<div style={{position:'absolute',top:'102px',left:'50%'}}><img src={bb}/></div>
				<div style={{position:'absolute',top:'212px',left:'50%'}}><img src={bb}/></div>
				<div style={{position:'absolute',top:'243px',left:'50%',width:'19px',height:'19px',marginLeft:'-9px'}}><img style={{width:'100%',height:'100%'}} src={aa}/></div>
			</div>
			<div className="o-table">
				<div style={{backgroundColor:'rgba(188, 188, 188, 1)',overflow: 'hidden'}}>
					<div className='ls_ph'>排行</div>
					<div className='ls_ph'>用户</div>
					<div className='ls_ph'>历史盈亏</div>
					<div className='ls_ph'>本月盈亏</div>
					<div className='ls_ph'>更多</div>
				</div>
				<Table arr={['1',' JAMES 刘 ','95685.00','4500.00']}/>
				<Table arr={['2',' JAMES 刘 ','95685.00','4500.00']}/>
				<Table arr={['3',' JAMES 刘 ','95685.00','4500.00']}/>
				<Table arr={['4',' JAMES 刘 ','95685.00','4500.00']}/>
				<Table arr={['5',' JAMES 刘 ','95685.00','4500.00']}/>
				<Table arr={['6',' JAMES 刘 ','95685.00','4500.00']}/>
				<Table arr={['7',' JAMES 刘 ','95685.00','4500.00']}/>
			</div>
		</div>
		);
	}
}

export default One;
