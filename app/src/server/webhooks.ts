import { send } from './emailSender.js';

// Example usage
await send({
  to: 'recipient@example.com',
  subject: 'Welcome to Open SaaS App',
  text: 'Thank you for signing up!',
  html: '<p>Thank you for signing up!</p>',
  from: {
    name: 'Open SaaS App',
    email: 'your-verified-email@example.com',
  },
});
