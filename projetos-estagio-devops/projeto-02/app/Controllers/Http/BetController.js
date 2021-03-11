/* eslint-disable camelcase */
'use strict'

const Bet = use('App/Models/Bet')
const Kue = use('Kue')
const Job = use('App/Jobs/NewBetMail')
const Database = use('Database')

class BetController {
  async index ({ request, auth }) {
    const { page, type } = request.get()

    const bets = await Database
      .table('bets')
      .innerJoin('types', 'bets.type_id', 'types.id')
      .where('bets.user_id', auth.user.id)
      .andWhere('types.type', type)
      .paginate(page, 10)

    return bets
  }

  async store ({ request, auth }) {
    const { bets_data: betsData } = request.only('bets_data')

    for (let index = 0; index < betsData.length; index++) {
      betsData[index].user_id = auth.user.id
    }

    const bet = await Bet.createMany(betsData)
    Kue.dispatch(Job.key, { email: auth.user.email, betsData }, { attempts: 3 })

    return bet
  }
}

module.exports = BetController
