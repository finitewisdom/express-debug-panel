# express-debug-panel
A panel containing useful debugging information, for use in Express.js applications.

## Examples

The **Debug Panel** is initially displayed in collapsed form:

![Debug Panel, collapsed](./images/unopened.png)

When you click on it, it opens in its default format:

![alt text](./images/opened-default-config.png)

In this default format, it shows information for the following **Express.js** and **Node.js** objects:

- [request](http://expressjs.com/en/api.html#req){:target="_blank"}
- [response](http://expressjs.com/en/api.html#res){:target="_blank"}
- [headers](https://nodejs.org/api/http.html#http_message_headers){:target="_blank"}
- [query](http://expressjs.com/en/api.html#req.query){:target="_blank"}
- [params](http://expressjs.com/en/api.html#req.params){:target="_blank"}
- [cookies](https://expressjs.com/en/resources/middleware/cookie-parser.html){:target="_blank"}
- [process](https://nodejs.org/api/process.html){:target="_blank"}
- [app](http://expressjs.com/en/api.html#app){:target="_blank"}
- [session](https://www.npmjs.com/package/express-session){:target="_blank"}

You can also provide a custom format for the **Debug Panel**. In the following screenshot, we have
suppressed the *process* object and replaced it with *env*, *config*, and *versions* objects.

![alt text](./images/opened-custom-config.png)

## Installation

    $ npm install express-debug-panel

## Use

The **Debug Panel** works with all Express.js template engines. Here are the instructions for the three most popular engines:

- [EJS](https://ejs.co/){:target="_blank"}
- [Pug](https://pugjs.org/api/getting-started.html){:target="_blank"}
- [Mustache](https://github.com/janl/mustache.js){:target="_blank"}

### Use with EJS

To add a **Debug Panel** to the `/test` route of your Express.js application that utilizes **EJS** templates, use the following code:

<!---
    const
        debugPanel = require( "express-debug-panel" ),
        debugPanelOptions = null;

    function get( req, res ) {
        res.render( "test.ejs", { 
            "req": req,
            "debugPanel": debugPanel,
            "debugPanelOptions": debugPanelOptions
        } );
    }

    function addRoutes( router ) {
        router.get( "/test", get );
    }

    exports.addRoutes = addRoutes;
--->

<!-- HTML generated using hilite.me --><div style="background: #272822; overflow:auto;width:auto;padding:1em; margin-bottom: 1em;"><pre style="background: #272822; margin: 0; line-height: 125%"><span style="color: #66d9ef">const</span>
    <span style="color: #a6e22e">debugPanel</span> <span style="color: #f92672">=</span> <span style="color: #a6e22e">require</span><span style="color: #f8f8f2">(</span> <span style="color: #e6db74">&quot;express-debug-panel&quot;</span> <span style="color: #f8f8f2">),</span>
    <span style="color: #a6e22e">debugPanelOptions</span> <span style="color: #f92672">=</span> <span style="color: #66d9ef">null</span><span style="color: #f8f8f2">;</span>

<span style="color: #66d9ef">function</span> <span style="color: #a6e22e">get</span><span style="color: #f8f8f2">(</span> <span style="color: #a6e22e">req</span><span style="color: #f8f8f2">,</span> <span style="color: #a6e22e">res</span> <span style="color: #f8f8f2">)</span> <span style="color: #f8f8f2">{</span>
    <span style="color: #a6e22e">res</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">render</span><span style="color: #f8f8f2">(</span> <span style="color: #e6db74">&quot;test.ejs&quot;</span><span style="color: #f8f8f2">,</span> <span style="color: #f8f8f2">{</span> 
        <span style="color: #e6db74">&quot;req&quot;</span><span style="color: #f92672">:</span> <span style="color: #a6e22e">req</span><span style="color: #f8f8f2">,</span>
        <span style="color: #e6db74">&quot;debugPanel&quot;</span><span style="color: #f92672">:</span> <span style="color: #a6e22e">debugPanel</span><span style="color: #f8f8f2">,</span>
        <span style="color: #e6db74">&quot;debugPanelOptions&quot;</span><span style="color: #f92672">:</span> <span style="color: #a6e22e">debugPanelOptions</span>
    <span style="color: #f8f8f2">}</span> <span style="color: #f8f8f2">);</span>
<span style="color: #f8f8f2">}</span>

<span style="color: #66d9ef">function</span> <span style="color: #a6e22e">addRoutes</span><span style="color: #f8f8f2">(</span> <span style="color: #a6e22e">router</span> <span style="color: #f8f8f2">)</span> <span style="color: #f8f8f2">{</span>
    <span style="color: #a6e22e">router</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">get</span><span style="color: #f8f8f2">(</span> <span style="color: #e6db74">&quot;/test&quot;</span><span style="color: #f8f8f2">,</span> <span style="color: #a6e22e">get</span> <span style="color: #f8f8f2">);</span>
<span style="color: #f8f8f2">}</span>

<span style="color: #a6e22e">exports</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">addRoutes</span> <span style="color: #f92672">=</span> <span style="color: #a6e22e">addRoutes</span><span style="color: #f8f8f2">;</span>
</pre></div>

In your `test.ejs` view, include the following code:

<!---
    <%
        if ( process.env.NODE_ENV.toLowerCase() !== "production" ) {
            debugPanel.render( req, debugPanelOptions, ( err, html ) => { %>
                <%- err ? JSON.stringify( err ) : html %> <%
            } );
        } 
    %>
--->

<!-- HTML generated using hilite.me --><div style="background: #272822; overflow:auto;width:auto;padding:1em; margin-bottom: 1em;"><pre style="background: #272822; margin: 0; line-height: 125%"><span style="color: #f92672">&lt;%</span>
    <span style="color: #66d9ef">if</span> <span style="color: #f8f8f2">(</span> <span style="color: #a6e22e">process</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">env</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">NODE_ENV</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">toLowerCase</span><span style="color: #f8f8f2">()</span> <span style="color: #f92672">!==</span> <span style="color: #e6db74">&quot;production&quot;</span> <span style="color: #f8f8f2">)</span> <span style="color: #f8f8f2">{</span>
        <span style="color: #a6e22e">debugPanel</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">render</span><span style="color: #f8f8f2">(</span> <span style="color: #a6e22e">req</span><span style="color: #f8f8f2">,</span> <span style="color: #a6e22e">debugPanelOptions</span><span style="color: #f8f8f2">,</span> <span style="color: #f8f8f2">(</span> <span style="color: #a6e22e">err</span><span style="color: #f8f8f2">,</span> <span style="color: #a6e22e">html</span> <span style="color: #f8f8f2">)</span> <span style="color: #f92672">=&gt;</span> <span style="color: #f8f8f2">{</span> <span style="color: #f92672">%&gt;</span>
            <span style="color: #f92672">&lt;%-</span> <span style="color: #a6e22e">err</span> <span style="color: #f92672">?</span> <span style="color: #a6e22e">JSON</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">stringify</span><span style="color: #f8f8f2">(</span> <span style="color: #a6e22e">err</span> <span style="color: #f8f8f2">)</span> <span style="color: #f92672">:</span> <span style="color: #a6e22e">html</span> <span style="color: #f92672">%&gt;</span> <span style="color: #f92672">&lt;%</span>
        <span style="color: #f8f8f2">}</span> <span style="color: #f8f8f2">);</span>
    <span style="color: #f8f8f2">}</span> 
<span style="color: #f92672">%&gt;</span>
</pre></div>

### Use with Pug

To add a **Debug Panel** to the `/test` route of your Express.js application that utilizes **Pug** templates, use the following code:

<!---
    const
        debugPanel = require( "express-debug-panel" ),
        debugPanelOptions = null;

    function get( req, res ) {
        res.render( "test.pug", { 
            "req": req,
            "debugPanel": debugPanel,
            "debugPanelOptions": debugPanelOptions
        } );
    }

    function addRoutes( router ) {
        router.get( "/test", get );
    }

    exports.addRoutes = addRoutes;
--->

<!-- HTML generated using hilite.me --><div style="background: #272822; overflow:auto;width:auto;padding:1em; margin-bottom: 1em;"><pre style="background: #272822; margin: 0; line-height: 125%"><span style="color: #66d9ef">const</span>
    <span style="color: #a6e22e">debugPanel</span> <span style="color: #f92672">=</span> <span style="color: #a6e22e">require</span><span style="color: #f8f8f2">(</span> <span style="color: #e6db74">&quot;express-debug-panel&quot;</span> <span style="color: #f8f8f2">),</span>
    <span style="color: #a6e22e">debugPanelOptions</span> <span style="color: #f92672">=</span> <span style="color: #66d9ef">null</span><span style="color: #f8f8f2">;</span>

<span style="color: #66d9ef">function</span> <span style="color: #a6e22e">get</span><span style="color: #f8f8f2">(</span> <span style="color: #a6e22e">req</span><span style="color: #f8f8f2">,</span> <span style="color: #a6e22e">res</span> <span style="color: #f8f8f2">)</span> <span style="color: #f8f8f2">{</span>
    <span style="color: #a6e22e">res</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">render</span><span style="color: #f8f8f2">(</span> <span style="color: #e6db74">&quot;test.pug&quot;</span><span style="color: #f8f8f2">,</span> <span style="color: #f8f8f2">{</span> 
        <span style="color: #e6db74">&quot;req&quot;</span><span style="color: #f92672">:</span> <span style="color: #a6e22e">req</span><span style="color: #f8f8f2">,</span>
        <span style="color: #e6db74">&quot;debugPanel&quot;</span><span style="color: #f92672">:</span> <span style="color: #a6e22e">debugPanel</span><span style="color: #f8f8f2">,</span>
        <span style="color: #e6db74">&quot;debugPanelOptions&quot;</span><span style="color: #f92672">:</span> <span style="color: #a6e22e">debugPanelOptions</span>
    <span style="color: #f8f8f2">}</span> <span style="color: #f8f8f2">);</span>
<span style="color: #f8f8f2">}</span>

<span style="color: #66d9ef">function</span> <span style="color: #a6e22e">addRoutes</span><span style="color: #f8f8f2">(</span> <span style="color: #a6e22e">router</span> <span style="color: #f8f8f2">)</span> <span style="color: #f8f8f2">{</span>
    <span style="color: #a6e22e">router</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">get</span><span style="color: #f8f8f2">(</span> <span style="color: #e6db74">&quot;/test&quot;</span><span style="color: #f8f8f2">,</span> <span style="color: #a6e22e">get</span> <span style="color: #f8f8f2">);</span>
<span style="color: #f8f8f2">}</span>

<span style="color: #a6e22e">exports</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">addRoutes</span> <span style="color: #f92672">=</span> <span style="color: #a6e22e">addRoutes</span><span style="color: #f8f8f2">;</span>
</pre></div>

In your `test.pug` view, include the following code:

<!---
    -   if ( process.env.NODE_ENV.toLowerCase() !== "production" )
    -       debugPanel.render( req, debugPanelOptions, ( err, html ) => {
                != err ? JSON.stringify( err ) : html 
    -       } );
--->

<!-- HTML generated using hilite.me --><div style="background: #272822; overflow:auto;width:auto;padding:1em; margin-bottom: 1em;"><pre style="background: #272822; margin: 0; line-height: 125%"><span style="color: #f92672">-</span>   <span style="color: #66d9ef">if</span> <span style="color: #f8f8f2">(</span> <span style="color: #a6e22e">process</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">env</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">NODE_ENV</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">toLowerCase</span><span style="color: #f8f8f2">()</span> <span style="color: #f92672">!==</span> <span style="color: #e6db74">&quot;production&quot;</span> <span style="color: #f8f8f2">)</span>
<span style="color: #f92672">-</span>       <span style="color: #a6e22e">debugPanel</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">render</span><span style="color: #f8f8f2">(</span> <span style="color: #a6e22e">req</span><span style="color: #f8f8f2">,</span> <span style="color: #a6e22e">debugPanelOptions</span><span style="color: #f8f8f2">,</span> <span style="color: #f8f8f2">(</span> <span style="color: #a6e22e">err</span><span style="color: #f8f8f2">,</span> <span style="color: #a6e22e">html</span> <span style="color: #f8f8f2">)</span> <span style="color: #f92672">=&gt;</span> <span style="color: #f8f8f2">{</span>
            <span style="color: #f92672">!=</span> <span style="color: #a6e22e">err</span> <span style="color: #f92672">?</span> <span style="color: #a6e22e">JSON</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">stringify</span><span style="color: #f8f8f2">(</span> <span style="color: #a6e22e">err</span> <span style="color: #f8f8f2">)</span> <span style="color: #f92672">:</span> <span style="color: #a6e22e">html</span> 
<span style="color: #f92672">-</span>       <span style="color: #f8f8f2">}</span> <span style="color: #f8f8f2">);</span>
</pre></div>

### Use with Mustache

To add a **Debug Panel** to the `/test` route of your Express.js application that utilizes **Mustache** templates, use the following code:

<!---
    const
        debugPanel = require( "express-debug-panel" ),
        debugPanelOptions = null;

    function get( req, res ) {
        if ( process.env.NODE_ENV.toLowerCase() !== "production" ) {
            debugPanel.render( req, debugPanelOptions, ( err, html ) => {
                res.render( "test.mst", { 
                    "req": req,
                    "debugPanelOutput": ( err || html )
                } );            
            } );
        } else {
            res.render( "test.mst", { 
                "req": req,
                "debugPanelOutput": null
            } );
        }
    }

    function addRoutes( router ) {
        router.get( "/test", get );
    }

    exports.addRoutes = addRoutes;
--->

<!-- HTML generated using hilite.me --><div style="background: #272822; overflow:auto;width:auto;padding:1em; margin-bottom: 1em;"><pre style="background: #272822; margin: 0; line-height: 125%"><span style="color: #66d9ef">const</span>
    <span style="color: #a6e22e">debugPanel</span> <span style="color: #f92672">=</span> <span style="color: #a6e22e">require</span><span style="color: #f8f8f2">(</span> <span style="color: #e6db74">&quot;express-debug-panel&quot;</span> <span style="color: #f8f8f2">),</span>
    <span style="color: #a6e22e">debugPanelOptions</span> <span style="color: #f92672">=</span> <span style="color: #66d9ef">null</span><span style="color: #f8f8f2">;</span>

<span style="color: #66d9ef">function</span> <span style="color: #a6e22e">get</span><span style="color: #f8f8f2">(</span> <span style="color: #a6e22e">req</span><span style="color: #f8f8f2">,</span> <span style="color: #a6e22e">res</span> <span style="color: #f8f8f2">)</span> <span style="color: #f8f8f2">{</span>
    <span style="color: #66d9ef">if</span> <span style="color: #f8f8f2">(</span> <span style="color: #a6e22e">process</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">env</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">NODE_ENV</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">toLowerCase</span><span style="color: #f8f8f2">()</span> <span style="color: #f92672">!==</span> <span style="color: #e6db74">&quot;production&quot;</span> <span style="color: #f8f8f2">)</span> <span style="color: #f8f8f2">{</span>
        <span style="color: #a6e22e">debugPanel</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">render</span><span style="color: #f8f8f2">(</span> <span style="color: #a6e22e">req</span><span style="color: #f8f8f2">,</span> <span style="color: #a6e22e">debugPanelOptions</span><span style="color: #f8f8f2">,</span> <span style="color: #f8f8f2">(</span> <span style="color: #a6e22e">err</span><span style="color: #f8f8f2">,</span> <span style="color: #a6e22e">html</span> <span style="color: #f8f8f2">)</span> <span style="color: #f92672">=&gt;</span> <span style="color: #f8f8f2">{</span>
            <span style="color: #a6e22e">res</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">render</span><span style="color: #f8f8f2">(</span> <span style="color: #e6db74">&quot;test.mst&quot;</span><span style="color: #f8f8f2">,</span> <span style="color: #f8f8f2">{</span> 
                <span style="color: #e6db74">&quot;req&quot;</span><span style="color: #f92672">:</span> <span style="color: #a6e22e">req</span><span style="color: #f8f8f2">,</span>
                <span style="color: #e6db74">&quot;debugPanelOutput&quot;</span><span style="color: #f92672">:</span> <span style="color: #f8f8f2">(</span> <span style="color: #a6e22e">err</span> <span style="color: #f92672">||</span> <span style="color: #a6e22e">html</span> <span style="color: #f8f8f2">)</span>
            <span style="color: #f8f8f2">}</span> <span style="color: #f8f8f2">);</span>            
        <span style="color: #f8f8f2">}</span> <span style="color: #f8f8f2">);</span>
    <span style="color: #f8f8f2">}</span> <span style="color: #66d9ef">else</span> <span style="color: #f8f8f2">{</span>
        <span style="color: #a6e22e">res</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">render</span><span style="color: #f8f8f2">(</span> <span style="color: #e6db74">&quot;test.mst&quot;</span><span style="color: #f8f8f2">,</span> <span style="color: #f8f8f2">{</span> 
            <span style="color: #e6db74">&quot;req&quot;</span><span style="color: #f92672">:</span> <span style="color: #a6e22e">req</span><span style="color: #f8f8f2">,</span>
            <span style="color: #e6db74">&quot;debugPanelOutput&quot;</span><span style="color: #f92672">:</span> <span style="color: #66d9ef">null</span>
        <span style="color: #f8f8f2">}</span> <span style="color: #f8f8f2">);</span>
    <span style="color: #f8f8f2">}</span>
