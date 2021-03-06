var Router = require('singleton-router')
var css = require('sheetify')
var html = require('bel')

css('tachyons')

var projects = [
  {title: 'senadores', description: 'Datos públicos disponibles en la página www.senado.cl', github: 'https://github.com/senadores-chile>', body: html`<article class="mt7 ph6-l mt0-l"> <div class="pa4 ph5-l georgia mw9-l center"> <p class="f5 f3-ns lh-copy measure-wide georgia"> El año 2017 hay elecciones parlamentarias en Chile y yo siempre he considerado que la información disponible respecto a los candidatos es poca. No sobre los candidatos presidenciales, sino los candidatos a diputados y senadores. Gracias a la ley de transparencia, hoy esa información esta disponible para quien la solicite, sin embargo, se encuentra en un formato poco amigable y sin un formato accesible para programadores. Es por esto, que decidí juntar en un solo sitio la información del senado y servel y crear una API amigable para programadores con la informacion publica de senadores. </p></div></article>`},
  {title: 'Salvador', description: 'Pequeño sitio web que mantengo para mi hijo', github: 'https://github.com/YerkoPalma/salvador', site: 'http://salvador.palmanavea.com/', body: html`<article class="mt7 ph6-l mt0-l"> <div class="pa4 ph5-l georgia mw9-l center"> <img class="mw-100" src="https://api.urlbox.io/v1/ca482d7e-9417-4569-90fe-80f7c5e1c781/15a27488df9d7bda08381c4236050a637745b7bb/png?url=salvador.palmanavea.com" alt="salvador.palmanavea.com"> <p class="f5 f3-ns lh-copy measure-wide georgia"> Para el primer cumpleaños de mi hijo, quise hacerle un regalo especial. Pense primero (y aún lo pienso a veces), en crear un juego para él, pero descarte temporalmente esa idea, ya que estaba corto de tiempo, y era recien su primer cumpleaños. Entonces decidí crear una línea de tiempo para mi hijo, usé un template de <a class="link pointer bb b--dashed bt-0 bl-0 br-0 bw2 bg-animate hover-bg-light-red b--light-red black" href="https://tympanus.net/codrops/">codrops</a> , y compré un dominio "familiar". Más adelante agregué más plugins, mejoré el soporte de imagenes y videos usando <a class="link pointer bb b--dashed bt-0 bl-0 br-0 bw2 bg-animate hover-bg-light-red b--light-red black" href="https://github.com/sachinchoolur/lightgallery.js">lightgallery</a> (incluso tuve que corregir un <a class="link pointer bb b--dashed bt-0 bl-0 br-0 bw2 bg-animate hover-bg-light-red b--light-red black" href="https://github.com/sachinchoolur/lightgallery.js/issues/41">issue</a> que no permitia ver imagenes y videos en la misma página) y me quede con el framework <a class="link pointer bb b--dashed bt-0 bl-0 br-0 bw2 bg-animate hover-bg-light-red b--light-red black" href="https://choo.io">choo</a> 3.x. Cada año la iré actualizando y mejorando, quién sabe, quizas le agregue algún juego, o música, todo puede pasar…</p></div></article>`},
  {title: 'Matrimonio', description: 'Parte de matrimonio interactivo (PWA)', site: 'https://matrimonio.palmanavea.com', body: html`<article class="mt7 ph6-l mt0-l"> <div class="pa4 ph5-l georgia mw9-l center"> <img class="mw-100" src="https://api.urlbox.io/v1/ca482d7e-9417-4569-90fe-80f7c5e1c781/b015cb4e4f6c3a53f771737729abeb9f97ce54bc/png?url=matrimonio.palmanavea.com" alt="matrimonio.palmanavea.com"> <p class="f5 f3-ns lh-copy measure-wide georgia"> El verano del 2017 me casé. Junto a mi esposa teniamos que hacer una serie de preparativos (casarse parecese ser más trabajo que cualquier desarrollo de software). Dentro de todo, decidí hacer algo especial para entregar mis partes de matrimonio. Junto con los partes fisicos, desarrollé una <a class="link pointer bb b--dashed bt-0 bl-0 br-0 bw2 bg-animate hover-bg-light-red b--light-red black" href="https://en.wikipedia.org/wiki/Progressive_web_app">aplicación web progresiva</a> con la información necesaria para asistir a nuestro matrimonio. Utilicé el framework <a class="link pointer bb b--dashed bt-0 bl-0 br-0 bw2 bg-animate hover-bg-light-red b--light-red black" href="https://choo.io">choo</a> , para el cual desarrollé un <a class="link pointer bb b--dashed bt-0 bl-0 br-0 bw2 bg-animate hover-bg-light-red b--light-red black" href="https://github.com/YerkoPalma/choo-offline">plugin</a> que aporta las funcionalidades offline que una pwa necesita (uso de <a class="link pointer bb b--dashed bt-0 bl-0 br-0 bw2 bg-animate hover-bg-light-red b--light-red black" href="https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API">IndexedDB</a> y <a class="link pointer bb b--dashed bt-0 bl-0 br-0 bw2 bg-animate hover-bg-light-red b--light-red black" href="https://developers.google.com/web/fundamentals/getting-started/primers/service-workers">service workers</a>). También usé el framework <a class="link pointer bb b--dashed bt-0 bl-0 br-0 bw2 bg-animate hover-bg-light-red b--light-red black" href="http://tachyons.io/">tachyons</a> (el mismo con el que desarrollé esta página) y <a class="link pointer bb b--dashed bt-0 bl-0 br-0 bw2 bg-animate hover-bg-light-red b--light-red black" href="https://www.mapbox.com/mapbox.js/api/v3.1.0/">mapbox.js</a>, para mapbox.js usé un <a class="link pointer bb b--dashed bt-0 bl-0 br-0 bw2 bg-animate hover-bg-light-red b--light-red black" href="https://www.mapbox.com/mapbox.js/example/v1.0.0/mapbox-directions/">plugin de direcciones</a> que actualmente no tiene soporte para español (pese a haber una PR abierta para internacionalización), por lo que tuve que públicar <a class="link pointer bb b--dashed bt-0 bl-0 br-0 bw2 bg-animate hover-bg-light-red b--light-red black" href="https://www.npmjs.com/package/@yerkopalma/mapbox-directions.js">mi propia versión del plugin</a>, como un scoped package en npm, que daba el soporte que necesitaba.</p></div></article>`},
  {title: 'singleton-router', description: 'Router front end a la medida', github: 'https://github.com/YerkoPalma/singleton-router', body: html`<article class="mt7 ph6-l mt0-l"> <div class="pa4 ph5-l georgia mw9-l center"> <p class="f5 f3-ns lh-copy measure-wide georgia"> Como desarrollador javascript, siempre estoy buscando un buen set de herramientas de desarrollo para mis trabajos. Nunca me gustaron mucho las herramientas “de moda” (angular en su momento y react ahora) y he pasado una transición que partió con jquery, luego <a class="link pointer bb b--dashed bt-0 bl-0 br-0 bw2 bg-animate hover-bg-light-red b--light-red black" href="https://vuejs.org/">vue</a> y finalmente <a class="link pointer bb b--dashed bt-0 bl-0 br-0 bw2 bg-animate hover-bg-light-red b--light-red black" href="https://choo.io">choo</a>. Este último framework es el que más se acerca a mis expectativas, si no fuese por un solo detalle, el router. Como <a class="link pointer bb b--dashed bt-0 bl-0 br-0 bw2 bg-animate hover-bg-light-red b--light-red black" href="https://github.com/yoshuawuyts/sheet-router">sheet-router</a> , y luego <a class="link pointer bb b--dashed bt-0 bl-0 br-0 bw2 bg-animate hover-bg-light-red b--light-red black" href="https://github.com/yoshuawuyts/nanorouter">nanorouter</a> , no cumplian mis expectativas, cree mi propio router y mi propio stack de desarrollo, que se ajusta perfecto a mis expectativas. </p></div></article>`},
  {title: 'Palma contabilidad', description: 'Contador independiente', site: 'http://palmacontabilidad.cl/', body: html`<article class="mt7 ph6-l mt0-l"> <div class="pa4 ph5-l georgia mw9-l center"> <img class="mw-100" src="https://api.urlbox.io/v1/ca482d7e-9417-4569-90fe-80f7c5e1c781/f916f765f43f7acfc10fda551be806ccc56f82e5/png?url=palmacontabilidad.cl" alt="palmacontabilidad.cl"> <p class="f5 f3-ns lh-copy measure-wide georgia"> Uno de los primeros sitios que desarrollé, y que he reconstruido por lo menos unas 4 veces.Se trata básicamente de una landing page hecha para la empresa de contabilidad de mi papá.Originalmente, desarrollé la primera versión usando jquery y plantillas de <a class="link pointer bb b--dashed bt-0 bl-0 br-0 bw2 bg-animate hover-bg-light-red b--light-red black" href="http://getbootstrap.com/">Bootstrap</a> 3, cuando recién habia aparecido esa versión, luego, reconstruí la página sin usar Bootstrap, actualmente, la página esta desarrollada con <a class="link pointer bb b--dashed bt-0 bl-0 br-0 bw2 bg-animate hover-bg-light-red b--light-red black" href="https://vuejs.org/">Vue</a> 1.x y <a class="link pointer bb b--dashed bt-0 bl-0 br-0 bw2 bg-animate hover-bg-light-red b--light-red black" href="http://materializecss.com/">materializecss</a>.</p></div></article>`},
  {},
  {},
  {}
]

