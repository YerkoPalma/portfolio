var html = require('bel')
var css = require('sheetify')

var container = css`
  :host {
    height: 97vh;
    transition: all 0.5s;
  }
`

function projectView (params, projects) {
  var project = projects[params.project]
  if (!project) return require('./notFound')()
  return html`<main class="w-100 pa2 bg-black min-vh-100">
    <div class="pa3 bg-white w-100 h-100 overflow-y-scroll ${container}">
      <a class="pointer link" data-route="/">
        <svg class="i-arrow-left" viewBox="0 0 32 32" width="64" height="64" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
          <path d="M10 6 L2 16 10 26 M2 16 L30 16"></path>
        </svg>
      </a>
      <h1 class="f1 dip absolute top-0 left-2 mh5">${project.title}</h1>
    </div>
  </main>`
}
module.exports = projectView
