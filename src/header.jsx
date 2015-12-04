var React = require('react');

module.exports = React.createClass({
	getInitialState: function() {
		return {
			text: ''
		}
	},
	render: function() {
		return <div className="input-group">
			<input 
				type="text"
				value={ this.state.text }
				className="form-control"
				onChange={ this.handleChange } />
			<span className="input-group-btn">
				<button
					onClick={ this.handleClick }
					className="btn btn-default" 
					type="button">
					Add
				</button>
			</span>
		</div>
	},
	handleClick: function() {
		// send value of text input to firebase
		this.props.itemsStore.push({
			text: this.state.text,
			done: false
		});

		// reset input to empty
		this.setState({ text: ''});
	},
	handleChange: function() {
		this.setState({ text: event.target.value });
	}
});