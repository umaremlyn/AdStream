import { MailerSend, EmailParams } from '@mailersend/sdk';

const mailerSend = new MailerSend({
  apiKey: process.env.MAILERSEND_API_KEY,
});

export const send = async ({ to, subject, text, html, from }) => {
  const emailParams = new EmailParams()
    .setFrom(from.email)
    .setFromName(from.name)
    .setRecipients([to])
    .setSubject(subject)
    .setHtml(html)
    .setText(text);

  await mailerSend.email.send(emailParams);
};
