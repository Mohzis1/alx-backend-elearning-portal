<img src="{{ asset('/images/afchub_logo_w200.png') }}">

<p>
    Hello {{ $name }}.<br><br>

    Thank you for completing your BRACE application.<br>
    However, we have noticed you haven't attempted any course on our portal yet.<br><br>

    Please login to your account <a href="{{ route('learning.login') }}">here</a> or use our password reset <a href="{{ route('learning.password.reset') }}">here</a> to get a new password.
    <br><br>

    Are you a member of the African Food Changemakers Hub?<br>
    if not, <a class="na-text-dark-green" href="https://afchub.org">Become a member</a>
</p>
