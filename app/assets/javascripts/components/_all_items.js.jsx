var AllItems = React.createClass({
	// getInitialState(){
	// 	return { items: [] }
	// },

	// componentDidMount(){
	// 	$.getJSON('/api/v1/items.json', (response) => { this.setState({ items: response }) });
	// },

	handleDelete(id){
		this.props.handleDelete(id);
	},

	handleEdit(){

	},

	onUpdate(item){
		this.props.onUpdate(item);
	},

	render(){
		var items = this.props.items.map((item) => {
			return (
				<div key={item.id}>
					<Item item={item} 
							handleDelete={this.handleDelete.bind(this, item.id)}
							handleUpdate={this.onUpdate} />
					// <h3>{item.name}</h3>
					// <p>{item.description}</p>
					// <button onClick={this.handleEdit()}>Edit</button>
					// <button onClick={this.handleDelete.bind(this, item.id)}>Delete</button>
				</div>
			);
		});

		return <div>{items}</div>;
	}
});