---
layout: post
title: Emoji Index
date: 2019-12-02 14:49:03 -0500
tags: [data, code, genius]
thumbnail: /assets/img/design/paul_data.svg
---

During the winter holidays I built an express application that tallies emojis for all users within the last 1000 messages for all slack channels within a slack team in order to determine how members of work chats use emojis. My hypothesis was that members use emojis non-literally for rhetorical or vivid effect.  This is in contrast to the idea that people use emojis literally, as in the sentence: _I am so 😴 this morning because I haven't had my ☕_. I've worked in places where emojis took on an abstract meaning sometimes only tenuously related to their pictographic meaning.

Here are some examples of emoji slang on teams I have been on:

* 🌾 -- the servers are sleeping soundly
* 🥩 -- I have deployment related anxiety
* 🏤 -- I am inspired by your professionalism
* 💩 -- I have strong opinions about your design choice here, but will not force the issue
* 💨 -- these tests are brittle
* 💂‍♀  -- we don’t have a linter, so I am linting via comment and feel silly about it

As it turns out, my hypothesis that emojis are used primarily as figures of speech was wrong! In the slack workplace I sampled, people used emojis mainly to convey a positive or negative sentiment accompanying what they were saying. So does that make your team’s happy/sad emoji ratio a magic new productivity metric?

Again, no. My coworkers seemed a little nonplussed at having their emojis observed and tallied by me. It might have felt a little violating to have the throw away, whimsical elements of their communications quantified and probed for hidden meaning. Also, now that my coworkers know their emoji usage data is being observed and collected, I suspect [their behavior has changed](https://en.wikipedia.org/wiki/Observer_effect_(physics)).


I gave a talk on my findings at [January's Tech Confluence meetup](https://www.meetup.com/TechConfluence/events/rwkxkrybccbtb/). You can find the slides [here](https://docs.google.com/presentation/d/1wqI0McejPnMmEmz42v1qaCC3O9n1TR1ztVBszEp192s/edit#slide=id.p).

<!-- Copy and Paste Me -->
<div class="row justify-content-left">
  <div class="col-lg-8 col-10 pb-4 pt-2">
    <div class="glitch-embed-wrap" style="height: 420px; width: 100%;">
      <iframe
        src="https://glitch.com/embed/#!/embed/alfovo-emoji-index?path=index.js&previewSize=100"
        title="alfovo-emoji-index on Glitch"
        allow="geolocation; microphone; camera; midi; vr; encrypted-media"
        style="height: 100%; width: 100%; border: 0;">
      </iframe>
    </div>
  </div>
</div>

Some recommended reading -- Richard Brautigan's poem, ["All Watched Over by Machines of Loving Grace"](https://www.theatlantic.com/technology/archive/2011/09/weekend-poem-all-watched-over-by-machines-of-loving-grace/245251/). Thank you to Gabe for letting me spend some of my work hours on this fun project and thank you to past friends who kindly tempered your PR reviews with emojis when I was learning to code.
