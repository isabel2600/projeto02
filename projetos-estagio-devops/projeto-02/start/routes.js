'use strict'

const Route = use('Route')

Route.get('users', 'UserController.index')
Route.post('users', 'UserController.store').validator('User')
Route.get('users/:id', 'UserController.show')

Route.post('sessions', 'SessionController.store').validator('Session')

Route.post('passwords', 'ForgotPasswordController.store').validator('ForgotPassword')
Route.put('passwords', 'ForgotPasswordController.update').validator('ResetPassword')

Route.group(() => {
  Route.put('passwords-auth', 'ForgotPasswordController.updateUserInfo').validator('ResetPassword')
  Route.resource('types', 'TypeController')
    .apiOnly()
    .validator(new Map(
      [
        [
          ['types.store', 'types.update'],
          ['Type']
        ]
      ]
    ))

  Route.get('bets', 'BetController.index')
  Route.post('bets', 'BetController.store').validator('Bet')
}).middleware(['auth'])
