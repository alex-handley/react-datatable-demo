"use strict";

var React = require("react/addons");
var ReactTransitionGroup = React.addons.TransitionGroup;

require("normalize.css");

var ReactDatatable = React.createClass({
 	getInitialState: function(){
 		return { data: [] };
 	},
 	loadData: function(){
 		$.ajax({
 			url: "users.json",
 			success: function(data){
 				this.setState({data: data});
 			}.bind(this)
 		});
 	},
 	componentWillMount: function(){
 		this.loadData();
 	},
 	componentDidUpdate: function(){
		console.log("componentDidUpdate");

		$("#users-table").DataTable({
		  "bAutoWidth": false,
			"bDestroy": true,
			"paging": false
		});
 	},
 	render: function(){
		var table_body = [];

		this.state.data.forEach(function(d, index) {
			table_body.push(<tr key={index}>
												<td>{d.title}</td>
												<td>{d.first_name}</td>
												<td>{d.last_name}</td>
											</tr>);
		});

		return (
			<div className="table-responsive">
				<h4>React Datatables Demo</h4>
				<table id="users-table" className="display" width="100%">
					<thead>
						<tr>
							<th>Title</th>
							<th>First Name</th>
							<th>Last Name</th>
						</tr>
					</thead>

					<tbody>
						{table_body}
					</tbody>
				</table>
			</div>
		);
 	}
 });

module.exports = ReactDatatable;

