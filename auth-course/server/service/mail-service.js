const nodemailer = require('nodemailer')

class MailService {

	constructor() {
		this.transporter = nodemailer.createTransport({
			service: "gmail",
			auth: {
				user: process.env.MAIL_USER,
				pass: process.env.MAIL_PASSWORD
			},
			tls: {
				rejectUnauthorized: false
			}
		})
	}

	async sendActivationMail(to, link) {
		await this.transporter.sendMail({
			from: process.env.MAIL_USER,
			to,
			subject: 'Активация аккаунта на ' + process.env.API_URL,
			text: '',
			html:` 
				<div>
					<h1>Для активации перейдите по ссылке</h1>
					<a href="${link}">${link}</a>
				</div>`
		})
	}
}

module.exports = new MailService()