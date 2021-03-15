'use strict'

const User = use('App/Models/User')
const Mail = use('Mail')
const crypto = require('crypto')
const moment = require('moment')

class ForgotPasswordController {
  async store ({ request, response }) {
    try {
      const email = request.input('email')
      const user = await User.findByOrFail('email', email)

      user.token = crypto.randomBytes(12).toString('hex')
      user.token_created_at = new Date()

      await user.save()

      await Mail.send(
        ['emails.forgot_password'],
        {
          email,
          token: user.token,
          link: `${request.input('redirect_url')}/${user.token}`
        },
        message => {
          message
            .to(user.email)
            .from('josethomaz2003@gmail.com', 'José Thomaz | Luby Software')
            .subject('Recuperação de senha')
        }
      )
    } catch (err) {
      return response.status(err.status)
        .send(
          {
            error:
              {
                message: 'Algo não deu certo, esse e-mail existe?'
              }
          }
        )
    }
  }

  async update ({ response, request, auth }) {
    try {
      const { token, password } = request.all()

      if (token) {
        const user = await User.findByOrFail('token', token)

        const tokenExpired = moment()
          .subtract('2', 'days')
          .isAfter(user.token_created_at)

        if (tokenExpired) {
          return response
            .status(401)
            .send({ error: { message: 'O token de recuperação está expirado' } })
        }

        user.token = null
        user.token_created_at = null
        user.password = password

        await user.save()
      }

      const user = User.findOrFail(auth.user.id)
      user.password = password

      await user.save()
    } catch (err) {
      return response
        .status(400)
        .send({ error: { message: 'Algo deu errado ao resetar a sua senha' } })
    }
  }

  async updateUserInfo ({ request, auth }) {
    const password = request.input('password')

    const user = await User.findOrFail(auth.user.id)

    user.password = password
    await user.save()
  }
}

module.exports = ForgotPasswordController
