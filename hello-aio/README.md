# Originated from 'angular.io', but...
* `yarn setup` has been run on 'angular-master/aio', after that we copied here

## Tasks
We use `yarn` to manage the dependencies and to run build tasks.

* `yarn` - install all the dependencies.
* `yarn start` - run a development web server.
* `yarn start -- -p 4444` - run a development web server on a specific port.
* `yarn build` - build the application for production into the dist/ directory
* `yarn http-server -- dist -p 4200` - start to serve files on dist/ directory

## Using ServiceWorker locally

running `yarn start -- --prod` will no longer set up the ServiceWorker, which
would require manually running `yarn sw-manifest` and `yarn sw-copy` (something that is not possible
with webpack serving the files from memory).

If you want to test ServiceWorker locally, you can use `yarn build` and serve the files in `dist/`
with `yarn http-server -- dist -p 4200`.

