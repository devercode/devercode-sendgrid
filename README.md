# Devercode-Sendgrid

Another helpful module for send mail with sendgrid

## Authors

- [@devercode](https://github.com/devercode)

## Installation

```bash
  npm install devercode-sendgrid
  yarn add devercode-sendgrid
```

## Features

- Sendgrid support
- MJML and Handlebars support

## Usage

- Send mail with html

```javascript
import { createClient } from "~@/index";
const client = createClient({
  apiKey: "SG.key",
});
client.send({
  from: "support@example.com",
  to: "any@example.com",
  html: `
      <h1>Hello world</h1>
    `,
  subject: "Testing",
});
```

- Send mail with mjml

```javascript
import { createClient } from "~@/index";
const client = createClient({
  apiKey: "SG.key",
});
client
  .sendWithMjml({
    path: path.join(__dirname, "../__fixtures__/template.mjml"),
    from: "help@thebugbunny.com",
    meta: {
      name: "thinh",
    },
    subject: "Test Message",
    to: "deverpham@gmail.com",
  })
  .catch((err) => {
    console.log(err.response.body);
  });
```

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Support

For support, email devercode@gmail.com
