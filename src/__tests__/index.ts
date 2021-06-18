import { createClient } from "~@/index";
import path from "path";
describe("Sgmail", () => {
  it("it can send email with mjml", () => {
    const client = createClient({
      apiKey: "",
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
  });
});
