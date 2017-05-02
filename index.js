var Router = require('singleton-router')
var css = require('sheetify')
var html = require('bel')

css('tachyons')

var router = Router({ onRender: onRender })

router.addRoute('/', mainView)
router.addRoute('/:project', projectView)
router.notFound(notFoundView)
router.setRoot('/')
router.start()

var container = css`
  :host {
    height: 97vh;
    transition: all 0.5s;
  }
`
var bgColors = [
  'light-red',
  'gold',
  'light-purple',
  'pink',
  'green',
  'blue',
  'yellow',
  'light-green'
]
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

function projectView (params, store) {
  var project = projects[params.project]
  return html`<main class="w-100 pa2 bg-black min-vh-100">
  <div class="pa3 bg-white w-100 h-100 ${container}">
    <h1>${project.title}</h1>
    </div>
  </main>`
}

var renderProjects = function (projects) {
  projects.sort(function () { return 0.5 - Math.random() })
  bgColors.sort(function () { return 0.5 - Math.random() })
  return projects.map(function (project, i) {
    return html`
    <a data-route="/${i}" "class="link pointer bg-animate hover-bg-${bgColors[i]} fl w-50 w-third-m w-25-ns">
        ${project && project.title
          ? html`<div class="aspect-ratio aspect-ratio--16x9">
            <h3 class="db pl3 f2 lh-solid bg-center cover aspect-ratio--object ma0">${project.title}</h3>
              <p class="black-80 pl3 db lh-copy bg-center cover aspect-ratio--object ma0 pt5">${project.description}</p>
            </div>`
          : html`<div class="aspect-ratio aspect-ratio--16x9">
          <img style="background-image:url(http://mrmrs.io/images/0002.jpg);"
              'class="db bg-center cover aspect-ratio--object" />
            </div>`}
      </div>
    </a>`
  })
}

function mainView (params, state) {
  return html`
  <main class="w-100 pa2 bg-black min-vh-100">
    <div class="pa3 bg-white w-100 h-100 ${container}">
      <h1 class="f1 ma0 lh-title black">Proyectos</h1>
      <div class="mv5 cf w-100">
        ${renderProjects(projects)}
      </div>
    </div>
  </main>`
}

function notFoundView (params, state) {
  return html`<main>
    <h1>ups! nothing here :(</h1>
  </main>`
}

function onRender (currentView, previousView) {
  // make dissappear the previousView
  if (previousView && previousView.classList) previousView.classList.add('o-0')
  previousView.addEventListener('transitionend', function (e) {
    if (currentView && currentView.classList) currentView.classList.add('o-0')
    e.stopPropagation()
    // replace it with the currentView
    router.rootEl.replaceChild(currentView, previousView)
    // make it appear
    if (currentView && currentView.classList) currentView.classList.remove('o-0')
  })
}
