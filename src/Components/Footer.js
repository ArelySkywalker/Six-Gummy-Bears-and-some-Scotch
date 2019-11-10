import React, { Component } from 'react';

class Footer extends Component {
	render() {
		return (
			<div className="Footer">
				<div className="container-wide">
					<div className="row">
						<div className="copyright col-md-6">
							<p>© 2019 Six Gummy Bears and some Scotch. All Rights Reserved.</p>
						</div>
						<div className="menu col-md-6">
							<ul>
								<li><a href="/about">About</a></li>
								<li><a href="/filters">Available Ingredients</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Footer;