import {Component} from 'preact';
import ArticleBox from "../components/articleBox";
import {Link} from 'preact-router/match';
import Helmet from "preact-helmet";

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
        const hostApi = 'http://58cd6c5487.url-de-test.ws/api';
	    fetch(hostApi + '/articles').then((response) => {
            const contentType = response.headers.get('content-type');
            if(contentType && contentType.indexOf('application/json') !== -1) {
                return response.json().then((json) => {
                    this.setState({articles: json});
                }, this);
            } else {
                console.log('Oops, not JSON!');
            }
		});
	}

	render({}, {articles}) {
		return (
			<div>
				<Helmet
					htmlAttributes={{lang: "fr", amp: undefined}} // amp takes no value
                    title="ZenZentai"
					defaultTitle="ZenZentai"
					meta={[
                        {name: "description", content: "zentai, costume entier, full body suite, deguisement"},
                        {property: "og:type", content: "article"}
                    ]}
                    link={[{rel: "canonical", href: "http://www.zenzentai.com/"}]}
				/>
				{articles.map(article => <Link href={'/articles/' + article.slug}><ArticleBox article={article} /></Link>)}
			</div>
		)
	}
}
