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
    
      
      
    
      var element = document.getElementById("520302ea-f799-4f37-b1de-2225d05a6f08");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '520302ea-f799-4f37-b1de-2225d05a6f08' but no matching script tag was found.")
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
                    
                  var docs_json = '{"e7d28d16-835c-4bff-93c4-9b8ddef1c1be":{"roots":{"references":[{"attributes":{"children":[[{"id":"17287"},0,0]]},"id":"17365","type":"GridBox"},{"attributes":{"data_source":{"id":"17323"},"glyph":{"id":"17324"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17325"},"selection_glyph":null,"view":{"id":"17327"}},"id":"17326","type":"GlyphRenderer"},{"attributes":{"axis_label":"Total number of draws","formatter":{"id":"17351"},"ticker":{"id":"17297"}},"id":"17296","type":"LinearAxis"},{"attributes":{"axis_label":"ESS","formatter":{"id":"17353"},"ticker":{"id":"17301"}},"id":"17300","type":"LinearAxis"},{"attributes":{"source":{"id":"17338"}},"id":"17342","type":"CDSView"},{"attributes":{},"id":"17292","type":"LinearScale"},{"attributes":{},"id":"17351","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"17304"},{"id":"17305"},{"id":"17306"},{"id":"17307"},{"id":"17308"},{"id":"17309"},{"id":"17310"},{"id":"17311"}]},"id":"17314","type":"Toolbar"},{"attributes":{"data_source":{"id":"17328"},"glyph":{"id":"17329"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17330"},"selection_glyph":null,"view":{"id":"17332"}},"id":"17331","type":"GlyphRenderer"},{"attributes":{},"id":"17301","type":"BasicTicker"},{"attributes":{"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"17343","type":"Span"},{"attributes":{"toolbar":{"id":"17366"},"toolbar_location":"above"},"id":"17367","type":"ToolbarBox"},{"attributes":{"click_policy":"hide","items":[{"id":"17345"},{"id":"17346"}],"location":"center_right","orientation":"horizontal"},"id":"17344","type":"Legend"},{"attributes":{"children":[{"id":"17367"},{"id":"17365"}]},"id":"17368","type":"Column"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"0glo/ZHQYUCWuV3JG5ppQMqT1P2iwXVAqY8DrPB3e0Bh+Z3qJ/WAQBkscwHQK4RAmBvOlEfWikBL3Hu21ASOQLfWD/YkmpBAzy5bwfaykkBL+YYwKf6TQNX3Ngx5b5VAciIDv7ZVlkBpY4usN1KYQKnVB/o5gplAPOgo6bOym0CHt7M3Mq+fQCfqDPZjtqBAJ784mgSeoUD/m8TvrdqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"17357"},"selection_policy":{"id":"17356"}},"id":"17328","type":"ColumnDataSource"},{"attributes":{"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"17334","type":"Line"},{"attributes":{},"id":"17297","type":"BasicTicker"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"17330","type":"Line"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"17313","type":"PolyAnnotation"},{"attributes":{"data_source":{"id":"17333"},"glyph":{"id":"17334"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17335"},"selection_glyph":null,"view":{"id":"17337"}},"id":"17336","type":"GlyphRenderer"},{"attributes":{},"id":"17309","type":"UndoTool"},{"attributes":{"above":[{"id":"17344"}],"below":[{"id":"17296"}],"center":[{"id":"17299"},{"id":"17303"}],"left":[{"id":"17300"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"17326"},{"id":"17331"},{"id":"17336"},{"id":"17341"},{"id":"17343"}],"title":{"id":"17347"},"toolbar":{"id":"17314"},"toolbar_location":null,"x_range":{"id":"17288"},"x_scale":{"id":"17292"},"y_range":{"id":"17290"},"y_scale":{"id":"17294"}},"id":"17287","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"17353","type":"BasicTickFormatter"},{"attributes":{},"id":"17359","type":"Selection"},{"attributes":{},"id":"17294","type":"LinearScale"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"orange"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"17339","type":"Circle"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkD/4xVCu9ZkQIwda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"17361"},"selection_policy":{"id":"17360"}},"id":"17338","type":"ColumnDataSource"},{"attributes":{"text":"b"},"id":"17347","type":"Title"},{"attributes":{},"id":"17354","type":"UnionRenderers"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkD/4xVCu9ZkQIwda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"17359"},"selection_policy":{"id":"17358"}},"id":"17333","type":"ColumnDataSource"},{"attributes":{},"id":"17290","type":"DataRange1d"},{"attributes":{},"id":"17360","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"17312"}},"id":"17306","type":"BoxZoomTool"},{"attributes":{"toolbars":[{"id":"17314"}],"tools":[{"id":"17304"},{"id":"17305"},{"id":"17306"},{"id":"17307"},{"id":"17308"},{"id":"17309"},{"id":"17310"},{"id":"17311"}]},"id":"17366","type":"ProxyToolbar"},{"attributes":{"callback":null},"id":"17311","type":"HoverTool"},{"attributes":{},"id":"17361","type":"Selection"},{"attributes":{"overlay":{"id":"17313"}},"id":"17308","type":"LassoSelectTool"},{"attributes":{},"id":"17356","type":"UnionRenderers"},{"attributes":{},"id":"17305","type":"PanTool"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"0glo/ZHQYUCWuV3JG5ppQMqT1P2iwXVAqY8DrPB3e0Bh+Z3qJ/WAQBkscwHQK4RAmBvOlEfWikBL3Hu21ASOQLfWD/YkmpBAzy5bwfaykkBL+YYwKf6TQNX3Ngx5b5VAciIDv7ZVlkBpY4usN1KYQKnVB/o5gplAPOgo6bOym0CHt7M3Mq+fQCfqDPZjtqBAJ784mgSeoUD/m8TvrdqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"17355"},"selection_policy":{"id":"17354"}},"id":"17323","type":"ColumnDataSource"},{"attributes":{},"id":"17355","type":"Selection"},{"attributes":{},"id":"17357","type":"Selection"},{"attributes":{"axis":{"id":"17296"},"ticker":null},"id":"17299","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"17312","type":"BoxAnnotation"},{"attributes":{"source":{"id":"17323"}},"id":"17327","type":"CDSView"},{"attributes":{},"id":"17358","type":"UnionRenderers"},{"attributes":{},"id":"17307","type":"WheelZoomTool"},{"attributes":{},"id":"17288","type":"DataRange1d"},{"attributes":{"label":{"value":"tail"},"renderers":[{"id":"17341"},{"id":"17336"}]},"id":"17346","type":"LegendItem"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"17324","type":"Circle"},{"attributes":{"axis":{"id":"17300"},"dimension":1,"ticker":null},"id":"17303","type":"Grid"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"17329","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"17335","type":"Line"},{"attributes":{"source":{"id":"17333"}},"id":"17337","type":"CDSView"},{"attributes":{},"id":"17304","type":"ResetTool"},{"attributes":{"data_source":{"id":"17338"},"glyph":{"id":"17339"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17340"},"selection_glyph":null,"view":{"id":"17342"}},"id":"17341","type":"GlyphRenderer"},{"attributes":{"label":{"value":"bulk"},"renderers":[{"id":"17326"},{"id":"17331"}]},"id":"17345","type":"LegendItem"},{"attributes":{"source":{"id":"17328"}},"id":"17332","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"17325","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"orange"},"line_alpha":{"value":0.1},"line_color":{"value":"orange"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"17340","type":"Circle"},{"attributes":{},"id":"17310","type":"SaveTool"}],"root_ids":["17368"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"e7d28d16-835c-4bff-93c4-9b8ddef1c1be","root_ids":["17368"],"roots":{"17368":"520302ea-f799-4f37-b1de-2225d05a6f08"}}];
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