<span style="color: #f8f8f2">}</span>

<span style="color: #66d9ef">function</span> <span style="color: #a6e22e">addRoutes</span><span style="color: #f8f8f2">(</span> <span style="color: #a6e22e">router</span> <span style="color: #f8f8f2">)</span> <span style="color: #f8f8f2">{</span>
    <span style="color: #a6e22e">router</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">get</span><span style="color: #f8f8f2">(</span> <span style="color: #e6db74">&quot;/test&quot;</span><span style="color: #f8f8f2">,</span> <span style="color: #a6e22e">get</span> <span style="color: #f8f8f2">);</span>
<span style="color: #f8f8f2">}</span>

<span style="color: #a6e22e">exports</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">addRoutes</span> <span style="color: #f92672">=</span> <span style="color: #a6e22e">addRoutes</span><span style="color: #f8f8f2">;</span>
</pre></div>

In your `test.mst` view, include the following code:

<!---
   {{{ debugPanelOutput }}}
--->

<!-- HTML generated using hilite.me --><div style="background: #272822; overflow:auto;width:auto;padding:1em; margin-bottom: 1em;"><pre style="background: #272822; margin: 0; line-height: 125%"><span style="color: #f8f8f2">{{{</span> <span style="color: #a6e22e">debugPanelOutput</span> <span style="color: #f8f8f2">}}}</span>
</pre></div>

