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
    
      
      
    
      var element = document.getElementById("dbc8cb89-f9cb-4ab4-8729-2fc9c7a6175d");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'dbc8cb89-f9cb-4ab4-8729-2fc9c7a6175d' but no matching script tag was found.")
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
                    
                  var docs_json = '{"fe8cd238-7b88-49a2-818f-f817c004f44c":{"roots":{"references":[{"attributes":{"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"35291","type":"MultiLine"},{"attributes":{"source":{"id":"35285"}},"id":"35289","type":"CDSView"},{"attributes":{},"id":"35302","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"35286","type":"Dash"},{"attributes":{"data_source":{"id":"35290"},"glyph":{"id":"35291"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"35292"},"selection_glyph":null,"view":{"id":"35294"}},"id":"35293","type":"GlyphRenderer"},{"attributes":{},"id":"35304","type":"UnionRenderers"},{"attributes":{"toolbar":{"id":"35310"},"toolbar_location":"above"},"id":"35311","type":"ToolbarBox"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"35266"},{"id":"35267"},{"id":"35268"},{"id":"35269"},{"id":"35270"},{"id":"35271"},{"id":"35272"},{"id":"35273"}]},"id":"35276","type":"Toolbar"},{"attributes":{},"id":"35250","type":"DataRange1d"},{"attributes":{},"id":"35267","type":"PanTool"},{"attributes":{"axis_label":"Value $\\\\pm$ MCSE for quantiles","formatter":{"id":"35301"},"ticker":{"id":"35263"}},"id":"35262","type":"LinearAxis"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"35275","type":"PolyAnnotation"},{"attributes":{},"id":"35254","type":"LinearScale"},{"attributes":{"overlay":{"id":"35274"}},"id":"35268","type":"BoxZoomTool"},{"attributes":{"children":[[{"id":"35249"},0,0]]},"id":"35309","type":"GridBox"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"35274","type":"BoxAnnotation"},{"attributes":{},"id":"35299","type":"BasicTickFormatter"},{"attributes":{},"id":"35263","type":"BasicTicker"},{"attributes":{},"id":"35272","type":"SaveTool"},{"attributes":{"axis":{"id":"35262"},"dimension":1,"ticker":null},"id":"35265","type":"Grid"},{"attributes":{},"id":"35305","type":"Selection"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"35299"},"ticker":{"id":"35259"}},"id":"35258","type":"LinearAxis"},{"attributes":{"text":"sigma_a"},"id":"35295","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"35287","type":"Dash"},{"attributes":{"toolbars":[{"id":"35276"}],"tools":[{"id":"35266"},{"id":"35267"},{"id":"35268"},{"id":"35269"},{"id":"35270"},{"id":"35271"},{"id":"35272"},{"id":"35273"}]},"id":"35310","type":"ProxyToolbar"},{"attributes":{},"id":"35266","type":"ResetTool"},{"attributes":{},"id":"35301","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"35258"},"ticker":null},"id":"35261","type":"Grid"},{"attributes":{"source":{"id":"35290"}},"id":"35294","type":"CDSView"},{"attributes":{"overlay":{"id":"35275"}},"id":"35270","type":"LassoSelectTool"},{"attributes":{"data":{"xs":[[0.05,0.05],[0.09736842105263158,0.09736842105263158],[0.14473684210526316,0.14473684210526316],[0.19210526315789472,0.19210526315789472],[0.23947368421052628,0.23947368421052628],[0.28684210526315784,0.28684210526315784],[0.33421052631578946,0.33421052631578946],[0.381578947368421,0.381578947368421],[0.4289473684210526,0.4289473684210526],[0.47631578947368414,0.47631578947368414],[0.5236842105263158,0.5236842105263158],[0.5710526315789474,0.5710526315789474],[0.618421052631579,0.618421052631579],[0.6657894736842105,0.6657894736842105],[0.7131578947368421,0.7131578947368421],[0.7605263157894736,0.7605263157894736],[0.8078947368421052,0.8078947368421052],[0.8552631578947368,0.8552631578947368],[0.9026315789473683,0.9026315789473683],[0.95,0.95]],"ys":[[0.06542507260989384,0.07779740932825195],[0.08783828101486021,0.09606135597316004],[0.09938050528645676,0.10552315572600299],[0.10794861576931342,0.11348270780810846],[0.11602734321885094,0.12203033330056018],[0.12350211909750375,0.12787167939093885],[0.12891616867169003,0.13323376159544686],[0.13473004088066556,0.13958486303584752],[0.14096481555257187,0.1460531576744907],[0.14714684275886325,0.15141900007039433],[0.15249024001585332,0.15717175454660753],[0.15761692093229293,0.16322637365277673],[0.16410729163047846,0.16867037944462424],[0.17025660267247006,0.17489182297617661],[0.17657098829958856,0.18216819265595885],[0.185369502560243,0.18948857007780892],[0.19264880841245133,0.19711830100588604],[0.20027922695307082,0.2044362824100993],[0.2124901683329975,0.2184324622519046],[0.23108929611368745,0.2369230522137875]]},"selected":{"id":"35305"},"selection_policy":{"id":"35304"}},"id":"35290","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"35258"}],"center":[{"id":"35261"},{"id":"35265"}],"left":[{"id":"35262"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"35288"},{"id":"35293"}],"title":{"id":"35295"},"toolbar":{"id":"35276"},"toolbar_location":null,"x_range":{"id":"35250"},"x_scale":{"id":"35254"},"y_range":{"id":"35252"},"y_scale":{"id":"35256"}},"id":"35249","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"35269","type":"WheelZoomTool"},{"attributes":{},"id":"35271","type":"UndoTool"},{"attributes":{"data_source":{"id":"35285"},"glyph":{"id":"35286"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"35287"},"selection_glyph":null,"view":{"id":"35289"}},"id":"35288","type":"GlyphRenderer"},{"attributes":{"children":[{"id":"35311"},{"id":"35309"}]},"id":"35312","type":"Column"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"+Pb8QR1Vsj+MDk73BYq3PyGJcH1IOro/R5qJktxXvD8QN5uHrHi+P+EQ5SCCFsA/nVhJgBDHwD+XHUgZYI7BP8j2F6KAXsI/quCp6LMbwz/9bt2KgNHDP6iPWFCyiMQ/uNKGtzpMxT8aURts6RbGP6Hdfy6V9cY/RM+ntqz9xz+OhgC/8fHIP+aFOeHb5sk//PpdgzyUyz/cM4wQ6vPNPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"35303"},"selection_policy":{"id":"35302"}},"id":"35285","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"35273","type":"HoverTool"},{"attributes":{},"id":"35252","type":"DataRange1d"},{"attributes":{},"id":"35303","type":"Selection"},{"attributes":{},"id":"35256","type":"LinearScale"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"35292","type":"MultiLine"},{"attributes":{},"id":"35259","type":"BasicTicker"}],"root_ids":["35312"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"fe8cd238-7b88-49a2-818f-f817c004f44c","root_ids":["35312"],"roots":{"35312":"dbc8cb89-f9cb-4ab4-8729-2fc9c7a6175d"}}];
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