import {Component} from 'preact';
import {Router} from 'preact-router';
import Header from './header';
import Breadcrumb from './breadcrumb';
import Footer from './footer';
import Home from '../routes/home';
import Article from '../routes/article';

export default class App extends Component {
	constructor() {
		super();
		this.state = {
            currentUrl: null,
		};
	}
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = event => {
		// bugfix on position on page change
        document.body.scrollTop = 0;
        // I don't remember why
        this.setState({currentUrl: event.url});
	};

	render() {
		return (
			<div id="app">
				<Header />
				<Breadcrumb />
				<section class="section">
					<div class="container content">
						<main id="main" role="main" class="flex-item-fluid pam">
							<Router onChange={this.handleRoute}>
				 				<Home path="/" />
								<Article path="/articles/:slug" />
							</Router>
						</main>
					</div>
				</section>
				<Footer />
			</div>
		);
	}
}