## Configuration

You can configure what is displayed in the **Debug Panel** by passing an `options` object as the 2nd argument to `debugPanel.render`. The `options` object takes the following form:

    {
        "name": {
            "object": obj,
            "maxDepth": 2,
            "display": true
        },
        ...
    }

where:

- **name** is the name of the tab within the **Debug Panel**
- **obj** is the object to display
- **maxDepth** is the maximum depth that will be displayed for nested objects
- **display** indicates whether to include this tab within the **Debug Panel**

The default configuration for the **Debug Panel** is:

    {
        "request": {
            "object": req,
            "maxDepth": 2,
            "display": true
        },
        "response": {
            "object": req.res,
            "maxDepth": 2,
            "display": true
        },
        "headers": {
            "object": req.headers,
            "maxDepth": 1,
            "display": true
        },
        "query": {
            "object": req.query,
            "maxDepth": 1,
            "display": true
        },
        "params": {
            "object": req.params,
            "maxDepth": 1,
            "display": true
        },
        "cookies": {
            "object": req.cookies,
            "maxDepth": 1,
            "display": true
        },
        "process": {
            "object": process,
            "maxDepth": 3,
            "display": true
        },
        "app": {
            "object": req.app,
            "maxDepth": 4,
            "display": true
        },
        "session": {
            "object": req.session,
            "maxDepth": 3,
            "display": true
        }
    }

