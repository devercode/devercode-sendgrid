import sgMail from "@sendgrid/mail";
import mjml2html from "mjml";
import { compile } from "handlebars";
import fs from "fs";

export const createClient = (opts: { apiKey: string }) => {
  sgMail.setApiKey(opts.apiKey);
  return {
    send: async (opts: {
      from: string;
      to: string;
      subject: string;
      html: string;
    }) => {
      return sgMail.send(opts);
    },
    sendWithMjml: async (opts: {
      meta: object;
      from: string;
      path: string;
      to: string;
      subject: string;
    }) => {
      const mjml = compile(fs.readFileSync(opts.path, { encoding: "utf-8" }))(
        opts.meta
      );
      const { html } = mjml2html(mjml);
      return sgMail.send({
        from: opts.from,
        to: opts.to,
        subject: opts.subject,
        html,
      });
    },
  };
};
