'use strict'

const Mail = use('Mail')

class NewBetMail {
  static get concurrency () {
    return 1
  }

  static get key () {
    return 'NewBetMail-job'
  }

  async handle ({ email, betsData }) {
    await Mail.send(
      ['emails.new_bet'],
      {
        email: email,
        betsData
      },
      message => {
        message
          .to(email)
          .from('josethomaz2003@gmail.com', 'José Thomaz | Luby')
          .subject('Você fez novas apostas')
      }
    )
  }
}

module.exports = NewBetMail