As an example, let's say that we wanted to configure the **Debug Panel** to suppress the *process* tab and replace it with three others:

- *env*
- *config*
- *versions*

To do so, we would define an `options` object of the form:

    {
        "process": {
            "display": false
        },
        "env": {
            "object": process.env,
            "maxDepth": 1,
            "display": true
        },
        "config": {
            "object": process.config,
            "maxDepth": 3,
            "display": true
        },
        "versions": {
            "object": process.versions,
            "maxDepth": 1,
            "display": true
        }
    }

We would then replace this code:

<!---
    const
        debugPanel = require( "express-debug-panel" ),
        debugPanelOptions = null;
--->

<!-- HTML generated using hilite.me --><div style="background: #272822; overflow:auto;width:auto;padding:1em; margin-bottom: 1em;"><pre style="background: #272822; margin: 0; line-height: 125%"><span style="color: #66d9ef">const</span>
    <span style="color: #a6e22e">debugPanel</span> <span style="color: #f92672">=</span> <span style="color: #a6e22e">require</span><span style="color: #f8f8f2">(</span> <span style="color: #e6db74">&quot;express-debug-panel&quot;</span> <span style="color: #f8f8f2">),</span>
    <span style="color: #a6e22e">debugPanelOptions</span> <span style="color: #f92672">=</span> <span style="color: #66d9ef">null</span><span style="color: #f8f8f2">;</span>
