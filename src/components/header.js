const Header = () => (
    <header id="header" role="banner" class="pam">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"/>
        <nav class="nav has-shadow" id="top">
            <div class="container">
                <div class="nav-left">
                    <a class="nav-item" href="./index.html">
                        Front app
                    </a>
                </div>
                <span class="nav-toggle">
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
                <div class="nav-right nav-menu">
                    <a class={window.location.pathname === '/' ? 'nav-item is-tab is-active' : 'nav-item is-tab'}>
                        Accueil
                    </a>
                    <a class="nav-item is-tab">
                        À propos
                    </a>
                </div>
            </div>
        </nav>
    </header>
);

export default Header;