< !DOCTYPE html >
    <
    html lang = "en" >
    <
    head >
    <
    meta charset = "utf-8" >
    <
    meta name = "viewport"
content = "width=device-width, initial-scale=1" >
    <
    meta http - equiv = "Content-Type"
content = "text/html; charset=UTF-8" >
    <
    meta http - equiv = "X-UA-Compatible"
content = "IE=edge" >
    <
    meta name = "description"
content = "user registration website - registration process - coding academy by orange " >
    <
    meta name = "keywords"
content = "registration,coding,orange, laravel, learning" >
    <
    meta name = "author"
content = "Marya Alzubi" >
    <
    title > Login Page <
    /title> <
    link rel = "preload"
href = "https://amman.orangecodingacademy.com/assets/boosted/dist/fonts/HelvNeue55_W1G.woff2"
as = "font"
type = "font/woff2"
crossorigin = "anonymous" >
    <
    link rel = "preload"
href = "https://amman.orangecodingacademy.com/assets/boosted/dist/fonts/HelvNeue75_W1G.woff2"
as = "font"
type = "font/woff2"
crossorigin = "anonymous" >
    <
    link href = "https://amman.orangecodingacademy.com/assets/boosted/dist/css/orangeHelvetica.min.css"
rel = "stylesheet" >
    <
    link href = "https://amman.orangecodingacademy.com/assets/boosted/dist/css/orangeIcons.min.css"
rel = "stylesheet" >
    <
    link href = "https://amman.orangecodingacademy.com/assets/boosted/dist/css/boosted.min.css"
rel = "stylesheet" / >
    <
    link href = "https://amman.orangecodingacademy.com/assets/css/client.css"
rel = "stylesheet" >
    <
    link rel = "preconnect"
href = "https://code.jquery.com"
crossorigin = "anonymous" >
    <
    link rel = "preconnect"
href = "https://cdnjs.cloudflare.com"
crossorigin = "anonymous" >
    <
    link rel = "stylesheet"
href = "https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
integrity = "sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
crossorigin = "anonymous" / >
    <
    script src = "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js" > < /script> <
    script src = "https://amman.orangecodingacademy.com/assets/js/countries.js" > < /script> <
    script src = "https://cdnjs.cloudflare.com/ajax/libs/country-select-js/2.0.2/js/countrySelect.min.js"
integrity = "sha512-agmFjG7H3K/n7ca70w6lzdO0MxUFWYcaDrw5WpwBMjhXxfrchssrKyZrJOSEN7q4vIeTcHUX5A7mM6zjbE2ZAA=="
crossorigin = "anonymous"
referrerpolicy = "no-referrer" > < /script>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <
    script async src = "https://www.googletagmanager.com/gtag/js?id=G-0LV1RTXDGY" > < /script> <
    script >
    window.dataLayer = window.dataLayer || [];

function gtag() {
    dataLayer.push(arguments);
}
gtag('js', new Date());

gtag('config', 'G-0LV1RTXDGY'); <
/script>

<
style >
    <
    /style>




    <
    /head> <
    body >
    <
    div class = "d-md-flex flex-md-equal h-100 " >
    <
    div class = "col-lg-4 p-0 auth-slider my-div" >
    <
    div id = "carouselExampleIndicators"
class = "carousel slide"
data - ride = "carousel" >
    <
    ol class = "carousel-indicators" >
    <
    li data - target = "#carouselExampleIndicators"
data - slide - to = "0"
class = "active" > < /li> <
    li data - target = "#carouselExampleIndicators"
data - slide - to = "1" > < /li> <
    /ol> <
    div class = "carousel-inner" >
    <
    div class = "carousel-item active" >
    <
    img class = "d-block h-100 my-div"
src = "https://amman.orangecodingacademy.com/assets/img/1.jpg"
alt = "First slide" >
    <
    /div> <
    div class = "carousel-item" >
    <
    img id = ""
class = "d-block h-100 my-div"
src = "https://amman.orangecodingacademy.com/assets/img/2.jpg"
alt = "Second slide" >
    <
    /div> <
    /div> <
    /div> <
    /div> <
    div class = "col-lg-8 px-0" >
    <
    header role = "banner" >
    <
    nav role = "navigation"
id = "mainNav"
class = "navbar navbar-light bg-white navbar-expand-md pt-2 border-bottom pb-0 mb-2 pt-1"
aria - label = "Main navigation" >
    <
    div class = "container-fluid" >
    <
    a href = "/" >
    <
    img id = "imgw"
src = "https://amman.orangecodingacademy.com/assets/boosted/dist/img/white.png"
class = "d-inline-block align-bottom mr-3"
alt = "Back to homepage"
title = "Back to homepage"
height = "70"
loading = "lazy" / >
    <
    /a> <
    button class = "navbar-toggler"
type = "button"
data - toggle = "collapse"
data - target = "#orange-navbar-collapse"
aria - controls = "orange-navbar-collapse"
aria - expanded = "false"
aria - label = "Toggle navigation" >
    <
    span class = "navbar-toggler-icon" > < /span> <
    /button> <
    div class = "navbar-collapse justify-content-end collapse"
