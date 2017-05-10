var Router = require('singleton-router')
var css = require('sheetify')

css('tachyons')

var projects = [
  {title: 'senadores', description: 'Datos públicos disponibles en la página www.senado.cl'},
  {title: 'Salvador', description: 'Pequeño sitio web que mantengo para mi hijo'},
  {title: 'Matrimonio', description: 'Parte de matrimonio interactivo (PWA)'},
  {title: 'singleton-router', description: 'Router fron end a la medida'},
  {title: 'Palma contabilidad', description: 'Contador independiente'},
  {},
  {},
  {}
]

var router = Router({ onRender: onRender })

router.addRoute('/', require('./views/main'))
router.addRoute('/:project', require('./views/projects'))
router.notFound(require('./views/notFound'))
router.setStore(projects) // hacking
router.setRoot('/')
router.start()

function onRender (currentView, previousView) {
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
