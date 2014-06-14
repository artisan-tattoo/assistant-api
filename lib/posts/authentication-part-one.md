---
title: "Development Notebook: Authentication Part One"
slug: "authentication-part-one"
---

Whew. I've been busy living life for the past few days, and so progress has been a bit slower than I'd like. Story of every software project, eh?

There's actually two days of stuff in this log, as yesterday, I only did one thing: merge a pull request.

## The commits

I'll be discussing [these commits](https://github.com/artisan-tattoo/artisan_assistant/compare/a05ef22dc20632c1099d6e2cea8cc94b10f86865...master) in this post, as well as [these ones](https://github.com/artisan-tattoo/artisan_assistant/pull/8).

## Merging Pull Requests

I actually got some small pull requests. I wasn't sure what to do here, as I
don't have the necessary machinery set up yet to do copyright assignment. You
see, contributions are given to me under the AGPL3, like the rest of the
codebase, but if I ever want to change that later, I would have to get
permission from all committers. That usually sucks, so companies have patches
actually assign copyright to them, which stops the issue.

I decided to just merge the PRs, and accept AGPL3 forever. I'm happy with
this decision.

The first pull request was [just a
typo](https://github.com/artisan-tattoo/artisan_assistant/pull/5), but it's
important to fix those!

The second was a feature that I was planning on adding: [an RSS feed for
posts](https://github.com/artisan-tattoo/artisan_assistant/pull/6). I love RSS.
I also love not having to write things myself. :wink:

The third was to [handle 404s
better](https://github.com/artisan-tattoo/artisan_assistant/pull/7). Awesome!

I wrote a patch to fix an Issue, as well. [It gave a cursory summary of the
licenses
involved](https://github.com/artisan-tattoo/artisan_assistant/issues/3). Always
nice to explain some things if people aren't familiar.

These kinds of outside contributions are one of the reasons why any business
should consider open sourcing their code. Yes, some contributions may be small,
but you get them for free. And your users win, because they get their features
faster. I am _slightly_ concerned about the fact that I'll be making money off
of work others have done for free, but that ship has really sailed, since I'm
using open source for everything else. Just saying, in the macro, this is one
of my worries about open source development in general. It's why this project
is AGPL: at least my contributors will know that their improvements will always
be available freely to others.

## Setting up my domain

Next up is making my first models! I already had a previous schema from when I
did this before, and while it's not perfect, keeping it the same will allow me
to migrate Artisan over more easily, and the warts are _extremely_ minor.

I actually wrote _amazing_ commit messages, if I do say so myself, so rather
than repeat myself, I'll just give you links and you can check them out:

- [Create all my initial models.](https://github.com/artisan-tattoo/artisan_assistant/commit/8168f626e1f4345d97897b7a8e630c6648d3bfba)
-[Tell Heroku to migrate after deploy](https://github.com/artisan-tattoo/artisan_assistant/commit/eb120ff41d56d7cf9706e31edec297eace4622af)
- [Create a seeds file, and fix missing link](https://github.com/artisan-tattoo/artisan_assistant/commit/c89aa7b31f46d8bf0202f704857d83432036ca69)

## First feature: Authentication

Next up is my first real feature, authentication! You can see the commits so
far [here](https://github.com/artisan-tattoo/artisan_assistant/pull/8).

Why authentication first? Well, I want sign _up_ to be very, very last. That
way, I can keep deploying my code, and random strangers can't get an account.
Given that signing in is one of the first things a visitor who's already got
an account would do, it seems like the most logical place to start.

Note that I don't have a `User` model at all. My `Shop` model will be very
similar to a `User`. My customers here are tattoo shops, so having an extra
`User` would just add a layer of joins and indirection that isn't useful. Stick
with domain language!

One interesting thing is that I'm using Travis to double check that my stuff
builds correctly. To do this, I created an empty commit, and then opened a pull
request with it on a new branch. You'll note that almost everything else was on
master. I do all feature development in branches, generally, but everything so
far was so meta, it didn't make a lot of sense. If you're not familiar with
empty commits, you can

    $ git commit --allow-empty -m "start of authentication branch"

And you'll get an empty commit with that message. I then added commits one
at a time, and watched Travis build them:

![commits](https://cloud.githubusercontent.com/assets/27786/3279565/1a5229fa-f404-11e3-96fd-32e3a021833e.png)

After I had those working, I rebased the empty commit away. It's done its job,
but that's enough of that! I prefer the clean history.

I encourage you to check out the great commit messages I wrote for each step of
the way, too. I won't repeat myself here:

- [Add minitest-rails-capybara](https://github.com/artisan-tattoo/artisan_assistant/commit/a637bec103fdc1560e7d6753c14c2f3119117f21)
- [Fix travis config to run all tests](https://github.com/artisan-tattoo/artisan_assistant/commit/b59cffa1f78d2962f637621e0cfbd95de134ac97)
- [Add a sign in link on the home page](https://github.com/artisan-tattoo/artisan_assistant/commit/beec47113af04d549d3a53d72d4d961299acf6c7)
- [Make an explicit task for features](https://github.com/artisan-tattoo/artisan_assistant/commit/cf78ae8f154a425ecff3b3f4ddf662c2cbdb79c1)
- [Shops can now sign in](https://github.com/artisan-tattoo/artisan_assistant/commit/892f9a3b27f5f1ad316f28ce6c3260ba45b36188)

That last commit is a little big, but I discuss why in the message. :wink:

While signing in works, I havne't done anything to test failure yet, so I'm
not merging this yet. Tomorrow!

## Build status: still green!

I've gotten lucky, after 40 builds, I still have 100% green on Travis: https://travis-ci.org/artisan-tattoo/artisan_assistant/builds

We'll see how long that lasts.
