Middleman-Slim
===
Static site starter template for [Middleman](http://middlemanapp.com).

###### Preprocessing
- [Slim](http://slim-lang.com) *[html templating]*
- [SASS](http://sass-lang.com) *[css preprocessing]*

###### Tools
- [Bower](http://bower.io) *[js package management]*
- [Bourbon](http://bourbon.io) *[sass helpers/mixins]*
- [Neat](http://neat.bourbon.io) *[grid system for bourbon]*

## Getting Started

1. Install Middleman

  ```bash
  $ (sudo) gem install middleman
  ```

2. Clone this repo

  ```
  $ cd ~/.middleman
  $ git clone git@github.com:dropofwill/middleman-slim.git slim
  ```

3. Start your project with your own git repo

  ```
  $ cd ~/path/to/your/project
  $ middleman init PROJECT_NAME --template=slim
  $ rm -rf PROJECT_NAME/.git
  $ git init
  ```

4. Run Middleman to develop locally on 0.0.0.0:4567
  
  ```
  $ middleman
  ```

5. Run Middleman Build to create a production ready version in the build/ dir

  ```
  $ middleman build
  ```

## Using Bower

I've included JQuery as an example. Checkout the bower.json to change versions and .bowerrc to change the directory they're installed to.

1. Find and install the packages you need...

  ```
  $ bower search PACKAGE_NAME
  $ bower install ACTUAL_PACKAGE_NAME -S
  ```

2. Include the assets in your js/css files (paths relative to the root 'bower' directory )

  `//=require 'folder/file'` - *for js files*

### Imageoptim Setup
Imageoptim requires some binaries to be installed in order to work. The easiest way is to use Homebrew to install most of them and optionally install the ones that aren't available this way.

#### OS X: Brew

```bash
brew update
brew install advancecomp gifsicle jhead jpegoptim jpeg optipng pngcrush
```

#### pngout installation (optional)

You can install `pngout` by downloading and installing the [binary versions](http://www.jonof.id.au/kenutils).

_Note: pngout is free to use even in commercial soft, but you can not redistribute, repackage or reuse it without consent and agreement of creator. [license](http://advsys.net/ken/utils.htm#pngoutkziplicense)_

#### svgo installation (optional)

`svgo` is available from NPM.