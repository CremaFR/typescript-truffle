VERSION?=latest-SNAPSHOT
LATEST_VERSION?=latest-SNAPSHOT
SUB_PATH?=tax-apps
PROJECT?=classification-app
GIT_VERSION?=`git rev-parse HEAD`


.PHONY: clean pre-build build test push

default: build

clean:
	@rm -rf node_modules
	@rm -rf build

pre-build:
	@docker pull registry.dev-abplatform.net/core/kpmg-nginx:latest
	@yarn

build: pre-build
	@npm run build
	@docker build --no-cache=true --build-arg GIT_VERSION=${GIT_VERSION} -t registrywrite.dev-abplatform.net/${SUB_PATH}/${PROJECT}:${LATEST_VERSION} .
	@docker tag registrywrite.dev-abplatform.net/${SUB_PATH}/${PROJECT}:${LATEST_VERSION} registrywrite.dev-abplatform.net/${SUB_PATH}/${PROJECT}:${VERSION}

test: build
	@echo "TODO Integration test here, launch the container, run some smoke test"

push: test
	@docker push registrywrite.dev-abplatform.net/${SUB_PATH}/${PROJECT}
