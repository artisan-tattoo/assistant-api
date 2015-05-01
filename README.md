# Artisan Assistant

[![Build Status](https://travis-ci.org/artisan-tattoo/artisan_assistant.svg)](https://travis-ci.org/artisan-tattoo/artisan_assistant) [![Code Climate](https://codeclimate.com/github/artisan-tattoo/artisan_assistant.png)](https://codeclimate.com/github/artisan-tattoo/artisan_assistant)

This is the source code for http://artisanassistant.com.

# License

All original source code is Copyright Steve Klabnik 2014, and is provided to
you under the Affero GPL v3. Please see LICENSE for details. TL;DR: If you
distribute this code to anyone, including over the internet, you must also make
the source code available to those users under the AGPL.

Includes components that are under MIT/BSD as well. See the licenses for those
respective projects for more details. TL;DR: you can't sue the authors, but
you can do whatever you want with them.

I am not a lawyer. Don't take my TL;DRs as legal advice. Talk to a real lawyer
if you're unsure.

## Requirements

You'll need Ruby 2.1.1, and postgresql, with development headers. To get going:

```bash
$ git clone https://github.com/artisan-tattoo/artisan_assistant
$ cd artisan_assistant
$ bin/bundle
$ bin/rake db:migrate
$ bin/rake db:seed
$ bin/rails s
```
