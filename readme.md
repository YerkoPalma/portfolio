# projects
[![Build Status](https://img.shields.io/travis/yerkopalma/projects/master.svg?style=flat-square)](https://travis-ci.org/yerkopalma/projects) [![test coverage](https://img.shields.io/codecov/c/github/yerkopalma/projects/master.svg?style=flat-square)](https://codecov.io/github/yerkopalma/projects) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/feross/standard)

> web portfolio

## Projects

### palmacontabilidad.cl

![palmacontabilidad.cl][palmacontabilidad.cl]
Uno de los primeros sitios que desarrollé, y que he reconstruido por lo menos unas 4 veces.
Se trata básicamente de una landing page hecha para la empresa de contabilidad de mi papá.
Originalmente, desarrollé la primera versión usando jquery y plantillas de [Bootstrap][bootstrap] 3, cuando recién habia aparecido esa versión, luego, reconstruí la página sin usar Bootstrap, actualmente, la página esta desarrollada con [Vue][vue] 1.x y [materializecss][materializecss].

### salvador.palmanavea.com

![salvador.palmanavea.com][salvador.palmanavea.com]
Para el primer cumpleaños de mi hijo, quise hacerle un regalo especial. Pense primero (y aún lo pienso a veces), en crear un juego para él, pero descarte temporalmente esa idea, ya que estaba corto de tiempo, y era recien su primer cumpleaños.
Entonces decidí crear una línea de tiempo para mi hijo, usé un template de [codrops][codrops], y compré un dominio "familiar". Más adelante agregué más plugins, mejoré el soporte de imagenes y videos usando [lightgallery][lightgallery] (incluso tuve que corregir un [issue][lg-issue] que no permitia ver imagenes y videos en la misma página) y me quede con el framework [choo][choo] 3.x.
Cada año la iré actualizando y mejorando, quién sabe, quizas le agregue algún juego, o música, todo puede pasar...

### matrimonio.palmanavea.com

![matrimonio.palmanavea.com][matrimonio.palmanavea.com]
El verano del 2017 me casé. Junto a mi esposa teniamos que hacer una serie de preparativos (casarse parecese ser más trabajo que cualquier desarrollo de software). Dentro de todo, decidí hacer algo especial para entregar mis partes de matrimonio. 
Junto con los partes fisicos, desarrollé una [aplicación web progresiva][pwa] con la información necesaria para asistir a nuestro matrimonio. Utilicé el framework [choo][choo], para el cual desarrollé un [plugin][choo-offline] que aporta las funcionalidades _offline_ que una pwa necesita (uso de [indexDB][indexedDB] y [service workers][sw]). También usé el framework [tachyons][tachyons] (el mismo con el que desarrollé esta página) y [mapbox.js][mapbox.js], para mapbox.js usé un [plugin de direcciones][mapbox-directions] que actualmente no tiene soporte para español (pese a haber una PR abierta para internacionalización), por lo que tuve que públicar [mi propia versión del plugin][scoped-plugin], como un scoped package en npm, que daba el soporte que necesitaba.

### senadores

### singleton-router

## License
[MIT](/license)

[bootstrap]: http://getbootstrap.com/
[vue]: https://vuejs.org/
[materializecss]: http://materializecss.com/
[palmacontabilidad.cl]: https://api.urlbox.io/v1/ca482d7e-9417-4569-90fe-80f7c5e1c781/f916f765f43f7acfc10fda551be806ccc56f82e5/png?url=palmacontabilidad.cl
[salvador.palmanavea.com]: https://api.urlbox.io/v1/ca482d7e-9417-4569-90fe-80f7c5e1c781/15a27488df9d7bda08381c4236050a637745b7bb/png?url=salvador.palmanavea.com
[matrimonio.palmanavea.com]: https://api.urlbox.io/v1/ca482d7e-9417-4569-90fe-80f7c5e1c781/b015cb4e4f6c3a53f771737729abeb9f97ce54bc/png?url=matrimonio.palmanavea.com
[codrops]: https://tympanus.net/codrops/
[lightgallery]: https://github.com/sachinchoolur/lightgallery.js
[lg-issue]: https://github.com/sachinchoolur/lightgallery.js/issues/41
[choo]: https://choo.io/
[pwa]: https://en.wikipedia.org/wiki/Progressive_web_app
[choo-offline]: https://github.com/YerkoPalma/choo-offline
[indexedDB]: https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API
[sw]: https://developers.google.com/web/fundamentals/getting-started/primers/service-workers
[mapbox.js]: https://www.mapbox.com/mapbox.js/api/v3.1.0/
[mapbox-directions]: https://www.mapbox.com/mapbox.js/example/v1.0.0/mapbox-directions/
[scoped-plugin]: https://www.npmjs.com/package/@yerkopalma/mapbox-directions.js
[tachyons]: http://tachyons.io/
