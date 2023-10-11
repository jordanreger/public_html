build:
	sh ./mk
	rsync -r photos/ build/photos
	rsync -r videos/ build/videos
	rsync resume.pdf build
	rsync robots.txt build

clean:
	rm -rf build/*

serve:
	~/.deno/bin/file_server -p 8080 --cors build

watch:
	while true; do \
	ls -d .git/* * posts/* pages/* header.html | entr -cd make ;\
	done

.PHONY: build clean watch
