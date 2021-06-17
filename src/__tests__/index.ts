import { createClient } from "~@/index";
import path from "path";
describe("Sgmail", () => {
  it("it can send email with mjml", () => {
    const client = createClient({
      apiKey:
        "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",
    });
    client
      .sendWithMjml({
        path: path.join(__dirname, "../__fixtures__/template.mjml"),
        from: "help@thebugbunny.com",
        meta: {},
        subject: "Test Message",
        to: "deverpham@gmail.com",
      })
      .catch((err) => {
        console.log(err.response.body);
      });
  });
});