</pre></div>

with this code:

<!---
    const
        debugPanel = require( "express-debug-panel" ),
        debugPanelOptions = {
            "process": {
                "display": false
            },
            "env": {
                "object": process.env,
                "maxDepth": 1,
                "display": true
            },
            "config": {
                "object": process.config,
                "maxDepth": 3,
                "display": true
            },
            "versions": {
                "object": process.versions,
                "maxDepth": 1,
                "display": true
            }
        };
--->

<!-- HTML generated using hilite.me --><div style="background: #272822; overflow:auto;width:auto;padding:1em; margin-bottom: 1em;"><pre style="background: #272822; margin: 0; line-height: 125%"><span style="color: #66d9ef">const</span>
    <span style="color: #a6e22e">debugPanel</span> <span style="color: #f92672">=</span> <span style="color: #a6e22e">require</span><span style="color: #f8f8f2">(</span> <span style="color: #e6db74">&quot;express-debug-panel&quot;</span> <span style="color: #f8f8f2">),</span>
    <span style="color: #a6e22e">debugPanelOptions</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">{</span>
        <span style="color: #e6db74">&quot;process&quot;</span><span style="color: #f92672">:</span> <span style="color: #f8f8f2">{</span>
            <span style="color: #e6db74">&quot;display&quot;</span><span style="color: #f92672">:</span> <span style="color: #66d9ef">false</span>
        <span style="color: #f8f8f2">},</span>
        <span style="color: #e6db74">&quot;env&quot;</span><span style="color: #f92672">:</span> <span style="color: #f8f8f2">{</span>
            <span style="color: #e6db74">&quot;object&quot;</span><span style="color: #f92672">:</span> <span style="color: #a6e22e">process</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">env</span><span style="color: #f8f8f2">,</span>
            <span style="color: #e6db74">&quot;maxDepth&quot;</span><span style="color: #f92672">:</span> <span style="color: #ae81ff">1</span><span style="color: #f8f8f2">,</span>
            <span style="color: #e6db74">&quot;display&quot;</span><span style="color: #f92672">:</span> <span style="color: #66d9ef">true</span>
        <span style="color: #f8f8f2">},</span>
        <span style="color: #e6db74">&quot;config&quot;</span><span style="color: #f92672">:</span> <span style="color: #f8f8f2">{</span>
            <span style="color: #e6db74">&quot;object&quot;</span><span style="color: #f92672">:</span> <span style="color: #a6e22e">process</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">config</span><span style="color: #f8f8f2">,</span>
            <span style="color: #e6db74">&quot;maxDepth&quot;</span><span style="color: #f92672">:</span> <span style="color: #ae81ff">3</span><span style="color: #f8f8f2">,</span>
            <span style="color: #e6db74">&quot;display&quot;</span><span style="color: #f92672">:</span> <span style="color: #66d9ef">true</span>
        <span style="color: #f8f8f2">},</span>
        <span style="color: #e6db74">&quot;versions&quot;</span><span style="color: #f92672">:</span> <span style="color: #f8f8f2">{</span>
            <span style="color: #e6db74">&quot;object&quot;</span><span style="color: #f92672">:</span> <span style="color: #a6e22e">process</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">versions</span><span style="color: #f8f8f2">,</span>
            <span style="color: #e6db74">&quot;maxDepth&quot;</span><span style="color: #f92672">:</span> <span style="color: #ae81ff">1</span><span style="color: #f8f8f2">,</span>
            <span style="color: #e6db74">&quot;display&quot;</span><span style="color: #f92672">:</span> <span style="color: #66d9ef">true</span>
        <span style="color: #f8f8f2">}</span>
    <span style="color: #f8f8f2">};</span>
</pre></div>

## License

(The MIT License)

Copyright (c) 2020 Finite Wisdom <j@wiz4.us>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.