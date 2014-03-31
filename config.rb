require 'slim'

###
# Compass
###

# Change Compass configuration
# compass_config do |config|
#   config.output_style = :compact
# end

###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
# page "/path/to/file.html", :layout => false
#
# With alternative layout
# page "/path/to/file.html", :layout => :otherlayout
#
# A path which all have the same layout
# with_layout :admin do
#   page "/admin/*"
# end

###
# Helpers
###

# Automatic image dimensions on image_tag helper
# activate :automatic_image_sizes


# Methods defined in the helpers block are available in templates
# helpers do
#   def some_helper
#     "Helping"
#   end
# end

# Change to your Google Analytics key (e.g. UA-XXXXXXXX-Y).
# To disable GA, leave unset or set to nil
# Code will only be injected in build environment
set :ga_key, nil #'UA-XXXXXXX-Y'

set :css_dir, 'stylesheets'
set :js_dir, 'javascripts'
set :images_dir, 'images'
set :fonts_dir, 'typeface'
set :partials_dir, 'partials'

# Enable cache buster
activate :asset_hash

# Use relative URLs
activate :relative_assets


# Reload the browser automatically whenever files change
configure :development do
	activate :livereload, :grace_period => 0.1, :host => "0.0.0.0"
	# activate :livereload, apply_js_live: false, apply_css_live: false
end


# Build-specific configuration
configure :build do
	activate :minify_css
	activate :minify_javascript
	activate :minify_html

	# Need to install the image_optim binaries locally as well
	activate :imageoptim do |options|
		options.pngout_options = false;
	end

	# pre-gzip text files aggresively to save server cpu
	# activate :gzip
end
