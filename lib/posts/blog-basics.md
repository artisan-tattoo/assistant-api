---
title: "Development Notebook: Blog Basics"
slug: "blog-basics"
---

Today, I mostly built out the rest of the blog, and added a home page. Took a bit
longer than 15 minutes. :wink:

## The commits

I'll be discussing [these commits](https://github.com/artisan-tattoo/artisan_assistant/compare/c7c137ce0eb67b83c9522ce8f33586ff702437bd...a05ef22dc20632c1099d6e2cea8cc94b10f86865) in this post. There's of course the commit that introduces this log, but I don't know the hash until I commit, so oh well! It would just have the text of this post anyway.

## Two blog posts

[commit one](https://github.com/artisan-tattoo/artisan_assistant/commit/dcf7ed350be16cb435bd73c602e6d21a1e358fe1) and [commit two](https://github.com/artisan-tattoo/artisan_assistant/commit/d591f7f1637ede07738df8d4d3cdc97830227e1d)

The venerable Hello world! I had to write the first blog post at some point, so
here it is. I also had to write a blog post about all the stuff that happened
before the first blog post, so day zero it is.

## typos :cry:

I really, really suck at typing. And it's hard to read your own writing. And spellcheck shows so much red in a programming blog post that I miss things anyway.

- [commit](https://github.com/artisan-tattoo/artisan_assistant/commit/6c047d6105d3ad886bd1fd180afa29606d135970)
- [commit](https://github.com/artisan-tattoo/artisan_assistant/commit/876caa0221d0a1672f93276a5c40e5b73e0f1ef4)
- [commit](https://github.com/artisan-tattoo/artisan_assistant/commit/b4ba875509aa6474cd8e1d881ccbcc746e8004ff)

I can't wait to do some analysis on this repository for commits that just say
"typo :cry:".

Also,
[:trollface:](https://github.com/artisan-tattoo/artisan_assistant/commit/01321b661994e5165a14e8e604766755d3ba0aa3).
Rather than link to the dozens of people who are confused on StackOverflow
about how TurboLinks broke their application, I'd rather point out that it
breaks basically every other library and requires an entire set of
meta-projects to make them all work again.

## Blog index page

Two commits here:
[one](https://github.com/artisan-tattoo/artisan_assistant/commit/e5bce02ff34874021f5fe63ccd3cb0edc87931fc)
and
[two](https://github.com/artisan-tattoo/artisan_assistant/commit/306b2d7453d16aadcb6164c3f466fda3b8d9daf5).
Second one is trivial, first one is more interesting.

If you didn't know, `ActiveModel` lets you use plain old Ruby objects in place
of ActiveRecord ones in places. `Naming` gives you a certain subset of that,
which the `link_to` helper needs. Combine that with `to_param`, and you can use
`link_to` with your plain class just like you could an AR model.

I thought about moving `"lib/posts"` to some kind of constant, and then decided
against it. It'll only be in these two places. Not enough of a problem to
bother with.

## Friends are so much help

One thing I always tell new programmers (who I actually speak to a lot, given
my educational bent) is that I rely on my friends all the time for help.  This
was true twice today, first with [Tim Pope](http://twitter.com/tpope) of
"written every Vim plugin ever" fame:

- [tweet](https://twitter.com/steveklabnik/status/476456631287689216)
- [tweet](https://twitter.com/tpope/status/476457304863539200)
- [tweet](https://twitter.com/steveklabnik/status/476457579917615105)
- [tweet](https://twitter.com/steveklabnik/status/476458414177263616)

This also shows a very common debugging technique of mine: just use `throw`.
I'm not a huge fan of debuggers, preferring logging or throwing.

The second was [this commit](https://github.com/artisan-tattoo/artisan_assistant/commit/511753ae05e83c4aca14a8064466f7b7775eb681), which was pointed out to me
from looking at that previous commit. Whoops.

Seriously. Help your friends out. Ask them for help. We're all in this
together.

## A first home page

[commit](https://github.com/artisan-tattoo/artisan_assistant/commit/a05ef22dc20632c1099d6e2cea8cc94b10f86865)

Nothing fancy, just the basics.

## Blog design

You may wonder why I'm doing this whole Markdown thing with the blog. Well,
there's a few reasons. The first of which is that it's the easiest possible
thing. No database junk yet. Two days into a Rails app and I haven't even
used the database. The second reason is that it's easier to author. If I
don't have a user model, and I don't have permissions, I'd have to write the
text somewhere else and then log into the database remotely and then insert
the text and uuuuugh. Permissions are inherent here: if I can write to the
repo, I can publish.

I'm not sure about loading these files from a slug, though. We'll see if it
becomes a problem. I can always import everything into a Real Database later.
By using `ActiveModel`, most of my code treats this all just like any regular
model. So not a ton changes.

## A few words about testing

You may also be wondering why there aren't any tests yet. Yes, I think testing
is important. But what's the purpose of testing? To me, it's about having
confidence that I can change things without breaking them. This blog isn't
going to be changing a whole lot, and when it does, it'll be minor. And testing
this is really annoying, and doesn't actually provide me with a lot more confidence. Because of the calls to `File.read` and `Metadown.render`, I'd need a bunch
of mocks to accurately test `Post.find`, and that sucks. So I've made a
judgement call here. As you can see above, that doesn't mean it'll be perfect,
but I doubt tests would have helped me with those two errors, either.
