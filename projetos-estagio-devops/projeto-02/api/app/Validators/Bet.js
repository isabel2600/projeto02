'use strict'

const Antl = use('Antl')

class Type {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      bets_data: 'required|array'
    }
  }

  get message () {
    return Antl.list('validation')
  }
}

module.exports = Type
