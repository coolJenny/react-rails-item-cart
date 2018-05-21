import React from 'react';
import ReactDom from 'react-dom';

class NewItem extends React.Component  {

	handleClick(){
		var name = this.refs.name.value;
		var description = this.refs.description.value;

		$.ajax({
			url: "api/v1/items",
			type: "POST",
			data: { item: {name: name, description: description} },
			success: (item) => {
				this.props.handleSubmit(item);
			}
		});

	}

	render(){
		return(
			<div>
				<input ref='name' placeholder='Enter the name of the item' />
				<input ref='description' placeholder='Enter a description of the item' />
				<button onClick={this.handleClick}>Create a New Item</button>
			</div>
		)
	}
}

export default NewItem;