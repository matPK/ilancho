<nav id="top-navbar" class="navbar navbar-light fixed-top">

    <a class="navbar-brand" href="{{ url('/') }}">
        <img id="navbarLogo" src="{{ asset('img/logo.png') }}" alt="{{ config('app.name', 'Laravel') }}">
    </a>

    <button
        id="navbar-toggle-button"
        class="navbar-toggler mt-auto mb-auto"
        type="button"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav mr-auto text-right">
            @guest
                <li class="nav-item">
                    <a class="nav-link{{ (Request::is('login') ? ' active' : '') }}"
                        href="{{ route('login') }}">
                        {{ __('Login') }}
                        <i class="fas fa-sign-in-alt"></i>
                    </a>
                </li>
            @else
                <li class="nav-item">
                    <a class="nav-link" href="{{ route('logout') }}"
                       onclick="event.preventDefault();
                                     document.getElementById('logout-form').submit();">
                        {{ __('Sair') }}
                        <i class="fas fa-sign-out-alt"></i>
                    </a>

                    <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                        @csrf
                    </form>
                </li>
            @endguest
        </ul>
    </div>
</nav>

<script>
$(document).ready(function() {
    $(this).click(function(e) {
        if (!$(e.target).is('.nav-link')) {
            $('#top-navbar .collapse').collapse('hide');    
        }
    });
});
</script>