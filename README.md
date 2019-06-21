# XKCD - UI plugin demo

This plugin uses javascript + a mocked ajax request to modify Jobs list page

On the jobs page, it adds on top of the job list, a random image from a json source file.
To retrieve this image, the code uses a ajax call to a local file, this can be replaced with a call to a webservice on the same server as the rundeck instance.


## Update the xkcd source

Edit `getSources.sh` Set TODAY to the latest xkcd comic of the day.
Run:
`./getSources.sh > xkcdsource.json`

## Build

Using make:
```
make clean build
```

## Install

```
cp build/libs/xkcd-ui.zip $RDECK_BASE/libext
```

XKCD is A webcomic of romance, sarcasm, math, and language. By Randall Munroe, see more about xkcd here => https://xkcd.com

