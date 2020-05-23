---
layout: post
title: WebSockets & Protocol Suite Etiquette
date: 2019-07-01 14:49:03 -0500
tags: [code, research, ir]
thumbnail: /assets/img/design/etiquette.svg
---

How do servers conduct themselves when performing the risky, untoward act of sending data to each other across the wild, wild web? What is the proper[^1] protocol? Most of the web is based on the _HyperText Transfer Protocol_ (HTTP) request/response model of client initiated transactions.  Your browser, the client, politely requests data from a server and the server responds to those requests. Even better, when following the _Transmission Control Protocol_ (TCP) on which HTTP is based, the client will send an acknowledgement that the data has been received, so the server can resend if the data gets lost. Because of this behavior, TCP is described as a connection based, stream-oriented protocol.

Consider the _User Datagram Protocol_ (UDP), an alternative to TCP. While the communication is still initiated by the client, this protocol is "connectionless" or message-oriented, because the server will send data without checking on the state or readiness of the client. This is the late 90s coffeeshop slam poetry of data transfer: the server will refuse to do normal audience banter, opening its mouth only to send a jumbled bunch of datagrams and then drop the mic.

By boldly forgoing the customary handshake, the hassle of worrying if the data has been received by the client, and any guarantee that the data will be sent in order; UDP offers low latency data transfer for bandwidth intensive applications that can lackadaisically tolerate packet loss and disarray, like multiplayer games or, everyone's favorite new hobby, video conferencing.[^2]

## And Now, Double Time

<div class="row">
  <div class="col-lg-12 pt-4 pb-4">
  	<img class="prototype" src="/assets/img/design/etiquette2.svg" alt="My office on Camelot Ln"/>
  </div>
</div>
> **The test of good manners is to be able to put up pleasantly with bad ones.
-- Wendell Willkie**

Like etiquette, data transfer protocols are complicated and evolving. As a connection based protocol, HTTP has been called too "chatty", because it requires so much reassuring back and forth between client and server.  In contrast, UDP could be called too "venty" because it does not give a hoot about what the client has to say before communicating a torrent of information.

As applications with high-frequency request-response cycles, such as chat applications[^3], became more popular, the traditional HTTP model no longer seemed appropriate. The politesse of setting up a new connection every request/response cycle introduced too much latency. Ideally there would be long lasting connection between client and server that was bidirectional, allowing the server to send data to the client without the client having to request it.

Solutions like long polling, where a HTTP connection was held open until the server had data to send to the client, were not ideal because the cookie and header data within the HTTP request made data transfer bandwidth intensive. Was it possible to create a connection based protocol with the reliability of TCP, but that was low latency and didn't require creating a connection every request/response like UDP?

## Enter WebSockets

<div class="row">
  <div class="col-lg-12 pt-4 pb-4">
  	<img class="prototype" src="/assets/img/design/internet_protocol.svg" alt="My office on Camelot Ln"/>
  </div>
</div>
> **“The world was my oyster but I used the wrong fork.”
-- Oscar Wilde**

WebSockets provide a persistent, low latency connection that can support transactions initiated by either the client or server, any time after a connection is established. In order to establish a WebSocket connection by way of a "WebSocket handshake", the client uses standard HTTP protocol to request an "upgrade" from HTTP to a WebSocket connection. If the server supports WebSockets it will respond with an _HTTP/1.1 101 Switching Protocols_ response, which replaces the initial HTTP connection with a WebSocket connection that uses the same underlying TCP/IP connection.

WebSockets are great for the chat application I work with at my current job because:

1. They don't require the client to poll the server for new messages, instead the server can send messages to the client whenever data becomes available.
2. Data is transferred through a WebSocket as messages, each of which consists of one or more frames containing the data you are sending. In order to ensure the message can be properly reconstructed when it reaches the client each frame is prefixed with 4-12 bytes of data about the payload. Using this frame-based messaging system helps to reduce the amount of non-payload data that is transferred, leading to significant reductions in latency.

However, a downside to using WebSockets is that browsers allow huge numbers of open WebSocket connections. For most of our products we send the user several messages, and each message requires them to open a new connection to our chatbot in their browser. A user could have our application open in a bunch of tabs on their phone for who knows how long! My latest project is to see how many concurrent connections we are supporting in production and what the maximum number of concurrent connections our WebSocket gateway can handle while keeping response times below a second.

Would it be possible to build WebSockets on a UDP rather than TCP connection?  It does seem especially necessary for WebSockets to be connection based, i.e. the client is assuredly ready to receive unrequested data from the server. Also, it seems to me that sacrificing reliability comes at an exceptionally high cost in computing. It reminds me of the steadfast popularity of ACID compliant data stores, like PostgreSQL, despite their age and decided unfashionableness.

[^1]: For the pedants, I mean this in a general sense. I don't trust myself to peel back all the layers of this onion in a single post.
[^2]: Doing away with these social niceties allows the UDP header to be only 8 bytes compared to TCP's 20 bytes.
[^3]: The term 'real-time' always makes me laugh. If your application must guarantee response within a given time, why not call it 'deadline-driven' or 'time-sensitive' or 'asap'? A 'real-time' application sounds like a tool for becoming a fourth dimensional being.
