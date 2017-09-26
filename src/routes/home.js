import {Component} from 'preact';
import ArticleBox from "../components/articleBox";
import {Link} from 'preact-router/match';

export default class Home extends Component {

	constructor() {
        super();
        this.state = {
        	articles: []
		};
        // Fetching articles from api
        this.fetchArticles();

        // let packery = new Packery('.card', {
         //    itemSelector: '.card',
		// });
	}

	fetchArticles() {
	    fetch('http://localhost:8888/api/articles').then((response) => {
            const contentType = response.headers.get("content-type");
            if(contentType && contentType.indexOf("application/json") !== -1) {
                return response.json().then((json) => {
                    this.setState({articles: json});
                }, this);
            } else {
                console.log("Oops, not JSON!");
            }
		});
	}

	render({}, {articles}) {
		return (
			<div>
				{articles.map(article => <Link href={'/articles/' + article.slug}><ArticleBox article={article} /></Link>)}
			</div>
		)
	}
}
