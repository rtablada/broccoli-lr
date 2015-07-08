# Broccoli Live Reload (broccoli-lr)

Since version 0.15 or so Broccoli no longer has live-reload baked in as part of its basic server (nor should it honestly).

This command allows for a quick and easy way for you to get all the goodness of the latest Broccoli version as well as the old live reload that you know and love.

## Install

To install broccoli-lr you will need to run:

```
npm install -g broccoli-lr
```

That's it!
No local version (at least not of LR).

You will still have to install your normal local Broccoli and any filters and plugins you may want in your `Brocfile.js` (I'm not magical).

## Waiting on PR to Close

This small wrapper heavily relies on being able to grab the watcher instance from an existing Broccoli server.
This feature is not currently available and is waiting on a PR to land (hopefully soon).

Until then, please use `rtablada/broccoli#feature/server-returns` as your local version of `broccoli` in your `package.json` file.

## Use

Now when you want to start Broccoli with live reload, you can run:

```
broccoli-lr serve
```

There is no `broccoli-lr build` to minimize the footprint and requirements of this library to stay up to date.
If you want to do a regular build, continue using plain old `broccoli build`

### Options

When running `broccoli-lr serve` there are some different options that you can pass in to customize things:

* `--port` (default: 4200) - The port to bind to for compile assets to be served from
* `--host` (default: localhost) - The host to bind to for compile assets to be served from
* `--live-reload-port` (default: 35729) - The port to start LiveReload on

## License

This project is distributed under the MIT license.
TLDR; use it, credit it, no guarantees (I do try my best though).

## Credit

Most of this code is ripped directly from the old version of Broccoli and just adapted for the newer APIs and adding a new binary.
Thanks to Jo Liss for making an awesomely performant library and doing most of the heavy lifting!
