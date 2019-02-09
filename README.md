# Hello World - UI plugin demo

This plugin includes some basic UI demostrations:

* Usage of i18n to get messages
* Usage of javascript to modify Main Page
* Usage of javascript + ajax request to modify Jobs list page
* Usage of javascript + css to modify the execution page

### Hello World. 

(Disabled by default. It can be enabled on `main.js` code)
Display `Hello world` text from `messages.properties`, if the user change the language to Spanish on Rundeck, the message changes to `Hola Mundo`.

### XKCD random image.

(Enabled by default)
On the jobs page, it adds on top of the job list, a random image from a json source file.
To retrieve this image, the code uses a ajax call to a local file, this can be replaced with a call to a webservice on the same server as the rundeck instance.

Since rundeck 3.0.12 you need to add this to `rundeck-config.properties`:
`rundeck.security.httpHeaders.provider.csp.config.img-src=self https://imgs.xkcd.com`

### Panic mode

(Disabled by default. It can be enabled on `main.js` code)
On the execution page, changes the header to red when a failed execution is open.



## Update the xkcd source

Edit `getSources.sh` Set TODAY to the latest xkcd comic of the day.
Run:
`./getSources.sh > xkcdsource.json`
