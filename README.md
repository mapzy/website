# Mapzy Website

Our static website is built with Jekyll.


## Development

Install dependencies with `yarn install` and `bundle install`.

Build Tailwind `bundle exec yarn run build-tailwind` (first time or after changing Tailwind)

Run `bundle exec jekyll server -I`


## Development Quirks

### Tailwind

We use Tailwind and build it using PostCSS. During development, Jekyll wants to copy over the whole Tailwind file which takes a long time (up to 30 seconds, depending on your local machine of course).

Therefore, it's better to build the Tailwind CSS files once in the beginning or after something in Tailwind has changed. The other CSS files are not impacted by this.

To build with Tailwind, run:
`jekyll build --config _config.yml,_config_tailwind.yml` or simply `yarn run build-tailwind`


### SASS Partials
Importing SASS partials don't work like you would expect [by default in Jekyll](https://jekyllrb.com/docs/assets/#sassscss). Instead, you need to import SASS partials with the full path, e.g. by doing `@import "/_sass/header.scss` in `assets/css/styles.scss`  
