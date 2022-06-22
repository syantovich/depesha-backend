module.exports = {
  async Email(ctx, next) {
    console.log(1);
    try {
      const { to, subject, firstName, lastName, email, phoneNumber, message } =
        ctx.request.body;
      console.log(ctx.request.body);
      await strapi.plugins["email"].services.email.send({
        to,
        from: process.env.SMTP_USERNAME,
        subject,
        html: `<h4>${firstName} ${lastName}</h4><div><a href="mailto:${email}" type="email">${email}</a></div><div><a href="tel:${phoneNumber}">${phoneNumber}</a></div><p>${message}</p>`,
      });
      ctx.response.status = 200;
    } catch (e) {
      console.log(e);
      ctx.response.status = 400;
    }
  },
};
