<footer class="container-fluid">
    <div class="row justify-content-center">
        <div class="col-md-10">
            <div class="row justify-content-center">
                <div class="col text-center footer-div">
                    <a class="footer-nav-link{{ (Request::is('/') ? ' active' : '') }}" href="{{ url('/') }}">
                        <i class="fas fa-home"></i>
                        <div class="footer-nav-text">HOME</div>
                    </a>
                </div>

                <div class="col text-center footer-div">
                    <a class="footer-nav-link" href="{{ url('/') }}">
                        <i class="fas fa-book-open"></i>
                        <div class="footer-nav-text">CARDÁPIO</div>
                    </a>
                </div>

                <div class="col text-center footer-div">
                    <a class="footer-nav-link" href="{{ url('/') }}">
                        <i class="fas fa-user-circle"></i>
                        <div class="footer-nav-text">CONTA</div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</footer>