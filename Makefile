all: install

clean:
	rm -rf build

build:
	mkdir -p build/libs build/zip-content/xkcd-ui
	cp -r resources plugin.yaml build/zip-content/xkcd-ui
	cd build/zip-content; zip -r xkcd-ui.zip *
	mv build/zip-content/xkcd-ui.zip build/libs

