(function(f) {
  if (typeof exports === "object" && typeof module !== "undefined") {
    module.exports = f()
  } else if (typeof define === "function" && define.amd) {
    define([], f)
  } else {
    var g;
    if (typeof window !== "undefined") {
      g = window
    } else if (typeof global !== "undefined") {
      g = global
    } else if (typeof self !== "undefined") {
      g = self
    } else {
      g = this
    }
    g.dice3d = f()
  }
})(function() {
  var define, module, exports;
  return (function e(t, n, r) {
    function s(o, u) {
      if (!n[o]) {
        if (!t[o]) {
          var a = typeof require == "function" && require;
          if (!u && a) return a(o, !0);
          if (i) return i(o, !0);
          var f = new Error("Cannot find module '" + o + "'");
          throw f.code = "MODULE_NOT_FOUND", f
        }
        var l = n[o] = {
          exports: {}
        };
        t[o][0].call(l.exports, function(e) {
          var n = t[o][1][e];
          return s(n ? n : e)
        }, l, l.exports, e, t, n, r)
      }
      return n[o].exports
    }
    var i = typeof require == "function" && require;
    for (var o = 0; o < r.length; o++) s(r[o]);
    return s
  })({
    1: [function(require, module, exports) {
      'use strict';

      var table;
      var initialized = false;

      var initialize = function initialize() {
        table = document.createElement('div');
        table.id = 'dice3d-table';
        document.body.appendChild(table);

        initialized = true;
      };

      var played = false;

      var dice3d = function dice3d(faces, n, callback) {
        if (!initialized) initialize();

        if (faces == 6) {
          var sound = document.getElementById('dice3d-sound');

          if (!played || sound.ended) {
            played = true;
            sound.play();
          } else {
            var audio = document.createElement('audio');
            audio.src = sound.src;
            audio.volume = sound.volume;
            setTimeout(function() {
              audio.play();
            }, Math.random() * 500);
          }

          var angle = {
            1: [90, 0],
            2: [0, 90],
            3: [180, 0],
            4: [0, 0],
            5: [0, -90],
            6: [-90, 0]
          }[n];
          var outer = document.createElement('div');
          outer.className = 'dice3d-outer';
          table.appendChild(outer);

          var dice = document.createElement('div');
          dice.className = 'dice3d';
          dice.style.transform = 'rotateX(' + angle[0] + 'deg) rotateZ(' + angle[1] + 'deg)';
          outer.appendChild(dice);

          var getFace = function getFace(pips) {
            var XMLNS = "http://www.w3.org/2000/svg";
            var svg = document.createElementNS(XMLNS, 'svg');
            svg.setAttribute('class', 'dice3d-face');
            svg.setAttribute('width', 32);
            svg.setAttribute('height', 32);

            pips.map(function(pip) {
              var circle = document.createElementNS(XMLNS, 'circle');
              Object.keys(pip).forEach(function(key) {
                return circle.setAttribute(key, pip[key]);
              });
              return circle;
            }).forEach(function(circle) {
              return svg.appendChild(circle);
            });

            return svg;
          };

          [
            [{
              cx: 16,
              cy: 16,
              r: 6,
              fill: 'red'
            }],
            [{
              cx: 8,
              cy: 8,
              r: 3
            }, {
              cx: 24,
              cy: 24,
              r: 3
            }],
            [{
              cx: 8,
              cy: 8,
              r: 3
            }, {
              cx: 16,
              cy: 16,
              r: 3
            }, {
              cx: 24,
              cy: 24,
              r: 3
            }],
            [{
              cx: 8,
              cy: 8,
              r: 3
            }, {
              cx: 24,
              cy: 24,
              r: 3
            }, {
              cx: 8,
              cy: 24,
              r: 3
            }, {
              cx: 24,
              cy: 8,
              r: 3
            }],
            [{
              cx: 8,
              cy: 8,
              r: 3
            }, {
              cx: 16,
              cy: 16,
              r: 3
            }, {
              cx: 24,
              cy: 24,
              r: 3
            }, {
              cx: 8,
              cy: 24,
              r: 3
            }, {
              cx: 24,
              cy: 8,
              r: 3
            }],
            [{
              cx: 8,
              cy: 8,
              r: 3
            }, {
              cx: 24,
              cy: 24,
              r: 3
            }, {
              cx: 8,
              cy: 16,
              r: 3
            }, {
              cx: 24,
              cy: 16,
              r: 3
            }, {
              cx: 8,
              cy: 24,
              r: 3
            }, {
              cx: 24,
              cy: 8,
              r: 3
            }]
          ].map(getFace).forEach(function(face) {
            return dice.appendChild(face);
          });

          setTimeout(function() {
            outer.addEventListener('transitionend', function(e) {
              if (callback) {
                callback();
              }
              table.removeChild(this);
            });
            outer.style.opacity = 0;
            outer.style.visibility='hidden';
          }, 2 * 1000);
        } else {
          console.error('Unsupported number of faces: ' + faces);
        }
      };

      module.exports = dice3d;

    }, {}]
  }, {}, [1])(1)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqc1xcZGljZTNkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7O0FBRUEsSUFBSSxLQUFKO0FBQ0EsSUFBSSxjQUFjLEtBQWQ7O0FBRUosSUFBSSxhQUFhLFNBQWIsVUFBYSxHQUFXO0FBQ3hCLFlBQVEsU0FBUyxhQUFULENBQXVCLEtBQXZCLENBQVIsQ0FEd0I7QUFFeEIsVUFBTSxFQUFOLEdBQVcsY0FBWCxDQUZ3QjtBQUd4QixhQUFTLElBQVQsQ0FBYyxXQUFkLENBQTBCLEtBQTFCLEVBSHdCOztBQUt4QixrQkFBYyxJQUFkLENBTHdCO0NBQVg7O0FBUWpCLElBQUksU0FBUyxLQUFUOztBQUVKLElBQUksU0FBUyxTQUFULE1BQVMsQ0FBUyxLQUFULEVBQWdCLENBQWhCLEVBQW1CLFFBQW5CLEVBQTZCO0FBQ3RDLFFBQUksQ0FBQyxXQUFELEVBQWMsYUFBbEI7O0FBRUEsUUFBSSxTQUFTLENBQVQsRUFBWTtBQUNaLFlBQUksUUFBUSxTQUFTLGNBQVQsQ0FBd0IsY0FBeEIsQ0FBUixDQURROztBQUdaLFlBQUksQ0FBQyxNQUFELElBQVcsTUFBTSxLQUFOLEVBQWE7QUFDeEIscUJBQVMsSUFBVCxDQUR3QjtBQUV4QixrQkFBTSxJQUFOLEdBRndCO1NBQTVCLE1BR087QUFDSCxnQkFBSSxRQUFRLFNBQVMsYUFBVCxDQUF1QixPQUF2QixDQUFSLENBREQ7QUFFSCxrQkFBTSxHQUFOLEdBQVksTUFBTSxHQUFOLENBRlQ7QUFHSCxrQkFBTSxNQUFOLEdBQWUsTUFBTSxNQUFOLENBSFo7QUFJSCx1QkFBVyxZQUFXO0FBQ2xCLHNCQUFNLElBQU4sR0FEa0I7YUFBWCxFQUVSLEtBQUssTUFBTCxLQUFnQixHQUFoQixDQUZILENBSkc7U0FIUDs7QUFZQSxZQUFJLFFBQVE7QUFDUixlQUFHLENBQUMsRUFBRCxFQUFLLENBQUwsQ0FBSDtBQUNBLGVBQUcsQ0FBQyxDQUFELEVB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QUFoQixNQW1FTztBQUNILGdCQUFRLEtBQVIsQ0FBYyxrQ0FBa0MsS0FBbEMsQ0FBZCxDQURHO0tBbkVQO0NBSFM7O0FBMkViLE9BQU8sT0FBUCxHQUFpQixNQUFqQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgdGFibGU7XHJcbnZhciBpbml0aWFsaXplZCA9IGZhbHNlO1xyXG5cclxudmFyIGluaXRpYWxpemUgPSBmdW5jdGlvbigpIHtcclxuICAgIHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0YWJsZS5pZCA9ICdkaWNlM2QtdGFibGUnO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0YWJsZSk7XHJcblxyXG4gICAgaW5pdGlhbGl6ZWQgPSB0cnVlO1xyXG59O1xyXG5cclxudmFyIHBsYXllZCA9IGZhbHNlO1xyXG5cclxudmFyIGRpY2UzZCA9IGZ1bmN0aW9uKGZhY2VzLCBuLCBjYWxsYmFjaykge1xyXG4gICAgaWYgKCFpbml0aWFsaXplZCkgaW5pdGlhbGl6ZSgpO1xyXG5cclxuICAgIGlmIChmYWNlcyA9PSA2KSB7XHJcbiAgICAgICAgdmFyIHNvdW5kID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RpY2UzZC1zb3VuZCcpO1xyXG5cclxuICAgICAgICBpZiAoIXBsYXllZCB8fCBzb3VuZC5lbmRlZCkge1xyXG4gICAgICAgICAgICBwbGF5ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBzb3VuZC5wbGF5KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIGF1ZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXVkaW8nKTtcclxuICAgICAgICAgICAgYXVkaW8uc3JjID0gc291bmQuc3JjO1xyXG4gICAgICAgICAgICBhdWRpby52b2x1bWUgPSBzb3VuZC52b2x1bWU7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBhdWRpby5wbGF5KCk7XHJcbiAgICAgICAgICAgIH0sIE1hdGgucmFuZG9tKCkgKiA1MDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGFuZ2xlID0ge1xyXG4gICAgICAgICAgICAxOiBbOTAsIDBdLFxyXG4gICAgICAgICAgICAyOiBbMCwgOTBdLFxyXG4gICAgICAgICAgICAzOiBbMTgwLCAwXSxcclxuICAgICAgICAgICAgNDogWzAsIDBdLFxyXG4gICAgICAgICAgICA1OiBbMCwgLTkwXSxcclxuICAgICAgICAgICAgNjogWy05MCwgMF0sXHJcbiAgICAgICAgfVtuXTtcclxuICAgICAgICB2YXIgb3V0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBvdXRlci5jbGFzc05hbWUgPSAnZGljZTNkLW91dGVyJztcclxuICAgICAgICB0YWJsZS5hcHBlbmRDaGlsZChvdXRlcik7XHJcblxyXG4gICAgICAgIHZhciBkaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZGljZS5jbGFzc05hbWUgPSAnZGljZTNkJztcclxuICAgICAgICBkaWNlLnN0eWxlLnRyYW5zZm9ybSA9IGByb3RhdGVYKCR7YW5nbGVbMF19ZGVnKSByb3RhdGVaKCR7YW5nbGVbMV19ZGVnKWA7XHJcbiAgICAgICAgb3V0ZXIuYXBwZW5kQ2hpbGQoZGljZSk7XHJcblxyXG4gICAgICAgIHZhciBnZXRGYWNlID0gZnVuY3Rpb24ocGlwcykge1xyXG4gICAgICAgICAgICBjb25zdCBYTUxOUyA9IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIjtcclxuICAgICAgICAgICAgdmFyIHN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhYTUxOUywgJ3N2ZycpO1xyXG4gICAgICAgICAgICBzdmcuc2V0QXR0cmlidXRlKCdjbGFzcycsICdkaWNlM2QtZmFjZScpO1xyXG4gICAgICAgICAgICBzdmcuc2V0QXR0cmlidXRlKCd3aWR0aCcsIDMyKTtcclxuICAgICAgICAgICAgc3ZnLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgMzIpO1xyXG5cclxuICAgICAgICAgICAgcGlwcy5tYXAoZnVuY3Rpb24ocGlwKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY2lyY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFhNTE5TLCAnY2lyY2xlJyk7XHJcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhwaXApLmZvckVhY2goa2V5ID0+IGNpcmNsZS5zZXRBdHRyaWJ1dGUoa2V5LCBwaXBba2V5XSkpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNpcmNsZTtcclxuICAgICAgICAgICAgfSkuZm9yRWFjaChjaXJjbGUgPT4gc3ZnLmFwcGVuZENoaWxkKGNpcmNsZSkpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHN2ZztcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBbXHJcbiAgICAgICAgICAgIFt7IGN4OiAxNiwgY3k6IDE2LCByOiA2LCBmaWxsOiAncmVkJyB9XSxcclxuICAgICAgICAgICAgW3sgY3g6IDgsIGN5OiA4LCByOiAzIH0sIHsgY3g6IDI0LCBjeTogMjQsIHI6IDMgfV0sXHJcbiAgICAgICAgICAgIFt7IGN4OiA4LCBjeTogOCwgcjogMyB9LCB7IGN4OiAxNiwgY3k6IDE2LCByOiAzIH0sIHsgY3g6IDI0LCBjeTogMjQsIHI6IDMgfV0sXHJcbiAgICAgICAgICAgIFt7IGN4OiA4LCBjeTogOCwgcjogMyB9LCB7IGN4OiAyNCwgY3k6IDI0LCByOiAzIH0sIHsgY3g6IDgsIGN5OiAyNCwgcjogMyB9LCB7IGN4OiAyNCwgY3k6IDgsIHI6IDMgfV0sXHJcbiAgICAgICAgICAgIFt7IGN4OiA4LCBjeTogOCwgcjogMyB9LCB7IGN4OiAxNiwgY3k6IDE2LCByOiAzIH0sIHsgY3g6IDI0LCBjeTogMjQsIHI6IDMgfSwgeyBjeDogOCwgY3k6IDI0LCByOiAzIH0sIHsgY3g6IDI0LCBjeTogOCwgcjogMyB9XSxcclxuICAgICAgICAgICAgW3sgY3g6IDgsIGN5OiA4LCByOiAzIH0sIHsgY3g6IDI0LCBjeTogMjQsIHI6IDMgfSwgeyBjeDogOCwgY3k6IDE2LCByOiAzIH0sIHsgY3g6IDI0LCBjeTogMTYsIHI6IDMgfSwgeyBjeDogOCwgY3k6IDI0LCByOiAzIH0sIHsgY3g6IDI0LCBjeTogOCwgcjogMyB9XSxcclxuICAgICAgICBdLm1hcChnZXRGYWNlKS5mb3JFYWNoKGZhY2UgPT4gZGljZS5hcHBlbmRDaGlsZChmYWNlKSk7XHJcblxyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgb3V0ZXIuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgICAgIHRhYmxlLnJlbW92ZUNoaWxkKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIG91dGVyLnN0eWxlLm9wYWNpdHkgPSAwOztcclxuICAgICAgICB9LCAzICogMTAwMCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1Vuc3VwcG9ydGVkIG51bWJlciBvZiBmYWNlczogJyArIGZhY2VzKTtcclxuICAgIH1cclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZGljZTNkO1xyXG4iXX0=
