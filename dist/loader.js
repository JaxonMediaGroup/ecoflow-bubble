/*!
 * Ecoflow Bubble loader.
 *
 * Referencia congelada (usar un tag de git, p.ej. @loader-v1) que carga
 * siempre la versión más reciente del bundle en main. El navegador recibe
 * una URL distinta en cada carga (?t=timestamp), así que nunca se queda
 * con una copia vieja; para el edge del CDN basta purgar tras cada release:
 *   curl https://purge.jsdelivr.net/gh/JaxonMediaGroup/ecoflow-bubble@main/dist/ecoflow-bubble.js
 */
(function () {
    'use strict'
    var me = document.currentScript
    var script = document.createElement('script')
    script.src =
        'https://cdn.jsdelivr.net/gh/JaxonMediaGroup/ecoflow-bubble@main/dist/ecoflow-bubble.js?t=' +
        Date.now()
    script.defer = true
    if (me && me.parentNode) {
        me.parentNode.insertBefore(script, me)
    } else {
        ;(document.body || document.head).appendChild(script)
    }
})()
