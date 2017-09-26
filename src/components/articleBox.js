
const ArticleBox = ({article}) => (
    <div class="card">
        <div class="card-content columns">
            <div class="column auto">
                <img src="https://placehold.it/200x200"/>
            </div>
            <div class="column is-three-quarters">
                <p class="title">{article.title}</p>
                <p class="subtitle">{article.description}</p>
            </div>
        </div>
    </div>
);

export default ArticleBox;