id = "orange-navbar-collapse" >
    <
    ul class = "navbar-nav" >
    <
    li class = "nav-item" > < a class = "nav-link"
href = "/help"
target = "_blank" > Help < /a></li >
    <
    li class = "nav-item" > < a class = "nav-link"
href = "/terms"
target = "_blank" > Terms & Conditions < /a></li >
    <
    /ul> <
    ul class = "navbar-nav" >

    <
    /ul> <
    /div> <
    /div> <
    /nav> <
    /header>
    <!--<div class="col-lg-9 col-md-7" style="margin-left: 15px;">                      

    <
    div style = "font-weight: bold" >
    <
    p > Thank you
for taking the time to submit your application, please keep following your email to check your application status. <
    /p> <
    p >
    You didn 't catch this training session yet? Stay tuned for our future opportunity.

    <
    /p> <
    br > < br >
    <
    p >
    Best of luck < /p>

    <
    p class = "text-orange"
style = "color: #FF7700" > Coding Academy by Orange Team <
    /p>  <
    /div> <
    /div>
    -->
    <
    section class = "wizard-section mt-5" >
    <
    div class = "form-wizard" >
    <
    form method = "POST"
action = "https://amman.orangecodingacademy.com/login" >
    <
    input type = "hidden"
name = "_token"
value = "cXgosBBSfLVvdiFcniQe6vIjAF9HmCZ3ius5pT3q" > < div class = "d-flex align-items-center flex-column" >
    <
    div class = "form-group col-lg-6 col-md-7 mb-4" >
    <
    h1 > Sign in < /h1> <
    /div> <
    div class = "mb-4 form-group col-lg-6 col-md-7 " >
    <
    label
for = "validationServer01"
class = "is-required" > Email address < span class = "sr-only" > (required) < /span></label >
    <
    div class = "input-group " >
    <
    input name = "email"
type = "text"
class = "form-control email  "
id = "email"
value = "" >
    <
    /div> <
    small > eg: username @domain.com < /small> <
    /div> <
    div class = "mb-4 form-group col-lg-6 col-md-7 " >
    <
    label
for = "validationServer02"
class = "is-required" > Password < span
class = "sr-only" > (required) < /span></label >
    <
    div class = "input-group " >
    <
    input name = "password"
type = "password"
class = "form-control password col-11 pr-0  "
id = "password"
value = "" >
    <
    div class = "d-flex align-items-center "
onclick = "showPass()" >
    <
    i class = "fa fa-eye-slash eye btn btn-light border-left-0"
aria - hidden = "true" > < /i> <
    /div> <
    /div> <
    /div> <
    div class = "form-group col-lg-6 col-md-7 mb-4" >
    <
    div class = " d-flex justify-content-start" >
    <
    div >
    <
    a class = "forget-credentials"
href = "https://amman.orangecodingacademy.com/password/reset" > Forgot your password ? < /a>
    <!-- <a class="forget-credentials">Forgot your password?</a>-->
    <
    /div> <
    /div> <
    /div> <
    div class = "form-group col-lg-6 col-md-7 mb-4" >
    <
    button class = "btn btn-primary  btn-lg btn-block"
type = "submit" > Login < /button> <
    /div>







    <
    /div> <
    /form> <
    /div> <
    /section>  <
    /div> <
    /div> <
    script
src = "https://code.jquery.com/jquery-3.6.0.min.js"
integrity = "sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
crossorigin = "anonymous" > < /script> <
    script src = "https://cdn.jsdelivr.net/npm/boosted@4.5.3/dist/js/boosted.bundle.min.js"
integrity = "sha384-hQFBUEXKv1tPjGNFpCctXthNheXFWEyT+cKHsR5+8VYwGoe2L0SIaDNXDpE1LlTK"
crossorigin = "anonymous" > < /script> <
    script > window.jQuery || document.write('<script src="https://amman.orangecodingacademy.com/assets/boosted/dist/js/jquery-slim.min.js"><\/script>') < /script> <
    script src = "https://amman.orangecodingacademy.com/assets/boosted/dist/js/boosted.bundle.min.js" > < /script> <
    script >
    function showPass() {
        var x = document.getElementById("password");
        if (x.type === "password") {
            x.type = "text";
            $('.eye').removeClass("fa-eye-slash");
            $('.eye').addClass("fa-eye");
        } else {
            x.type = "password";
            $('.eye').addClass("fa-eye-slash");
            $('.eye').removeClass("fa-eye");
        }
    }

    <
    /script>

    <
    script src = "https://unpkg.com/sweetalert/dist/sweetalert.min.js" > < /script> <
    script >
    // create a record
    // update a record
    // delete a record
    <
    /script> <
    script >
    function showPass() {
        var x = document.getElementById("password");
        if (x.type === "password") {
            x.type = "text";
            $('.eye').removeClass("fa-eye-slash");
            $('.eye').addClass("fa-eye");
        } else {
            x.type = "password";
            $('.eye').addClass("fa-eye-slash");
            $('.eye').removeClass("fa-eye");
        }
    }

    <
    /script> <
    /body> <
    /html>