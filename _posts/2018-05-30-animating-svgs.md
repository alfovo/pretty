---
layout: post
title: CSS Transitions & Animations
date: 2018-05-30 14:49:03 -0500
tags: [ux, illustration, ir]
thumbnail: /assets/img/design/animated/washington.svg
extra_css:
  - assets/animated-svgs.css
---

I had a fun time playing around with CSS transforms, transitions and animations the other night. Hover over the following to check out my fancy footwork:

<div class="horizontal-content">
  <li>
    {% svg /assets/img/design/animated/washington.svg %}
  </li>
  <li>
    <div class="button-square">
      <h4>I've changed my mind.</h4>
    </div>
  </li>
</div>

Puts you in mind of a Geocities site from the 1990s, no?

<div class="horizontal-content">
  {% svg /assets/img/design/animated/eagle.svg width="200px"%}
  {% svg /assets/img/design/animated/eye.svg %}
  {% svg /assets/img/design/animated/tools.svg %}
</div>

Sometimes too much motion on a website can make me feel cyber sick. For example, I find the parallax scrolling popular a few years ago disorienting, and too much animation on buttons or menus distracting. But if the content of a site is only animation, bring it on! Animating SVGs without any JavaScript feels very look-ma-no-hands, and it made me feel quite nostalgic for internet 1.0.
