---
title: Managing third party scripts
tagline: Party of the third party
tags: ['performance', 'analytics', 'third-party', 'javascript']
excerpt: Negotiating the friction between business and engineering teams over third party scripts. It's not easy.
thumbImage: analytics-thumbnail.jpg
publish: true
date: 2022-04-20
article: true
layout: article.11ty.js
---

We've all found ourselves in a bit of a pickle. We're now surrounded by these interlopers, easy to add, hard to remove. They greatly impact the experience of our end users, slow the performance of our site down, and cause friction between engineering and business. I'm talking, of course, about third party scripts.

With the explosion of competing analytic services, all vying to track, corrolate, and present vast amounts of data to your business with the promise of increased revenue, or insights, it's hard not to get on board.

But a conversation needs to happen, and more often than not, doesn't. After the slick pitches, and presentations, ringing in the ears of stakeholders, an evaluation needs to take place about how this panacea will impact the _true_ revenue stream of the business, our products.

By now, we're all aware of the following truism; `performance === conversion`. How a user experiences our product, greatly impacts how, and if, they interact with it.

## With great power...

The first stop for us on this journey are tag managers, namely <a href="https://marketingplatform.google.com/intl/en_uk/about/tag-manager/" target="_blank" rel="noopener">Google Tag Manager</a>, as it's pretty much the primary game in town at this point. No one really wants to spend their precious time copy & pasting scripts onto pages whenever a new integration is required. It's much easier to let the wider business do it, right? Well..

If an engineering team are investing significant time, money and energy into optimising your product, anything that might impact that should be considered buisness critical.

All it takes to undo that hard work, is for a single tag whose impact is not fully understood, to be added via GTM. Engineering don't want to, and shouldn't, be the main arbitrators of third party integrations. It is important, however, to meaningfully communicate ahead of time what it is you intend to add, and how it might affect other departments. All too often, this doesn't happen.

GTM brings with it a consistent implementation and management suite for third party scripts, that really is unparalleled. It can even _improve_ the performance of your integrations.

But ultimately, anything that is published should go through the same rigorous process that other changes to your product go through. Published tags should be treated in the same way as deployments, in other words.

## Added value, or lack thereof

Now for a hypothetical; Imagine we've invested time and money into leveling up our web performance, the final hurdle we've identified is <a href="https://web.dev/tbt/" target="_blank" rel="noopener">TBT</a> or <a href="https://web.dev/fid/" target="_blank" rel="noopener">FID</a>. After some profiling, we've identified several third parties as the root of our poor score. What to do?

Before any optimisation takes place, the first stop for our team should be a question: **Do we, the business, even need these scripts?** What benefit are we getting from them? Were they added a while ago on a whim, and forgotten about? Did we expect significant revenue when we implemented them, and has that actually proven true? If the answer is no or none to any of the above, a strong case should be made to the owners for their removal.

Modern browers are incredible; They're highly efficient, optimised programs that can handle *alot* these days. However, it's important to keep in mind the nature of how our applications are parsed, executed and eventually rendered. Browsers have an achillies heal, they're single threaded. The DOM, CSSOM, JS and everything else, has to compete for the same resources when our application is being run. 

This leads to an inevitable conclusion, the most performant code, is no code. Anything that we can remove without damaging our core offering should be removed. This might sound drastic, but when we're talking about third parties, it's ultimately true. If a third party is offering genuine value to your business, the above statement is no longer applicable, and more targeted optimisation is needed. However, if you find your application has several third party scripts that have dubious value, get rid of them.. now.

## Losing control

Before we move on, I want to highlight an important fact that many don't consider when implementing third parties. Adding scripts that we do not control to our site, inherently gives up some of our own control. What do I mean by this? Well, the vast majority of third parties run on the main thread, and therefore have access to **everything** that our own application does. User credentials, site content, etc. This might appear overly paranoid, and granted, it probably is. I'm sure 99.99% of engineering teams that maintain these third party products are up standing individuals. But it does pose the question; What if they weren't, either purposefully or unintentionally? It has the potential to open up vectors for attack that we, as the consumer, have no control over whatsover.

## But we need them!

Now that we've had the difficult conversations with stakeholders, and removed any scripts that aren't offering value, we can move onto the critical third parties. These could be push notification providers, search functionality, or email marketing solutions for example. If we can't remove these scripts, can we limit their impact? Our next stop should be another question; **When do we need these scripts?**

Let's take another example; A third party that handles our search functionality. I've seen examples time and again, of third party scripts being loaded well ahead of when they're actually critical to the functionality of our site. Given our theoretical search script, given a bit of thought, we can conclude this is only really needed when a user interacts with our search bar. Rather than loading it ahead of time, let's reduce it's impact until needed, perhaps by loading the script when a user focuses on the search input. With a little bit of logic, we can mitigate potential delays between the script being loaded, parsed and executed, and the users input returning results.

## Conclusion

Navigating the path between business stakeholders and diligent engineering teams can be tricky, even frustrating at times. A great deal of effort is going into solving this friction, allowing us to have our cake, and eat it too. An example of this is <a href="https://partytown.builder.io/" target="_blank" rel="noopener">Party Town</a>, a truly interesting approach to offloading the impact of third parties into a worker thread, freeing up valuable main thread resource.

Still, as the common truism goes, the most performant code, is no code. Good luck!
