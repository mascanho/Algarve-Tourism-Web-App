"use server";
import * as handlebars from "handlebars";
import nodemailer from "nodemailer";
import { mailTemplate } from "./MailTemplate";

export async function sendMail({
  to,
  name,
  subject,
  body,
}: {
  to: string;
  name: string;
  subject: string;
  body: any;
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
    console.log(testResult);
  } catch (error) {
    console.log(error);
    return;
  }

  try {
    const sendResult = await transport.sendMail({
      from: SMTP_EMAIL,
      to,
      subject,
      html: body,
    });
    console.log(sendResult);
  } catch (error) {
    console.log(error);
  }
}

export async function compileMailTemplate(body: any) {
  console.log(body, "what the fuck #########");

  const arrObj = JSON.parse(body);

  const jsdom = require("jsdom");
  const { JSDOM } = jsdom;

  // Logging to inspect the objects
  arrObj.forEach((item: any, index: any) => {
    console.log(`Object ${index + 1}:`, item);
  });

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
