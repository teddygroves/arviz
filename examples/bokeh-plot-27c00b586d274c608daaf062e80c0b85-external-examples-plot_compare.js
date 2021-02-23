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
    
      
      
    
      var element = document.getElementById("b7d3e306-4e9a-4204-965f-683e7973191e");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'b7d3e306-4e9a-4204-965f-683e7973191e' but no matching script tag was found.")
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
                    
                  var docs_json = '{"53c31daf-5ace-4990-b5ff-b02ca3b3094e":{"roots":{"references":[{"attributes":{"data_source":{"id":"14919"},"glyph":{"id":"14920"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"14921"},"selection_glyph":null,"view":{"id":"14923"}},"id":"14922","type":"GlyphRenderer"},{"attributes":{},"id":"14931","type":"Selection"},{"attributes":{"callback":null},"id":"14885","type":"HoverTool"},{"attributes":{},"id":"14866","type":"LinearScale"},{"attributes":{"data_source":{"id":"14904"},"glyph":{"id":"14905"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"14906"},"selection_glyph":null,"view":{"id":"14908"}},"id":"14907","type":"GlyphRenderer"},{"attributes":{"children":[{"id":"14945"},{"id":"14943"}]},"id":"14946","type":"Column"},{"attributes":{"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"14905","type":"MultiLine"},{"attributes":{"formatter":{"id":"14929"},"major_label_overrides":{"-0.75":"","-1":"Centered 8 schools","0":"Non-centered 8 schools"},"ticker":{"id":"14897"}},"id":"14874","type":"LinearAxis"},{"attributes":{},"id":"14938","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"14899"},"glyph":{"id":"14900"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"14901"},"selection_glyph":null,"view":{"id":"14903"}},"id":"14902","type":"GlyphRenderer"},{"attributes":{},"id":"14878","type":"ResetTool"},{"attributes":{},"id":"14939","type":"Selection"},{"attributes":{"data":{"xs":[[-32.052286212415325,-29.322294424364305],[-32.23721121836336,-29.383537134836743]],"ys":[[0.0,0.0],[-1.0,-1.0]]},"selected":{"id":"14937"},"selection_policy":{"id":"14936"}},"id":"14914","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":null},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"14910","type":"Circle"},{"attributes":{"axis_label":"Log","formatter":{"id":"14928"},"ticker":{"id":"14871"}},"id":"14870","type":"LinearAxis"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"14887","type":"PolyAnnotation"},{"attributes":{"data":{"xs":[[-30.896420573800544,-30.724327779399562]],"ys":[[-0.75,-0.75]]},"selected":{"id":"14933"},"selection_policy":{"id":"14932"}},"id":"14904","type":"ColumnDataSource"},{"attributes":{},"id":"14868","type":"LinearScale"},{"attributes":{"source":{"id":"14899"}},"id":"14903","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"grey"},"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"14901","type":"Triangle"},{"attributes":{"source":{"id":"14919"}},"id":"14923","type":"CDSView"},{"attributes":{"text":""},"id":"14925","type":"Title"},{"attributes":{"data":{"x":{"__ndarray__":"m/f9Q2zYPcDPGP3dN9s9wA==","dtype":"float64","order":"little","shape":[2]},"y":[0.0,-1.0]},"selected":{"id":"14939"},"selection_policy":{"id":"14938"}},"id":"14919","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"black"},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"14921","type":"Circle"},{"attributes":{"toolbar":{"id":"14944"},"toolbar_location":"above"},"id":"14945","type":"ToolbarBox"},{"attributes":{},"id":"14928","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"14870"}],"center":[{"id":"14873"},{"id":"14877"}],"left":[{"id":"14874"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"14902"},{"id":"14907"},{"id":"14912"},{"id":"14917"},{"id":"14922"},{"id":"14924"}],"title":{"id":"14925"},"toolbar":{"id":"14888"},"toolbar_location":null,"x_range":{"id":"14862"},"x_scale":{"id":"14866"},"y_range":{"id":"14864"},"y_scale":{"id":"14868"}},"id":"14861","subtype":"Figure","type":"Plot"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"14906","type":"MultiLine"},{"attributes":{"data":{"x":{"__ndarray__":"KQWarnTPPsA=","dtype":"float64","order":"little","shape":[1]},"y":[-0.75]},"selected":{"id":"14931"},"selection_policy":{"id":"14930"}},"id":"14899","type":"ColumnDataSource"},{"attributes":{"line_alpha":{"value":0.1},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"14916","type":"MultiLine"},{"attributes":{"end":0.5,"start":-1.5},"id":"14864","type":"DataRange1d"},{"attributes":{},"id":"14934","type":"UnionRenderers"},{"attributes":{},"id":"14879","type":"PanTool"},{"attributes":{"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"14915","type":"MultiLine"},{"attributes":{"source":{"id":"14909"}},"id":"14913","type":"CDSView"},{"attributes":{},"id":"14937","type":"Selection"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"14886","type":"BoxAnnotation"},{"attributes":{},"id":"14933","type":"Selection"},{"attributes":{"axis":{"id":"14874"},"dimension":1,"ticker":null},"id":"14877","type":"Grid"},{"attributes":{"children":[[{"id":"14861"},0,0]]},"id":"14943","type":"GridBox"},{"attributes":{"source":{"id":"14914"}},"id":"14918","type":"CDSView"},{"attributes":{"data_source":{"id":"14914"},"glyph":{"id":"14915"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"14916"},"selection_glyph":null,"view":{"id":"14918"}},"id":"14917","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"14887"}},"id":"14882","type":"LassoSelectTool"},{"attributes":{},"id":"14936","type":"UnionRenderers"},{"attributes":{},"id":"14930","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":null},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"14911","type":"Circle"},{"attributes":{},"id":"14881","type":"WheelZoomTool"},{"attributes":{},"id":"14932","type":"UnionRenderers"},{"attributes":{"dimension":"height","line_color":"grey","line_dash":[6],"line_width":1.7677669529663689,"location":-30.687290318389813},"id":"14924","type":"Span"},{"attributes":{},"id":"14862","type":"DataRange1d"},{"attributes":{"data_source":{"id":"14909"},"glyph":{"id":"14910"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"14911"},"selection_glyph":null,"view":{"id":"14913"}},"id":"14912","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"black"},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"14920","type":"Circle"},{"attributes":{"ticks":[0.0,-0.75,-1.0]},"id":"14897","type":"FixedTicker"},{"attributes":{},"id":"14884","type":"SaveTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"14878"},{"id":"14879"},{"id":"14880"},{"id":"14881"},{"id":"14882"},{"id":"14883"},{"id":"14884"},{"id":"14885"}]},"id":"14888","type":"Toolbar"},{"attributes":{"source":{"id":"14904"}},"id":"14908","type":"CDSView"},{"attributes":{},"id":"14883","type":"UndoTool"},{"attributes":{},"id":"14935","type":"Selection"},{"attributes":{"fill_color":{"value":"grey"},"line_color":{"value":"grey"},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"14900","type":"Triangle"},{"attributes":{"data":{"x":{"__ndarray__":"eFcgQvKvPsApBZqudM8+wA==","dtype":"float64","order":"little","shape":[2]},"y":[0.0,-1.0]},"selected":{"id":"14935"},"selection_policy":{"id":"14934"}},"id":"14909","type":"ColumnDataSource"},{"attributes":{},"id":"14929","type":"BasicTickFormatter"},{"attributes":{"toolbars":[{"id":"14888"}],"tools":[{"id":"14878"},{"id":"14879"},{"id":"14880"},{"id":"14881"},{"id":"14882"},{"id":"14883"},{"id":"14884"},{"id":"14885"}]},"id":"14944","type":"ProxyToolbar"},{"attributes":{"overlay":{"id":"14886"}},"id":"14880","type":"BoxZoomTool"},{"attributes":{"axis":{"id":"14870"},"ticker":null},"id":"14873","type":"Grid"},{"attributes":{},"id":"14871","type":"BasicTicker"}],"root_ids":["14946"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"53c31daf-5ace-4990-b5ff-b02ca3b3094e","root_ids":["14946"],"roots":{"14946":"b7d3e306-4e9a-4204-965f-683e7973191e"}}];
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