var router = Router({ onRender: onRender })

router.addRoute('/', require('./views/main'))
router.addRoute('/:project', require('./views/projects'), function (params) {
  var currentProject = projects[params.project]
  if (currentProject.body) document.getElementById('projectBody').appendChild(currentProject.body)
})
router.notFound(require('./views/notFound'))
router.setStore(projects) // hacking
router.setRoot('/')
router.start()

function onRender (currentView, previousView, cb) {
  // make dissappear the previousView
  previousView.addEventListener('transitionend', function (e) {
    if (currentView && currentView.classList) {
      // currentView.classList.add('t')
      currentView.style.transition = 'all 0.5s'
      currentView.classList.add('o-0')
    }
    // e.stopPropagation()
    // replace it with the currentView
    router.rootEl.appendChild(currentView)
    router.rootEl.removeChild(previousView)
    // make it appear
    if (currentView && currentView.classList) currentView.classList.remove('o-0')
    if (typeof cb === 'function') cb(router.currentRoute.params)

    var links = document.querySelectorAll('a[data-route]')
    Array.prototype.forEach.call(links, function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault()
        if (!link.getAttribute('data-bind')) router.goToPath(link.getAttribute('data-route'))
        if (typeof router.onNavClick === 'function') router.onNavClick(link.getAttribute('data-route'), link)
      })
    })
  })
  if (previousView && previousView.classList) {
    // previousView.classList.add('t')
    previousView.style.transition = 'all 0.5s'
    previousView.classList.add('o-0')
  }
}
