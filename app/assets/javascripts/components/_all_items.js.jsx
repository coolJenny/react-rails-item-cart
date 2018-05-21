import React from 'react';
import ReactDom from 'react-dom';

class AllItems extends React.Component {

	handleDelete(id){
		this.props.handleDelete(id);
	}

	onUpdate(item){
		this.props.onUpdate(item);
	}

	render(){
		var items = this.props.items.map((item) => {
			return (
				<div key={item.id}>
					<Item item={item} 
							handleDelete={this.handleDelete.bind(this, item.id)}
							handleUpdate={this.onUpdate} />
				</div>
			)
		});

		return(
			<div>
				{items}
			</div>
		)
	}
}

export default AllItems;