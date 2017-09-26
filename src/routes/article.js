import {h, Component} from 'preact';

export default class Article extends Component {

    constructor(host) {
        super();
        this.state = {
            article: {}
        };
        // Fetching article from api
        this.fetchArticleBySlug(host.slug);
    }

    fetchArticleBySlug(slug) {
        fetch('http://localhost:8888/api/articles/' + slug).then((response) => {
            const contentType = response.headers.get('content-type');
            if (contentType && contentType.indexOf('application/json') !== -1) {
                return response.json().then((json) => {
                    this.setState({article: json});
                }, this);
            } else {
                console.log('Oops, not JSON!');
            }
        });
    }

    render({}, {article}) {
        return (
            <div>
                <div class="columns">
                    <div class="column is-6">
                        <div class="image is-2by2">
                            <img src="https://placehold.it/1000x1000"/>
                        </div>
                    </div>
                    <div class="column is-5 is-offset-1">
                        <div class="title is-2">{article.title}</div>
                        <p class="title is-3 has-text-muted">$ 39.95</p>
                        <hr/>
                        <br/>
                        <p class="">
                            <i class="fa fa-star title is-5" style="color:#ed6c63"></i>
                            <i class="fa fa-star title is-5" style="color:#ed6c63"></i>
                            <i class="fa fa-star title is-5" style="color:#ed6c63"></i>
                            <i class="fa fa-star title is-5"></i>
                            <i class="fa fa-star title is-5"></i>
                            &nbsp; &nbsp;
                            <strong>41 Avis</strong>
                            &nbsp; &nbsp;
                            <a href="#">Voir</a>
                        </p>
                        <br/>
                        <p>{article.description}</p>
                    </div>
                </div>

                <div class="section">
                    <div class="container">
                        <div class="tabs">
                            <ul>
                                <li class="is-active"><a>Overview</a></li>
                                <li><a>Details</a></li>
                                <li><a>Reviews</a></li>
                            </ul>
                        </div>
                        <div class="box">
                            <p>
                                {article.content}
                            </p>
                            <br/>
                            <p>

                                Sed at risus enim. Nunc aliquet tellus a purus blandit lobortis. Duis condimentum sapien
                                sed orci ornare mollis. Praesent eleifend ante magna, quis commodo risus pellentesque
                                in. Donec eget porta leo. Sed vel dictum est. Ut dui lorem, volutpat vel risus in,
                                dictum euismod ex. Aenean laoreet dapibus nulla, nec viverra massa feugiat vitae.
                                Vestibulum elementum nec nisi dictum rhoncus. Nam placerat mi eu tortor tincidunt
                                commodo. Duis posuere, sapien a laoreet dapibus, elit tortor laoreet est, eget dapibus
                                dui justo vitae ipsum. Praesent sed augue nec leo hendrerit iaculis sit amet efficitur
                                ante. Nunc ac maximus mauris. Sed luctus erat id elit tempor, a aliquam lacus sodales.
                            </p>
                            <br/>
                            <p>
                                Suspendisse sodales metus justo, ullamcorper iaculis purus interdum in. Sed ultricies enim
                                felis, in interdum urna malesuada a. Morbi id ligula vel leo elementum dignissim quis vel
                                purus. Donec iaculis, est ac maximus vestibulum, sapien mi lacinia urna, at laoreet felis
                                lectus nec urna. Fusce egestas, neque vitae blandit scelerisque, leo arcu pellentesque
                                risus, et volutpat neque nunc id massa. Aenean dapibus leo vel purus malesuada, eu ultrices
                                nulla consequat. Duis erat orci, lobortis sed dictum id, pretium a nibh. Mauris pharetra
                                ligula consequat gravida ornare.
                            </p>
                            <br/>
                            <p>
                                Sed a gravida sapien. Nam malesuada feugiat nunc, eu varius risus suscipit non. Nulla vitae
                                odio fermentum, varius ligula et, iaculis enim. Mauris tempor in dolor non aliquet.
                                Pellentesque ac mauris a augue tempus pharetra. Nulla facilisi. Vivamus sit amet lacus
                                sagittis, ullamcorper nisi sit amet, consequat eros. Sed faucibus nulla vitae erat tristique
                                ornare.
                            </p>
                            <br/>
                            <p>
                                Nullam sit amet magna ipsum. In tincidunt tincidunt tellus. Duis maximus vulputate elit
                                sit amet auctor. Vestibulum a nunc consectetur, accumsan arcu eu, dapibus est. Class
                                aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                                Donec vitae massa eget nulla gravida porta eu et sem. Sed in lorem id lectus auctor
                                lobortis sed vel libero. Nam dapibus risus eu sodales consectetur. Fusce luctus
                                sollicitudin ante et sodales. Curabitur eget justo turpis. Vestibulum vel nunc tellus.
                                Morbi accumsan urna nibh, at malesuada odio faucibus accumsan.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
