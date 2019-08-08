import React, { Component } from 'react';

const str = window.location.href;

var base = new String(str).substring(str.lastIndexOf('/') + 1); 
if(base.lastIndexOf(".") !== -1) {
	base = base.substring(0, base.lastIndexOf("."));
}

class Banner extends Component {
	render() {
		return (
			<div className={ `Banner ${ this.props.id ? `drink-` + this.props.id : base }` } >
				<div className="Banner-bg" style={ { backgroundImage: `url(${ this.props.image })` } }>
					<h1 className="Banner-title">{ this.props.name ? this.props.name : base }</h1>
				</div>
			</div>
		);
	}
}

export default Banner;