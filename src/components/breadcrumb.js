
const Breadcrumb = () => (
    <div class="section product-header">
        <div class="container">
            <div class="columns">
                <div class="column">
                    <span class="title is-3">{ window.location.pathname === '/' ? 'Accueil' : <a href="/">Retour</a>}</span>
                    <span class="title is-3 has-text-muted">&nbsp;|&nbsp;</span>
                    <span class="title is-4 has-text-muted">Tenez-vous informé ! <a href="#">Abonnez-vous</a> à ma Newsletter</span>
                </div>
            </div>
        </div>
    </div>
);

export default Breadcrumb;