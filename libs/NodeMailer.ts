"use server";
import * as handlebars from "handlebars";
import nodemailer from "nodemailer";
import { mailTemplate } from "./MailTemplate";

export async function sendMail({
  to,
  name,
  subject,
  body,
  bcc,
}: {
  to: string;
  name: string;
  subject: string;
  body: any;
  bcc: string;
}) {
  const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;
  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  });

  try {
    const testResult = await transport.verify();
  } catch (error) {
    return;
  }

  try {
    const sendResult = await transport.sendMail({
      from: SMTP_EMAIL,
      to,
      subject,
      html: body,
      bcc,
    });
  } catch (error) {}
}

export async function compileMailTemplate(body: any) {
  const arrObj = JSON.parse(body);

  const jsdom = require("jsdom");
  const { JSDOM } = jsdom;

  // Logging to inspect the objects
  arrObj.forEach((item: any, index: any) => {});

  // Convert the array of objects to HTML elements
  const createHTMLElements = (array: any[]) => {
    const { document } = new JSDOM("").window;
    const container = document.createElement("ul");

    array.forEach((item) => {
      let li = document.createElement("li");
      li.textContent = item.title;
      return (container.innerHTML += item.title);
    });

    return container;
  };

  // Get the HTML content
  const html = createHTMLElements(arrObj).innerHTML;

  const template = handlebars.compile(mailTemplate);
  const htmlBody = template({
    html,
  });
  return htmlBody;
}
