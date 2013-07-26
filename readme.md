#Local JS Logger

A little logging utility I wrote to avoid frustrations when debugging cordova applications.

##Usage

Ok, I'm going to have to expand later. But essentially take local_js_logger.js and reference it in your html. Then in your js just call llog("holla at ya boy"); Then find app.js and run node app.js. Then be happy. 

##Why did you do this Clay?

Running my Cordova applications in the iPhone simulator, I could not get console.log() to route to the Safari inspector. So I used jsconsole.com for a while. This routes console.log to a website that you can pull up and look at. This worked, but I am stealing internet from a coffee shop next door and it blows chunks. So I wrote this little node.js application to do this locally. It simply takes POST data and log it to node's console (Terminal). Huzzah!

##Future
* some sort of intelligent var_dump (like PHP's var_dump) for logging objects.
* redis cause why not (for gigs)
* browser view of log (maybe socket connection just for gigs)

###Final Note
I initially wrote this in like 10 minutes and 15 lines of code. It is a good example of what node is good at.