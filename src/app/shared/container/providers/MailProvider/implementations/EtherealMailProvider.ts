import fs from "fs";
import nodemailer, { Transporter } from "nodemailer";
import { IMailProvider } from "../IMailProvider";
import handlebars from 'handlebars';

class EtherealMailProvider implements IMailProvider {
  private client: Transporter | undefined;

  constructor() { }

  private async initialize() {
    try {
      const account = await nodemailer.createTestAccount();
      const transporter = nodemailer.createTransport({
        host: account.smtp.host,
        port: account.smtp.port,
        secure: account.smtp.secure,
        auth: {
          user: account.user,
          pass: account.pass,
        },
      });

      this.client = transporter;
    } catch (err) {
      console.error("Failed to initialize EtherealMailProvider:", err);
    }
  }

  async sendMail(
    to: string,
    subject: string,
    variables: any,
    path: string
  ): Promise<void> {
    if (!this.client) {
      await this.initialize();
      if (!this.client) {
        throw new Error("Failed to initialize EtherealMailProvider");
      }
    }

    const templateFileContent = fs.readFileSync(path).toString("utf-8");
    const templateParse = handlebars.compile(templateFileContent);
    const templateHTML = templateParse(variables);

    const message = await this.client.sendMail({
      to,
      from: "GlasGow <noglasgow@glasgow.com.br>",
      subject,
      html: templateHTML,
    });

    console.log("Message sent: %s", message.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(message));
  }
}

export { EtherealMailProvider };
