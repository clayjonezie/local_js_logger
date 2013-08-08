#Local JS Logger

A tiny logging utility when console.log isn't availiable.

##Usage

In this directory run
'''
npm install
'''

to install dependancies. Then reference the local_js_logger.js in your js/html. Then run 

'''
node app.js
'''

In your js, call 

```
llog('some words')
```

And it will show up in the window your ran node in.

##Why?

Running my Cordova applications in the iPhone simulator, I could not get console.log() to route to the Safari inspector. So I used jsconsole.com for a while. This routes console.log to a website that you can pull up and look at. This worked, but I am stealing internet from a coffee shop next door and it blows chunks. So I wrote this little node.js application to do this locally. It simply takes POST data and log it to node's console (Terminal). Huzzah!

##Future
* browser view of log (maybe socket connection just for gigs)

