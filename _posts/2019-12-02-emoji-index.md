---
layout: post
title: The Emoji Index
date: 2019-12-02 14:49:03 -0500
tags: [talk, code, emoji]
thumbnail: /assets/img/design/peachmotions.svg
---

I like emojis; I think they add a lot to software development 🧐.

They can show [solidarity on code reviews](https://github.blog/2018-12-07-octoverse-emoji-on-github/), helpfully [label categories of messages](https://18f.gsa.gov/2015/12/08/using-emoji-for-knowledge-sharing/), or politely [suggest a comment belongs in a different channel](https://medium.com/@mathowie/yeah-it-started-with-someone-finding-this-funny-image-of-a-raccoon-looking-super-helpful-and-once-971e7c901e8e#.ka1cy355g). In an industry where precise and economical language is important, emojis can add playfulness without distracting from the point.

Most scholarly research on emoji usage uses Twitter data. Rachael Tatman wrote a [fascinating blog post](https://makingnoiseandhearingthings.com/2018/03/17/how-do-we-use-emoji/) summarizing the latest studies, but her main observations are that:

1. Emoji most often express an emotion accompanying a specific message.
2. Emoji are usually predictable from the text of the message.

I had a feeling that emojis are used differently in work communications than on Twitter. I agree with emoji scholars that writers rarely use emojis as ideograms, i.e., to replace a specific word like "_I'm having 🦐 for dinner, jealous?_" to mean "_I'm having shrimp for dinner, jealous?_". But I doubted that they primarily express emotion or have an obvious, transparent meaning in work chatter. In my experience, emojis usually add new information to the text, have a symbolic meaning distinct from their literal sense, and can establish an in-group identity at work.

Some examples of GitHub emoji slang for teams I have been on:

- 🌾 -- the servers are sleeping soundly
- 🥩 -- I have deployment related anxiety
- 🏤 -- I am inspired by your professionalism
- 💩 -- I have strong opinions about your design choice here, but will not force the issue
- 💨 -- these tests are brittle
- 💂‍♀ -- we don’t have a linter, so I am linting via comment and feel silly about it

and [more](https://gitmoji.carloscuesta.me/) [examples](examples from teams I haven't been on) [from teams](https://slackhq.com/some-of-the-ways-we-use-emoji-at-slack) [I haven't been on](https://www.quora.com/On-GitHub-what-is-the-significance-of-the-Ship-It-squirrel).

To test my hypothesis, which was really only a _feeling_, I built an express app that tallies emojis for all users within the last 1000 messages of all Slack channels within a Slack workspace and displays the tally per user stylishly in the browser. I excluded Slack reactions for simplicity.

## Results

As it turns out, my hypothesis that emojis are used primarily as a figurative, company-specific patois was wrong! The participants in my company's Slack workplace use emojis mainly to convey a positive or negative sentiment accompanying the text. When I looked at the emoji content in each participant's last 100 messages, women used slightly more emojis than the men on the team. Women make up 53% of the team, but 62% of the emoji usage. The top two emoji users, who are roughly 10% of the team, are women. They account for 37% of the entire team's emoji use—very impressive!

My first hypothesis may have been wrong, but when has that ever stopped me? Maybe a team's happy/sad emoji ratio is a magic new satisfaction metric?

Unfortunately, I can’t give you the answer. My coworkers seemed nonplussed at having their emojis observed and tallied by me. It likely felt a little violating to have the throwaway, whimsical parts of their speech quantified and probed for hidden meaning. Also, now that my coworkers know their emoji usage data is being observed and collected, I suspect [their behavior has changed](<https://en.wikipedia.org/wiki/Observer_effect_(physics)>).

I gave a talk on my findings at [January's Tech Confluence meetup](https://www.meetup.com/TechConfluence/events/rwkxkrybccbtb/). You can find the slides [here](https://docs.google.com/presentation/d/1wqI0McejPnMmEmz42v1qaCC3O9n1TR1ztVBszEp192s/edit#slide=id.p). Below is a live tally of emojis in the Slack workplace I have with my friends.

<div class="glitch-embed-wrap" style="height: 40em; width: 100%; margin: 1.5rem 0;">
  <iframe
    src="https://glitch.com/embed/#!/embed/alfovo-emoji-index?path=index.js&previewSize=100"
    title="alfovo-emoji-index on Glitch"
    allow="geolocation; microphone; camera; midi; vr; encrypted-media"
    style="height: 100%; width: 100%; border: 0;">
  </iframe>
</div>

## Conclusion

To draw any real conclusions, I would need to build a larger dataset of emoji use by taking multiple samples over a longer period of time. However, according to initial observations, my key takeaways are:

1. The participants in my company's Slack workspace primarily use emojis to express positive or negative sentiment.
2. The frequency of emoji use varied by gender, with women using emojis more frequently than men.
3. The distribution of emoji use across the team was uneven, with the top 10% of people accounting for 37% of the team’s emoji use.
4. My coworkers are hilarious and good at emojis.

In the future, I would like to calculate the percentage of each team member's messages that contain emojis for their entire message history, rather than just the last 100 messages. I would also like to compare a person’s emoji message percent to their total number of slack messages to see if the two most prolific emoji users at my company are correspondingly the most prolific communicators in general. If I could create a metric for " message effectiveness," I wonder if I could determine whether emojis make communication more or less productive at work. In future calculations, I would like to factor in Slack emoji "reactions" to make my results more accurate.

Finally, I'd be curious to see which Slack channels have the most emoji use. I suspect the channels containing moderately stressful information, i.e., test failures or deployment updates, have the most emoji use.

## Acknowledgements

This project was inspired by Richard Brautigan's poem, ["All Watched Over by Machines of Loving Grace"](https://www.theatlantic.com/technology/archive/2011/09/weekend-poem-all-watched-over-by-machines-of-loving-grace/245251/). Thank you, Gabe, for letting me spend some of my work hours on this fun project and thank you to past friends who kindly tempered their PR reviews with emojis when I was learning to code.

<img src="https://s3.amazonaws.com/37assets/svn/1128-neckbeard.jpg" style="width: 20%; margin: 1rem 0;" alt="neckbeard emoji">
