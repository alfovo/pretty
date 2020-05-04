---
layout: post
title: The Emoji Index
date: 2019-12-02 14:49:03 -0500
tags: [data, code, emoji]
thumbnail: /assets/img/design/peachmotions.svg
---

I like emojis, I think they add a lot to software development 🧐.

They can show [solidarity on code reviews](https://github.blog/2018-12-07-octoverse-emoji-on-github/), helpfully [label certain kinds of messages](https://18f.gsa.gov/2015/12/08/using-emoji-for-knowledge-sharing/), or politely [suggest a comment belongs in different channel](https://medium.com/@mathowie/yeah-it-started-with-someone-finding-this-funny-image-of-a-raccoon-looking-super-helpful-and-once-971e7c901e8e#.ka1cy355g). In an industry where precise and economical language is important, emojis can add playfulness without distracting from the primary meaning of a message.

Most serious scholarly research on emoji usage is based on twitter data. Rachael Tatman wrote a [fascinating blog post](https://makingnoiseandhearingthings.com/2018/03/17/how-do-we-use-emoji/) summarizing the latest studies, but her main observations are that:

1. Emoji are most often used to express an emotion accompanying a specific message
2. Emoji are usually predictable given the text of the message

I had a feeling that emojis are used differently on work slack than how they're used on twitter. I agree with emoji scholars that they are rarely used as ideograms, i.e. used to replace a specific word (like “_I'm having 🦐 for dinner, jealous?_” to mean “_I'm having shrimp for dinner, jealous?_”). But I doubted that they most often express emotion or that they have an obvious, transparent meaning. At work, emojis usually add new information to the text, have a symbolic meaning distinct from their literal meaning and can establish an in-group identity.

Some examples of emoji slang for teams I have been on:

- 🌾 -- the servers are sleeping soundly
- 🥩 -- I have deployment related anxiety
- 🏤 -- I am inspired by your professionalism
- 💩 -- I have strong opinions about your design choice here, but will not force the issue
- 💨 -- these tests are brittle
- 💂‍♀ -- we don’t have a linter, so I am linting via comment and feel silly about it

and [more](https://gitmoji.carloscuesta.me/) [examples](examples from teams I haven't been on) [from teams](https://slackhq.com/some-of-the-ways-we-use-emoji-at-slack) [I haven't been on](https://www.quora.com/On-GitHub-what-is-the-significance-of-the-Ship-It-squirrel).

To test my hypothesis, which was really only a _feeling_, I built an express application that tallies emojis for all users within the last 1000 messages of all slack channels within a slack workspace and displays the tally per user stylishly in the browser. I excluded slack reactions for simplicity.

As it turns out, my hypothesis that emojis are used primarily as a figurative, company specific patois was wrong! In my company's slack workplace, emojis were used mainly to convey a positive or negative sentiment accompanying the text. I did observe that women used emojis more than men and that both Gregs at my company used the 😉 emoji exclusively. Wait, I can salvage my project! Maybe a team’s happy/sad emoji ratio is a magic new productivity metric?

Again, no. My coworkers seemed a little nonplussed at having their emojis observed and tallied by me. It might have felt a little violating to have the throw away, whimsical element of their communications quantified and probed for hidden meaning. Also, now that my coworkers know their emoji usage data is being observed and collected, I suspect [their behavior has changed](<https://en.wikipedia.org/wiki/Observer_effect_(physics)>).

I gave a talk on my findings at [January's Tech Confluence meetup](https://www.meetup.com/TechConfluence/events/rwkxkrybccbtb/). You can find the slides [here](https://docs.google.com/presentation/d/1wqI0McejPnMmEmz42v1qaCC3O9n1TR1ztVBszEp192s/edit#slide=id.p). Below is a live tally of emojis in the slack workplace I have with my friends.

<!-- Copy and Paste Me -->
<div class="row justify-content-left pb-4 pt-2">
    <div class="glitch-embed-wrap" style="height: 40em; width: 100%;">
      <iframe
        src="https://glitch.com/embed/#!/embed/alfovo-emoji-index?path=index.js&previewSize=100"
        title="alfovo-emoji-index on Glitch"
        allow="geolocation; microphone; camera; midi; vr; encrypted-media"
        style="height: 100%; width: 100%; border: 0;">
      </iframe>
  </div>
</div>

This project was inspired by Richard Brautigan's poem, ["All Watched Over by Machines of Loving Grace"](https://www.theatlantic.com/technology/archive/2011/09/weekend-poem-all-watched-over-by-machines-of-loving-grace/245251/). Thank you Gabe for letting me spend some of my work hours on this fun project and thank you to past friends who kindly tempered their PR reviews with emojis when I was learning to code.

<div class="row">
	<div class="col-md-4">
		<img src="https://s3.amazonaws.com/37assets/svn/1128-neckbeard.jpg" alt="neckbeard emoji">
	</div>
</div>
