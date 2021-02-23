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
    
      
      
    
      var element = document.getElementById("8be2df27-b310-417f-a8b3-70a7d915afb6");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '8be2df27-b310-417f-a8b3-70a7d915afb6' but no matching script tag was found.")
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
                    
                  var docs_json = '{"3ecb4420-7bf1-493c-80ce-031b01896649":{"roots":{"references":[{"attributes":{"axis":{"id":"17060"},"dimension":1,"ticker":null},"id":"17063","type":"Grid"},{"attributes":{},"id":"17094","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"17064"},{"id":"17065"},{"id":"17066"},{"id":"17067"},{"id":"17068"},{"id":"17069"},{"id":"17070"},{"id":"17071"}]},"id":"17074","type":"Toolbar"},{"attributes":{},"id":"17064","type":"ResetTool"},{"attributes":{"callback":null},"id":"17071","type":"HoverTool"},{"attributes":{"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","order":"little","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"gA887TQjqb8AatEMjdaMvwDAoFmzDUE/AIkKht05k7+A2X/x9IekPwAArX2oaFM/QNQFB3wcsb8Am1vpFXuQvw==","dtype":"float64","order":"little","shape":[8]}},"selected":{"id":"17095"},"selection_policy":{"id":"17094"}},"id":"17084","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"17091"},"ticker":{"id":"17057"}},"id":"17056","type":"LinearAxis"},{"attributes":{},"id":"17093","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"17073","type":"PolyAnnotation"},{"attributes":{},"id":"17048","type":"DataRange1d"},{"attributes":{"children":[[{"id":"17047"},0,0]]},"id":"17099","type":"GridBox"},{"attributes":{},"id":"17067","type":"WheelZoomTool"},{"attributes":{"axis_label":"ELPD difference","formatter":{"id":"17093"},"ticker":{"id":"17061"}},"id":"17060","type":"LinearAxis"},{"attributes":{"overlay":{"id":"17072"}},"id":"17066","type":"BoxZoomTool"},{"attributes":{},"id":"17052","type":"LinearScale"},{"attributes":{},"id":"17057","type":"BasicTicker"},{"attributes":{},"id":"17069","type":"UndoTool"},{"attributes":{},"id":"17061","type":"BasicTicker"},{"attributes":{"axis":{"id":"17056"},"ticker":null},"id":"17059","type":"Grid"},{"attributes":{},"id":"17065","type":"PanTool"},{"attributes":{},"id":"17054","type":"LinearScale"},{"attributes":{"toolbars":[{"id":"17074"}],"tools":[{"id":"17064"},{"id":"17065"},{"id":"17066"},{"id":"17067"},{"id":"17068"},{"id":"17069"},{"id":"17070"},{"id":"17071"}]},"id":"17100","type":"ProxyToolbar"},{"attributes":{"overlay":{"id":"17073"}},"id":"17068","type":"LassoSelectTool"},{"attributes":{"line_color":{"value":"#2a2eec"},"size":{"field":"sizes","units":"screen"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"17083","type":"Cross"},{"attributes":{"below":[{"id":"17056"}],"center":[{"id":"17059"},{"id":"17063"}],"left":[{"id":"17060"}],"output_backend":"webgl","plot_height":288,"plot_width":432,"renderers":[{"id":"17085"}],"title":{"id":"17087"},"toolbar":{"id":"17074"},"toolbar_location":null,"x_range":{"id":"17048"},"x_scale":{"id":"17052"},"y_range":{"id":"17050"},"y_scale":{"id":"17054"}},"id":"17047","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"17084"},"glyph":{"id":"17083"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"17086"}},"id":"17085","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"17072","type":"BoxAnnotation"},{"attributes":{"source":{"id":"17084"}},"id":"17086","type":"CDSView"},{"attributes":{"text":"Centered eight - Non centered eight"},"id":"17087","type":"Title"},{"attributes":{},"id":"17091","type":"BasicTickFormatter"},{"attributes":{},"id":"17095","type":"Selection"},{"attributes":{},"id":"17070","type":"SaveTool"},{"attributes":{"toolbar":{"id":"17100"},"toolbar_location":"above"},"id":"17101","type":"ToolbarBox"},{"attributes":{"children":[{"id":"17101"},{"id":"17099"}]},"id":"17102","type":"Column"},{"attributes":{},"id":"17050","type":"DataRange1d"}],"root_ids":["17102"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"3ecb4420-7bf1-493c-80ce-031b01896649","root_ids":["17102"],"roots":{"17102":"8be2df27-b310-417f-a8b3-70a7d915afb6"}}];
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