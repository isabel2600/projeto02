'use strict'

const Antl = use('Antl')

class Type {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      type: 'required|string|unique:types',
      description: 'required|string',
      range: 'required|integer',
      price: 'required|number',
      max_number: 'required|integer',
      color: 'required|string|unique:types'
    }
  }

  get message () {
    return Antl.list('validation')
  }
}

module.exports = Type
