
const ArticleBox = ({article}) => (
    <div class="card">
        <div class="card-content columns">
            <div class="column auto">
                <img width="150" src={article.largeImageUrl}/>
            </div>
            <div class="column is-three-quarters">
                <p class="title">{article.title}</p>
                <p class="subtitle">{article.description}</p>
                <h4>{article.price}</h4>
            </div>
            <a class="button is-success" style={{'position': 'absolute', 'bottom': 30, 'right': 30}} href={article.slug}>Voir plus</a>
        </div>
    </div>
);

export default ArticleBox;
