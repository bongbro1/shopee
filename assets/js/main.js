//form login
var formLogin = document.querySelector('.login-js')
var btnLogin = document.querySelector('.btn_Login-js');
btnLogin.addEventListener('click', function (){
    formLogin.classList.add('open');
})

var closeFormLogins = document.querySelectorAll('.closeFormLogin-js');
for (var e of closeFormLogins) {
    e.addEventListener('click', function (){
        formLogin.classList.remove('open');
    })
}
var containerFormLogin = document.querySelector('.container');
containerFormLogin.addEventListener('click', function(e) {
    e.stopPropagation();
})

