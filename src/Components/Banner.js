import React, { Component } from 'react';

const str = window.location.href;
var path = require('path');
var base = path.basename(str);
var title;

if (base.indexOf("?")>-1){
	title = base.substr(0,base.indexOf("?"))
}else {
	title = base;
}

class Banner extends Component {
	render() {
		return (
			<div className={ `Banner ${ this.props.id ? `drink-` + this.props.id : title }` } >
				<div className="Banner-bg" style={ { backgroundImage: `url(${ this.props.image })` } }>
					<h1 className="Banner-title">{ this.props.name ? this.props.name : title }</h1>
				</div>
			</div>
		);
	}
}

export default Banner;