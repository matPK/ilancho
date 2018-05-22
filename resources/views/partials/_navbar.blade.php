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
            <li class="nav-item">
                <a class="nav-link" href="{{ url('/') }}">Home</a>
            </li>
            @guest
                <li>
                    <a class="nav-link" href="{{ route('login') }}">{{ __('Login') }}</a>
                </li>
            @else
                <li class="nav-item dropdown">
                    <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                        {{ Auth::user()->name }} <span class="caret"></span>
                    </a>

                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="{{ route('logout') }}"
                           onclick="event.preventDefault();
                                         document.getElementById('logout-form').submit();">
                            {{ __('Logout') }}
                        </a>

                        <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                            @csrf
                        </form>
                    </div>
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