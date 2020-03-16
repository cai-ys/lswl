import React from 'react';
import './table.css'
class Table extends React.Component{
	constructor(props){
	    super(props);
	    this.state={
			arr:this.props.arr
	    }
	}
	render(){
	  return (
		<div style={{borderBottom:'1px rgba(228, 228, 228, 1) solid',overflow: 'hidden'}}>
			<div className='xs'>{this.state.arr[0]}</div>
			<div className='xs'>{this.state.arr[1]}</div>
			<div className='xs'>{this.state.arr[2]}</div>
			<div className='xs'>{this.state.arr[3]}</div>
			<div className='xs'>{this.state.arr[4]}</div>
		</div>
  );
	}
}

export default Table;
