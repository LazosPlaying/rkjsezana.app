var script = document.createElement('script');
script.onload = function () {
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag("js", new Date());
    gtag("config", "UA-119143726-1");
};
script.src = 'https://www.googletagmanager.com/gtag/js?id=UA-119143726-1';

document.head.appendChild(script);
