---
title: Managing third party scripts
tagline: Party of the third party
tags: ['performance', 'analytics', 'third-party', 'javascript']
excerpt: Negotiating the friction between business and engineering teams over third party scripts. It's not easy.
thumbImage: third-party.jpg
publish: false
date: 2021-10-22
article: true
layout: article.11ty.js
---

We've all found ourselves in a bit of a pickle. We're now surrounded by these interlopers, easy to add, but hard to remove. They greatly impact the experience of our end users, slow the performance of our site down, and cause friction between engineering and business. I'm talking, of course, about third party scripts.

With the explosion of competing analytic services, all vying to track, corrolate, and present vast amounts of data to your business with the promise of increased revenue, or insights, it's hard not to get on board.

But a conversation needs to happen, and more often than not, doesn't. After the slick pitches, and presentations, ringing in the ears of stakeholders, an evaluation needs to take place about how this panacea will impact the _true_ revenue stream of business, our products.

By now, we're all aware of the following truism; `performance == conversion`. How a user experiences our product, greatly impacts how, and if, they interact with it.

## With great power...

The first stop for us on this journey are tag managers, namely <a href="https://marketingplatform.google.com/intl/en_uk/about/tag-manager/" target="_blank" rel="noopener">Google Tag Manager</a>, as it's pretty much the only game in town at this point. No one really wants to spend their precious time copy & pasting scripts onto pages whenever a new integration is required. It's much easier to let the wider business do it, right? Well..

If an engineering team are investing significant time, money and energy into optimising your product, anything that might impact that should be considered buisness critical.

All it takes to undo that hard work, is for a single tag, whose impact is not fully understood, to be added via GTM. Engineering don't want to, and shouldn't, be the main arbitrators of third party integrations. It is important, however, to meaningfully communicate ahead of time what it is you intend to add, and how it might affect other departments. All to often, this doesn't happen.

GTM brings with it a consistent implementation and management suite for third party scripts, that really is unparalleled. It can even _improve_ the performance of your integrations.

But ultimately, anything that is published should go through the same rigorous process that other changes to your product go through. Published tags should be treated in the same way as releases, in other words.

## Added value, or lack thereof

TBD:

- Do you need them?
- Can you defer them to avoid broad impact on your users?
- Do you want to be "that company", data integrity discussion
- Do you want another tech team, who you have no control over?
