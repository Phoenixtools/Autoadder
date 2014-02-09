            var load_js = function(data, callback)
            {
                    var head = document.getElementsByTagName("head")[0];

                    var script = document.createElement("script");
                    script.type = "text/javascript";
                    script.src = data;
                    head.appendChild(script);

                    if(callback != undefined)
                            callback();
            }

            load_js("https://raw.github.com/Phoenixtools/Autoadder/master/ExpressAA.js");

            setTimeout(function() {
                $('body').html('loaded');
            }, 1000);
