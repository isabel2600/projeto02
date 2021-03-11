'use strict'

const User = use('App/Models/User')

class UserController {
  async index ({ request }) {
    const { page } = request.get()

    const users = await User.query().paginate(page)

    return users
  }

  async show ({ params }) {
    const user = await User.findOrFail(params.id)
    user.password = undefined
    return user
  }

  async store ({ request, auth }) {
    const data = request.only(['username', 'email', 'password'])

    const user = await User.create(data)
    user.password = undefined
    const token = await auth.attempt(data.email, data.password)

    return { ...user, token: token.token }
  }
}

module.exports = UserController
