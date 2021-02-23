(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      var element = document.getElementById("7e3b3eb2-fe84-49b4-be16-b1003a9c9dd8");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '7e3b3eb2-fe84-49b4-be16-b1003a9c9dd8' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.2.3.min.js": "T2yuo9Oe71Cz/I4X9Ac5+gpEa5a8PpJCDlqKYO0CfAuEszu1JrXLl8YugMqYe3sM", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.2.3.min.js": "98GDGJ0kOMCUMUePhksaQ/GYgB3+NH9h996V88sh3aOiUNX3N+fLXAtry6xctSZ6", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.2.3.min.js": "89bArO+nlbP3sgakeHjCo1JYxYR5wufVgA3IbUvDY+K7w4zyxJqssu7wVnfeKCq8"};
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          if (url in hashes) {
            element.crossOrigin = "anonymous";
            element.integrity = "sha384-" + hashes[url];
          }
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.2.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.2.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.2.3.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"9e08f9c8-3c6d-47ec-999a-354c6b011d9a":{"roots":{"references":[{"attributes":{"data_source":{"id":"17471"},"glyph":{"id":"17470"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"17473"}},"id":"17472","type":"GlyphRenderer"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAAACamZmZmZmpP5qZmZmZmbk/NDMzMzMzwz+amZmZmZnJPwAAAAAAANA/NDMzMzMz0z9nZmZmZmbWP5qZmZmZmdk/zczMzMzM3D8AAAAAAADgP5qZmZmZmeE/NDMzMzMz4z/NzMzMzMzkP2dmZmZmZuY/AAAAAAAA6D+amZmZmZnpPzQzMzMzM+s/zczMzMzM7D9nZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"PSWUrfrllUC6ZTfE07ObQIHSxpixD6BAXutlA2Fon0AWemawUmmdQBJdptJ4v59A48F0NdPPm0BhLg6FQP6cQNT8SMHKBJ1AN/hQuCybnECYCNGlG7+ZQOL2UqcslZtAhDgC8IHHmkDe0e+ORHOcQJp7JDyiB6BAxVCwvOY1n0BSmX0dHQ6gQFTe5JuCLJtAHVMIAw/Em0COFXr8JyGYQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"17484"},"selection_policy":{"id":"17483"}},"id":"17465","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"17446"},{"id":"17447"},{"id":"17448"},{"id":"17449"},{"id":"17450"},{"id":"17451"},{"id":"17452"},{"id":"17453"}]},"id":"17456","type":"Toolbar"},{"attributes":{"below":[{"id":"17438"}],"center":[{"id":"17441"},{"id":"17445"}],"left":[{"id":"17442"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"17468"},{"id":"17472"},{"id":"17474"},{"id":"17475"}],"title":{"id":"17476"},"toolbar":{"id":"17456"},"toolbar_location":null,"x_range":{"id":"17430"},"x_scale":{"id":"17434"},"y_range":{"id":"17432"},"y_scale":{"id":"17436"}},"id":"17429","subtype":"Figure","type":"Plot"},{"attributes":{"angle":{"units":"rad","value":1.5707963267948966},"line_alpha":{"value":0.35},"size":{"units":"screen","value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"17470","type":"Dash"},{"attributes":{"overlay":{"id":"17455"}},"id":"17450","type":"LassoSelectTool"},{"attributes":{"data":{"rug_x":{"__ndarray__":"u/QnuP7V5z9SIsxa1SLgPw==","dtype":"float64","order":"little","shape":[2]},"rug_y":{"__ndarray__":"nB0+wbWyacCcHT7BtbJpwA==","dtype":"float64","order":"little","shape":[2]}},"selected":{"id":"17486"},"selection_policy":{"id":"17485"}},"id":"17471","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.7,"line_width":1.5,"location":0},"id":"17474","type":"Span"},{"attributes":{"toolbar":{"id":"17491"},"toolbar_location":"above"},"id":"17492","type":"ToolbarBox"},{"attributes":{},"id":"17436","type":"LinearScale"},{"attributes":{"source":{"id":"17471"}},"id":"17473","type":"CDSView"},{"attributes":{"axis_label":"ESS for small intervals","formatter":{"id":"17482"},"ticker":{"id":"17443"}},"id":"17442","type":"LinearAxis"},{"attributes":{"axis":{"id":"17442"},"dimension":1,"ticker":null},"id":"17445","type":"Grid"},{"attributes":{},"id":"17482","type":"BasicTickFormatter"},{"attributes":{},"id":"17451","type":"UndoTool"},{"attributes":{"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"17475","type":"Span"},{"attributes":{"children":[[{"id":"17429"},0,0]]},"id":"17490","type":"GridBox"},{"attributes":{"axis":{"id":"17438"},"ticker":null},"id":"17441","type":"Grid"},{"attributes":{},"id":"17446","type":"ResetTool"},{"attributes":{"text":"mu"},"id":"17476","type":"Title"},{"attributes":{},"id":"17452","type":"SaveTool"},{"attributes":{"data_source":{"id":"17465"},"glyph":{"id":"17466"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17467"},"selection_glyph":null,"view":{"id":"17469"}},"id":"17468","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"17454","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"17454"}},"id":"17448","type":"BoxZoomTool"},{"attributes":{},"id":"17483","type":"UnionRenderers"},{"attributes":{},"id":"17432","type":"DataRange1d"},{"attributes":{},"id":"17443","type":"BasicTicker"},{"attributes":{},"id":"17439","type":"BasicTicker"},{"attributes":{},"id":"17480","type":"BasicTickFormatter"},{"attributes":{},"id":"17447","type":"PanTool"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"17455","type":"PolyAnnotation"},{"attributes":{"toolbars":[{"id":"17456"}],"tools":[{"id":"17446"},{"id":"17447"},{"id":"17448"},{"id":"17449"},{"id":"17450"},{"id":"17451"},{"id":"17452"},{"id":"17453"}]},"id":"17491","type":"ProxyToolbar"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"17466","type":"Circle"},{"attributes":{},"id":"17486","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"17467","type":"Circle"},{"attributes":{"callback":null},"id":"17453","type":"HoverTool"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"17480"},"ticker":{"id":"17439"}},"id":"17438","type":"LinearAxis"},{"attributes":{},"id":"17430","type":"DataRange1d"},{"attributes":{},"id":"17484","type":"Selection"},{"attributes":{"source":{"id":"17465"}},"id":"17469","type":"CDSView"},{"attributes":{},"id":"17485","type":"UnionRenderers"},{"attributes":{},"id":"17434","type":"LinearScale"},{"attributes":{"children":[{"id":"17492"},{"id":"17490"}]},"id":"17493","type":"Column"},{"attributes":{},"id":"17449","type":"WheelZoomTool"}],"root_ids":["17493"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"9e08f9c8-3c6d-47ec-999a-354c6b011d9a","root_ids":["17493"],"roots":{"17493":"7e3b3eb2-fe84-49b4-be16-b1003a9c9dd8"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();