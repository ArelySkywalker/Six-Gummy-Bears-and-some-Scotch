import React, { Component } from 'react';

const str = window.location.href;
var base = new String(str).substring(str.lastIndexOf('/') + 1); 
if(base.lastIndexOf(".") !== -1) {
	base = base.substring(0, base.lastIndexOf("."));
}

class Banner extends Component {
	render() {
		return (
			<div className={ `Banner ${ base }` }>
				<div className="Banner-bg">
					<h1 className="Banner-title">{ base }</h1>
				</div>
			</div>
		);
	}
}

export default Banner;