---
title: Parse and import ES Modules from a string
tagline: If all you have is an esmodule string, what to do?
tags: ['javascript', 'esmodule', 'string', 'parser', 'import']
excerpt: Do not use this to run untrusted code. There, I've warned you.
thumbImage: preact-thumbnail.jpg
publish: true
date: 2023-03-21
article: true
layout: article.11ty.js
---

Now I know what many of you will already be thinking; Why, and in what circumstances would this be a "good idea"? Well, it's not really. However, there are some situations where this might be useful, and the issues around security can be mitigated (partly) via code ownership. That being said, accepting code from a third-party and running it on your servers is a very, very bad idea. Don't do it unless you know what you're doing.

## On the server

Node has provided a core module, `node:vm`, since at least v4.x, that allows us to do just this. This module allows allows us to compile and run code within V8 Virtual Machine contexts. This is starting to sound a bit like a sandbox, right? Wrong. As we can see from their docs:

https://nodejs.org/docs/latest-v18.x/api/vm.html#vm-executing-javascript

> The node:vm module is not a security mechanism. Do not use it to run untrusted code.

There, I've warned you. Now, on to some code!

## Run it all

Let's say we have a simple esmodule that accepts a number, and multiplies by two, something like this:

```js
function multiply(value) {
  return value * 2;
}

export { multiply };
```
