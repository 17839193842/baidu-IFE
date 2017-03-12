;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-iconfont89" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M960 189.008 480 189.008 480 131.008c0-35.344-28.656-64-64-64L64 67.008c-35.344 0-64 28.656-64 64l0 762c0 35.344 28.656 64 64 64l896 0c35.344 0 64-28.656 64-64l0-640C1024 217.664 995.344 189.008 960 189.008zM96 115.008l288 0c35.344 0 48 12.656 48 48l0 74 2 0L480 237.008l448 0c35.344 0 48 12.656 48 48l0 88.912L48 373.92 48 163.008C48 127.664 60.656 115.008 96 115.008zM928 909.008 96 909.008c-35.344 0-48-12.656-48-48L48 421.904l928 0 0 439.088C976 896.336 963.344 909.008 928 909.008z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-wofenxiangde" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M712 165.6 845.8 165.6l-322.4 322.4c-9 9-9 23.6 0 32.6 9 9 23.6 9 32.6 0L879.9 196.6l0 158.8c0 25 46 25.4 46 0.5 0-112.6 0-205.7 0-205.7 0-17-13.7-30.7-30.7-30.7 0 0-76.8 0-181 0C687.9 119.6 706.9 165.6 712 165.6zM879.9 503.8c0 168.4 0 343.2 0 343.2 0 17-13.7 30.7-30.7 30.7l-650.8 0c-17 0-30.7-13.7-30.7-30.7L167.7 196.3c0-17 13.7-30.7 30.7-30.7 0 0 170.6 0 337.2 0 31.2 0 32.1-46 3.6-46-190.2 0-386.8 0-386.8 0-17 0-30.7 13.7-30.7 30.7l0 742.9c0 17 13.7 30.7 30.7 30.7L895.3 923.9c17 0 30.7-13.7 30.7-30.7 0 0 0-197.2 0-388.4C926 478.2 879.9 480.6 879.9 503.8z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-baobiao" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M640 0 64 0l0 1024 896 0L960 320C960 320 654.336 0 640 0zM832 256l-128 0L704 128 832 256zM896 960 128 960 128 64c0 0 511.936 0 512 0l0 256 256 0L896 960zM768 768 192 768l0-64 576 0L768 768zM384 384 192 384 192 320l192 0L384 384zM576 576 192 576 192 512l384 0L576 576z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-chaxun" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M196.16 460.352h580.928l0.512 29.696c4.096-0.192 7.744-1.28 11.904-1.28 26.112 0 50.624 5.44 74.24 13.44v-246.72H692.352V126.016H81.984V910.4h530.624c-40.64-45.504-65.92-100.096-65.92-167.232 0-18.496 2.112-36.48 5.696-54.016H196.672v-88h391.424c16.192-25.28 36.992-46.848 60.736-64.64h-452.16l-0.512-76.16z m1.152-60.992v-72.768h409.92v72.768m107.776-273.344V226.88h148.736z m268.096 770.112l-75.136-76.736c17.152-26.88 27.392-58.88 27.392-93.376 0-93.888-74.24-170.048-165.888-170.048-91.52 0-165.888 76.16-165.888 170.048 0 94.016 74.368 170.112 165.888 170.112 28.096 0 54.144-7.872 77.376-20.48l76.096 78.144 60.16-57.664zM670.528 726.016c0-56 44.352-101.504 99.008-101.504s98.88 45.504 98.88 101.504-44.224 101.504-98.88 101.504-99.008-45.504-99.008-101.504z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-zhanghuxinxi" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M445.44 517.12c25.6-20.48 40.96-56.32 40.96-97.28 0-71.68-56.32-128-128-128S230.4 353.28 230.4 419.84c0 35.84 15.36 71.68 40.96 97.28-66.56 30.72-117.76 102.4-117.76 189.44 0 15.36 10.24 25.6 25.6 25.6s25.6-15.36 25.6-25.6c0-87.04 66.56-153.6 153.6-153.6s153.6 66.56 153.6 153.6c0 15.36 10.24 25.6 25.6 25.6s25.6-15.36 25.6-25.6c0-87.04-51.2-158.72-117.76-189.44zM281.6 419.84c0-40.96 35.84-76.8 76.8-76.8s76.8 35.84 76.8 76.8S399.36 501.76 358.4 501.76s-76.8-35.84-76.8-81.92zM849.92 358.4h-266.24c-10.24 0-20.48-10.24-20.48-20.48v-10.24c0-10.24 10.24-20.48 20.48-20.48h266.24c10.24 0 20.48 10.24 20.48 20.48v5.12c0 15.36-10.24 25.6-20.48 25.6zM849.92 537.6h-266.24c-10.24 0-20.48-10.24-20.48-20.48v-10.24c0-10.24 10.24-20.48 20.48-20.48h266.24c10.24 0 20.48 10.24 20.48 20.48v5.12c0 15.36-10.24 25.6-20.48 25.6zM849.92 716.8h-204.8c-10.24 0-20.48-10.24-20.48-20.48v-5.12c0-10.24 10.24-20.48 20.48-20.48h204.8c10.24 0 20.48 10.24 20.48 20.48v5.12c0 10.24-10.24 20.48-20.48 20.48z" fill="" ></path>' +
    '' +
    '<path d="M972.8 0H51.2C20.48 0 0 20.48 0 51.2v921.6c0 30.72 20.48 51.2 51.2 51.2h921.6c30.72 0 51.2-20.48 51.2-51.2V51.2c0-30.72-20.48-51.2-51.2-51.2z m0 947.2c0 15.36-10.24 25.6-25.6 25.6h-870.4c-15.36 0-25.6-10.24-25.6-25.6v-870.4c0-15.36 10.24-25.6 25.6-25.6h870.4c15.36 0 25.6 10.24 25.6 25.6v870.4z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)