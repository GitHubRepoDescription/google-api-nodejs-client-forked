<img src="https://avatars0.githubusercontent.com/u/1342004?v=3&s=96" alt="Google Inc. logo" title="Google" align="right" height="96" width="96"/>

# chat

> Create bots and extend the new Hangouts Chat.

## Installation

```sh
$ npm install googleapis
```

## Usage
All documentation and usage information can be found on [GitHub](https://github.com/googleapis/google-api-nodejs-client).

## Building a browser bundle

This library can be used in a browser. To prepare a single file bundle, clone the
[repository](https://github.com/googleapis/google-api-nodejs-client) and run

```sh
$ cd src/apis/chat
$ npm install
$ npm run webpack
```

The generated bundle will be written to `dist/chat.min.js`. Use it from your HTML file:

```html
<script src="/path/to/chat.min.js"></script>
<script>
const { chat, auth } = Chat;
</script>
```

## Using the client library

```js
// Assuming that `GOOGLE_APPLICATION_CREDENTIALS="/app/.data/chatbot.json"` is set as an environment variable with the path to the json key that you downloaded when creating a service account for your bot.

const {google} = require("googleapis")
const SCOPES = ["https://www.googleapis.com/auth/chat.bot"]

async main() {
    const auth = await google.auth.getClient({
      scopes: SCOPES
    })
    const chat = google.chat({version: "v1", auth: auth})
    console.log(chat)
    const project = await google.auth.getProjectId()
    const spaces = await chat.spaces.list()
}

main()
```

## License
This library is licensed under Apache 2.0. Full license text is available in [LICENSE](https://github.com/googleapis/google-api-nodejs-client/blob/master/LICENSE).

## Contributing
We love contributions! Before submitting a Pull Request, it's always good to start with a new issue first. To learn more, see [CONTRIBUTING](https://github.com/google/google-api-nodejs-client/blob/master/.github/CONTRIBUTING.md).

## Questions/problems?
* Ask your development related questions on [StackOverflow](http://stackoverflow.com/questions/tagged/google-api-nodejs-client).
* If you've found an bug/issue, please [file it on GitHub](https://github.com/googleapis/google-api-nodejs-client/issues).


*Crafted with ?????? by the Google Node.js team*
