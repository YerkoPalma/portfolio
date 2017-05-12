var Router = require('singleton-router')
var css = require('sheetify')
var html = require('bel')

css('tachyons')

var projects = [
  {title: 'senadores', description: 'Datos públicos disponibles en la página www.senado.cl', github: 'https://github.com/senadores-chile'},
  {title: 'Salvador', description: 'Pequeño sitio web que mantengo para mi hijo', github: 'https://github.com/YerkoPalma/salvador', site: 'http://salvador.palmanavea.com/'},
  {title: 'Matrimonio', description: 'Parte de matrimonio interactivo (PWA)', site: 'https://matrimonio.palmanavea.com'},
  {title: 'singleton-router', description: 'Router front end a la medida', github: 'https://github.com/YerkoPalma/singleton-router'},
  {title: 'Palma contabilidad', description: 'Contador independiente', site: 'http://palmacontabilidad.cl/', body: html`<article class="mt7 mt0-l"> <div class="pa4 ph7-l georgia mw9-l center"> <p class="f5 f3-ns lh-copy measure georgia"> Theodore Sturgeon was a science fiction author, critic, and the basis for Kurt Vonnegut's recurring character Kilgore Trout. He was prolific, authoring over 200 pieces himself and critiquing around 400 others. </p><p class="f5 f3-ns lh-copy measure georgia"> In 1958 he published a piece in Venture proclaiming what he called "Sturgeon's Revelation" </p><p class="f6 f4-ns lh-copy measure i pl4 bl bw1 b--light-red mb4"> I repeat Sturgeon's Revelation, which was wrung out of me after twenty years of wearying defense of science fiction against attacks of people who used the worst examples of the field for ammunition, and whose conclusion was that ninety percent of SF is crud. Using the same standards that categorize 90% of science fiction as trash, crud, or crap, it can be argued that 90% of film, literature, consumer goods, etc. is crap. In other words, the claim (or fact) that 90% of science fiction is crap is ultimately uninformative, because science fiction conforms to the same trends of quality as all other artforms. </p><p class="f5 f3-ns lh-copy measure mb4"> You don't have to bounce a tennis ball very far in San Francisco before it will hit two developers complaining about how many js tools/frameworks there are for development in 2015 and how much unneccessary complexity they add. Doing a search on twitter for 'too many js tools' or 'yet another js framework' returns... a lot of people lamenting the current state of affairs. </p><p class="f5 f3-ns lh-copy measure"> This is most likely, the wrong conversation for us as a community, to be having. The presence of bad tools - shouldn't discourage us from wanting more tools or frameworks. There are more books published in a single day than I will ever be able to read in my lifetime. But this does not make me sad. Or overwhelm me. Mostly I think about how excited I am to read the best books that are being published. And this is where we should push the conversation. How do we build better tools? What does that look like? </p></div></article>`},
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
