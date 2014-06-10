---
title: "Development Notebook: Day 0"
slug: "day-zero"
---

This is the first entry in my logs about making Artisan Assitant. Since
I'm a programmer, it's "Day 0," and also because it's about the stuff
I had to do to even bring this simple post to you in the first place.

## The commits

I'll be discussing [these commits](https://github.com/artisan-tattoo/artisan_assistant/compare/58a66818462b07bf4728949471b418c7b0f08b49...be4ac09cf4bacb7a56db15f5bbc52afa93bebe88) in this post. There's technically an eleventh commit, which is [58a668](https://github.com/artisan-tattoo/artisan_assistant/commit/58a66818462b07bf4728949471b418c7b0f08b49). It's just a pure `rails new`. Nothing exciting.

## Burger King

[commit](https://github.com/artisan-tattoo/artisan_assistant/commit/bc9dfd62f4d23f7497b973cc8dd72b78562b8bd8) (and [766925](https://github.com/artisan-tattoo/artisan_assistant/commit/7669252158ef43357b3be0c90164d7dce14adbf2))

These are the modifications that I make to a default Rails install. While
I have commit to Rails, I don't agree with a bunch of the defaults.

I added my Ruby version to my Gemfile. Heroku (which I'll be using at first)
likes to have this. Everything else is removals.

CoffeeScript: I think CoffeeScript is fine, but I don't plan on writing a ton
of JavaScript for this application anyway, and so I'm fine with just writing
plain-old JavaScript. In general, I think CofffeeScript is fine for beginning
and intermediate developers, but at some point most people revert back to plain
old JavaScript once they've developed good habits. The big win here is removing
the dependency on a JavaScript runtime to build assets, which always causes me
problems.

Turbolinks: [...](http://reed.github.io/turbolinks-compatibility/)

JBuilder: I prefer
[ActiveModel::Serializers](https://github.com/rails-api/active_model_serializers).
I consider its convention-driven approach to be more in the spirit of Rails
than JBuilder.

SDoc: I don't tend to write a lot of API docs for my Rails apps.

Spring: I'm fundamentally opposed to tools like Spring, as I feel they're a
band-aid for a real illness. If your tests are too slow, stop loading the
world. Write unit tests. Let CI run your integration tests. So many weird bugs
crop up when using Spork and tools like it.

The rest of the diff is removing some commented out things and TurboLinks
generated junk.

The second commit had to happen because I forgot to remove the Spring binstub.
Sigh.

## Real README

[commit](https://github.com/artisan-tattoo/artisan_assistant/commit/1ee9d913e57938ca902322ceabf4e911373a0b09)

It's super important to write good READMEs, even for stuff that's just for
you. In Day 1, I use [metadown](https://github.com/steveklabnik/metadown), a
gem of mine I wrote two years ago. I was damn happy to have a good README
lying around so I didn't have to dig through the source or tests to figure out
how to use it.

## Add minitest-rails

[commit](https://github.com/artisan-tattoo/artisan_assistant/commit/850b93cd9aa0549b5c7ceafe1ed73e8b121190e4)

Testing is going to be one of the more interesting things to come out of
building this app. This is just a plain old minitest-rails installation,
nothing fancy.

Expect more in the future.

## Travis

[commit one](https://github.com/artisan-tattoo/artisan_assistant/commit/f950d4711718cd387519ed444273605dc30d15b1) and [commit two](https://github.com/artisan-tattoo/artisan_assistant/commit/f0a0dd8c1c85b86a09f2100db42881a50b7eb395)

Commit one preps Travis. Just the very basics: set up my Ruby and test
commands, and add `rake` as a gem. Thanks, Jim. :/

I then went in and actually added the hook in GitHub.

The second commit adds the badge. It also served as the first commit that
Travis builds. I like to do the Travis stuff in two steps for this reason:
nice and clean. First build should be successful, because there's nothing
really to build.

## Twelve Factor gem

[commit](https://github.com/artisan-tattoo/artisan_assistant/commit/d7d39a7700247771c1c27e24bf1565a57ee677fd)

Heroku needs to change some defaults as well, so they recommend that you add
this gem. You can [check out what it
does](https://github.com/heroku/rails_12factor). It's not a lot.

## Deploy upon a successful build

[commit](https://github.com/artisan-tattoo/artisan_assistant/commit/0aa0eaa822f7eeeb5c50a7f1922eca3158fe7905)

Programmers like automating things. What's more automated than continuous
integration? Travis supports actually deploying upon every successful build,
and I enjoy using it. As a side effect, anyone that can push to GitHub can
deploy without needing to know passwords. Nice.

This works by encrypting your Heroku credentials. For more on this feature,
[see the docs](http://docs.travis-ci.com/user/deployment/heroku/).

## Adding a Procfile

[commit](https://github.com/artisan-tattoo/artisan_assistant/commit/a36e9358de57ab2099368c0e2f867fcf61e1a676)

By default, Rails apps use Webrick. Sigh. It makes sense, as it's always
available, but it's not appropriate for 'real' production. So we add Puma.
I'm using MRI, so I'm not getting the full benefits of concurrency, but
I still prefer Puma.

## Adding CodeClimate

[commit](https://github.com/artisan-tattoo/artisan_assistant/commit/be4ac09cf4bacb7a56db15f5bbc52afa93bebe88)

This required going to CodeClimate and enabling it for the repo. That page
is hard to find (not that I blame them, since it's free ;) ), but it's
[here](https://codeclimate.com/github/signup). I love CodeClimate, and so once
I get some revenue, I'll probably pay for it even though I don't have to, since
AA is open sourced.

## Summary

All this stuff is just the basic setup, and now I can start actually
developing. We'll see if I can keep up this level of detail as things go
along. :)
