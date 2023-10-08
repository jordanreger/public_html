.DEFAULT: build

.PHONY: build
build:
	bash pblog.sh > _output/feed.xml
	xsltproc _output/feed.xml > _output/blog/index.html

serve: build
	./serve

clean:
	rm -r _output/*
