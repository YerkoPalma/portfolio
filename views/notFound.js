var html = require('bel')
var css = require('sheetify')
var container = css`
  :host {
    height: 97vh;
    transition: all 0.5s;
  }
`

function notFoundView (params, state) {
  return html`<main class="w-100 pa2 bg-black min-vh-100">
    <div class="pa3 bg-white w-100 h-100 overflow-y-scroll ${container}">
      <h1 class="f-headline ma0 lh-title black">Ups! No encontrado</h1>
    </div>
  </main>`
}

module.exports = notFoundView