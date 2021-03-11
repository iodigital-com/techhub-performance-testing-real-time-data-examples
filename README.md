# Real-time protocol performance test results

View interactive results [here](https://isaaceindhoven.github.io/realtime-ui-updates/).

## Introduction

There are many ways to send data from the server to the client in real-time. We did some performance testing to get a better understanding for each of there methods and find out which is the fastest, most reliable and least intensive for the server and the client.

This webpage was created to easily visualize the results of the performance tests in clear and understandable graphs.

## Frameworks

The different frameworks that have been performance tested:

| Name | Programming language | Protocol used |
|---|---|---|
| LongPolling-Express | Javascript/NodeJS | [LongPolling](https://javascript.info/long-polling) |
| LongPolling-ReactPHP | PHP/[ReactPHP](https://reactphp.org/) | [LongPolling](https://javascript.info/long-polling) |
| Mercure | Javascript/NodeJS | [Server-sent Events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events) |
| Ratchet | PHP | [Websockets](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) |
| SocketIO | Javascript/NodeJS | [Websockets](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) |
| SSE-Node-Express | Javascript/NodeJS | [Server-sent Events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events) |
| SSE-Node-HTTP | Javascript/NodeJS | [Server-sent Events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events) |
| SSE-Ratchet | PHP/[Ratchet](http://socketo.me/) | [Server-sent Events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events) |
| SSE-ReactPHP | PHP/[ReactPHP](https://reactphp.org/) | [Server-sent Events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events) |
| SSE-ReactPHP-Auth | PHP/[ReactPHP](https://reactphp.org/) with JWT decoding | [Server-sent Events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events) |
| SSE-Swoole | PHP/[Swoole](https://www.swoole.co.uk/) | [Server-sent Events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events) |
| WebRTC | Javascript | [WebRTC](https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API) |
| Websockets | Javascript/NodeJS | [Websockets](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) |

## Result files

When you open the webpage you are greeted with a list of tests results.<br/>
Each of these result files contains the performance results foreach test with different parameters:
- Amount of tests;
- Amount of clients;
- Amount of messages sent from the server to the clients.

## Graphs

- Two global graphs with all frameworks:
    - Left: Times to receive all messages by the client.
    - Right: Time difference between the slowest and fastest test.
- Foreach protocol six different graphs:
    - Top-left: Times to receive all messages by the clients foreach test.
    - Top-right: Time difference between the slowest and fastest client foreach test.
    - Middle-left: CPU percentage of the clients foreach test.
    - Middle-right: CPU percentage of the server for all the tests.
    - Bottom-left: Memory usages of the clients per test.
    - Bottom-right: Memory usage of the server for all the tests.

## Tools/Frameworks Used
- [TailwindCSS](https://tailwindcss.com/)
- [AlphineJS](https://github.com/alpinejs/alpine)
- [ChartJS](https://www.chartjs.org/)
- [ChartJS Annotation Plugin](https://github.com/chartjs/chartjs-plugin-annotation)
- [Lodash](https://lodash.com/)