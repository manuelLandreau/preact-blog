import {Component} from 'preact';
import Helmet from "preact-helmet";

export default class Article extends Component {

    constructor(host) {
        super();
        this.state = {
            article: {},
            overviewFlag: true,
            detailsFlag: false,
            imageSet: []
        };
        // Fetching article from api
        this.fetchArticleBySlug(host.slug);
    }

    fetchArticleBySlug(slug) {
        const hostApi = 'http://58cd6c5487.url-de-test.ws/api';
        fetch(hostApi + '/articles/' + slug).then((response) => {
            const contentType = response.headers.get('content-type');
            if (contentType && contentType.indexOf('application/json') !== -1) {
                return response.json().then((json) => {
                    this.setState({article: json});
                    let imageSetArray = json.imageSet.split('\n');
                    imageSetArray[0].replace('\n', '');
                    this.setState({
                        imageSet: imageSetArray
                    });
                    console.log(this.state.imageSet);
                }, this);
            } else {
                console.log('Oops, not JSON!');
            }
        });
    }

    handleTabs(e) {
        if (e.target.className === 'overview') {
            this.setState({
                overviewFlag: true,
                detailsFlag: false
            });
        } else if (e.target.className === 'details') {
            this.setState({
                overviewFlag: false,
                detailsFlag: true
            });
        }
    }

    render({}, {article, overviewFlag, detailsFlag}) {
        return (
            <div>
                <Helmet
                    title={"Zenzentai - " + article.title}
                    htmlAttributes={{lang: "fr", amp: undefined}} // amp takes no value
                    defaultTitle="ZenZentai"
                    meta={[
                        {name: "description", content: "zentai, costume entier, full body suite," + article.title},
                        {property: "og:type", content: "article"}
                    ]}
                    link={[
                        {rel: "canonical", href: "http://www.zenzentai.com/" + article.slug},
                        {rel: "stylesheet", type: "text/css",  href: "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"},
                    ]}
                />
                <div class="columns">
                    <div class="column is-6">
                        <div class="image is-2by2">
                            <img src={article.largeImageUrl}/>
                        </div>
                    </div>
                    <div class="column is-5 is-offset-1">
                        <div class="title is-2">{article.title}</div>
                        <p class="title is-3 has-text-muted">{article.price}</p>
                        <hr/>
                        <br/>
                        <p class="">
                            <i class="fa fa-star title is-5" style="color:#ed6c63"/>
                            <i class="fa fa-star title is-5" style="color:#ed6c63"/>
                            <i class="fa fa-star title is-5" style="color:#ed6c63"/>
                            <i class="fa fa-star title is-5"/>
                            <i class="fa fa-star title is-5"/>
                            &nbsp; &nbsp;
                            <strong>41 Avis</strong>
                            &nbsp; &nbsp;
                            <a href={article.amazonUrl}>Voir</a>
                        </p>
                        <br/>
                        <p>{article.description}</p>
                        <a href={article.amazonUrl} class="button is-warning">
                            <i class="fa fa-amazon" aria-hidden="true"/>&nbsp;&nbsp;Commander
                        </a>
                    </div>
                </div>

                <div class="section">
                    <div class="container">
                        <div class="tabs">
                            <ul>
                                <li class={overviewFlag ? 'is-active' : ''}>
                                    <a class="overview" onclick={this.handleTabs.bind(this)}>À propos</a>
                                </li>
                                <li class={detailsFlag ? 'is-active' : ''}>
                                    <a class="details" onclick={this.handleTabs.bind(this)}>Details</a>
                                </li>
                            </ul>
                        </div>
                        <div class="box" style={{display: overviewFlag ? 'block' : 'none'}}>
                            <p>{article.content}</p>
                        </div>
                        <div class="box" style={{display: detailsFlag ? 'block' : 'none'}}
                             dangerouslySetInnerHTML={{__html: article.details}}/>
                    </div>
                </div>
            </div>
        );
    }
}
