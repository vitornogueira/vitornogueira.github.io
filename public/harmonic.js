/* exported Harmonic */
/* global __HARMONIC */

// Note: `__HARMONIC` is not an actual identifer,
// it is the prefix of `harmonic build`'s substitution patterns.
// The substitution patterns look like a property access so that
// we can just whitelist `__HARMONIC` as a global identifier
// instead of having to whitelist every single substitution.

// TODO ESLint's `exported` directive seems to not be working correctly
// with the current version.
// We should probably `export` Harmonic using ES2015 module syntax and
// trash the `exported` directive.
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Harmonic = (function () {
    // eslint-disable-line no-unused-vars

    function Harmonic(name) {
        _classCallCheck(this, Harmonic);

        this.name = name;
    }

    _createClass(Harmonic, [{
        key: "getConfig",
        value: function getConfig() {
            return {"index_posts":10,"name":"Vitor Nogueira","title":"Vitor Nogueira","domain":"https://vitornogueira.github.io","subtitle":"Powered by Harmonic","author":"Vitor Nogueira","description":"Blog sobre desenvolvimento web","bio":"Hi :)","theme":"harmonic-theme-vitor","preprocessor":"stylus","posts_permalink":":language/:year/:month/:title","pages_permalink":":language/pages/:title","header_tokens":["<!--","-->"],"i18n":{"default":"pt-br","languages":["en","pt-br"]},"pages":[{"title":"sobre","link":"/pages/about"}]};
        }
    }, {
        key: "getPosts",
        value: function getPosts() {
            return {"pt-br":[{"layout":"post","title":"Hello World","date":"2016-02-14T02:02:13.789Z","comments":"true","published":"true","keywords":"","description":"Bem vindo!","categories":[""],"content":"<p>Depois de muito tempo pensando e planejando resolvi colocar a mão na massa e iniciar meu blog.</p>\n<p>Depois de pesquisar algumas soluções escolhi o <a href=\"https://github.com/JSRocksHQ/harmonic\">Harmonic</a>. Ele é um gerador estático escrito em ECMAScript 2015 &lt;3 por <a href=\"https://github.com/JSRocksHQ/harmonic/graphs/contributors\">uma galera muito boa</a>.</p>\n<p>Let it go!</p>\n","file":"src/posts/hello-world.md","filename":"hello-world","link":"2016/02/hello-world","lang":"pt-br","default_lang":false}]};
        }
    }, {
        key: "getPages",
        value: function getPages() {
            return {"pt-br":[{"layout":"page","title":"Sobre","date":"2016-02-14T14:20:28.885Z","comments":"true","published":"true","keywords":"","description":"Sobre o autor","categories":"","link":"pages/about","content":"<!DOCTYPE html>\n<html lang=\"pt-br\">\n  <head>\n  \n  <title>Sobre | Vitor Nogueira</title>\n  \n  <meta charset=\"utf-8\" />\n  <meta name=\"author\" content=\"Vitor Nogueira\">\n  \n  <meta name=\"description\" content=\"Sobre o autor\">\n  \n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n  <meta name=\"theme-color\" content=\"#3388dd\">\n  \n  <link rel=\"canonical\" href=\"https://vitornogueira.github.io/pages/about\">\n  \n  \n  <meta property=\"og:url\" content=\"https://vitornogueira.github.io/pages/about\" />\n  <meta property=\"og:type\" content=\"website\" />\n  <meta property=\"og:title\" content=\"Sobre | Vitor Nogueira\" />\n  <meta property=\"og:description\" content=\"Sobre o autor\" />\n  \n  <meta property=\"og:site_name\" content=\"Vitor Nogueira\" />\n  <meta property=\"og:image\" content=\"https://vitornogueira.github.io/assets/img/share.jpg\" />\n\n  <meta name=\"twitter:card\" content=\"summary_large_image\">\n  <meta name=\"twitter:site\" content=\"@vitornogueira\">\n  <meta name=\"twitter:creator\" content=\"@vitornogueira\">\n  \n  <meta name=\"twitter:title\" content=\"Sobre | Vitor Nogueira\">\n  <meta name=\"twitter:description\" content=\"Sobre o autor\">\n  \n  <meta name=\"twitter:image\" content=\"https://vitornogueira.github.io/assets/img/share.jpg\">\n\n  <link href='https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700' rel='stylesheet' type='text/css'>\n  <link rel=\"stylesheet\" href=\"/css/main.css\" />\n</head>\n\n<body>\n  <header class=\"header\">\n  <h1 class=\"header-title\">Vitor Nogueira</h1>\n  <nav class=\"navigation\">\n  <a href=\"/\" class=\"navigation-item\">Home</a>\n  \n  <a href=\"/pages/about\" class=\"navigation-item\">Sobre</a>\n  \n  <a href=\"https://github.com/vitornogueira\" target=\"_blank\" class=\"navigation-item\">Github</a>\n  <a href=\"https://twitter.com/vitornogueiraa\" target=\"_blank\" class=\"navigation-item\">Twitter</a>\n</nav>\n\n</header>\n  <section id=\"page\" class=\"content center\">\n    <h2 class=\"content-title\">Sobre</h2>\n    <article>\n      <p>Me chamo Vitor Nogueira, tenho 24 anos e sou natural de Itapetininga, SP, sou graduado em Análise e Desenvolvimento de Sistemas pela FATEC Itapetininga e trabalho com Desenvolvimento Web desde 2012.</p>\n<p>Iniciei na área web na <a href=\"http://jawsdigital.com.br/portal/\">Jaws Digital</a> como Desenvolvedor Front-end e atualmente trabalho para a <a href=\"http://ignicaodigital.com.br/\">Ignição Digital</a> como Desenvolvedor JavaScript.</p>\n<p>Fique a vontade para conversar comigo pelo e-mail: <a href=\"mailto:vnweb.contato@gmail.com\">vnweb.contato@gmail.com</a></p>\n\n    </article>\n    <section id=\"comments\" class=\"comments\">\n  <div id=\"disqus_thread\"></div>\n  <script>\n  /**\n  * RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.\n  * LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables\n  */\n  var disqus_config = function () {\n    this.page.url = \"https://vitornogueira.github.io\"; // Replace PAGE_URL with your page's canonical URL variable\n    this.page.identifier = window.location.href.split('?')[0]; // Replace PAGE_IDENTIFIER with your page's unique identifier variable\n  };\n  (function() { // DON'T EDIT BELOW THIS LINE\n  var d = document, s = d.createElement('script');\n\n  s.src = '//vitornogueira.disqus.com/embed.js';\n\n  s.setAttribute('data-timestamp', +new Date());\n  (d.head || d.body).appendChild(s);\n  })();\n  </script>\n  <noscript>Please enable JavaScript to view the <a href=\"https://disqus.com/?ref_noscript\" rel=\"nofollow\">comments powered by Disqus.</a></noscript>\n</section>\n\n  </section>\n</body>\n</html>\n","file":"src/posts/about.md","filename":"about","lang":"pt-br"}]};
        }
    }]);

    return Harmonic;
})();