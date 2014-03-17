Nango
=====

Barebone WordPress theme with Grunt and Compass support.

## Requirements

1. NodeJS and NPM
2. Grunt CLI

## Getting started

In `/wp-content/themes/`

1. Download the zip.
2. Unpack the zip in your theme directory.
2. Update the package.json with your theme name.
3. Run `npm install`.
4. Perform the first build.

```sh
unzip nango-master.zip <YOUR THEME>
cd <YOUR THEME>
# update package.json
npm install
grunt
```

Now, you can activate your theme from Wordpress admin panel. Nango is setup!

While developing, run the `watch` grunt task.

```sh
grunt watch
```
