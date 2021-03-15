'use strict'

const Type = use('App/Models/Type')

class TypeController {
  async index () {
    const types = await Type.query().fetch()

    return types
  }

  async store ({ request }) {
    const data = request.only([
      'type',
      'description',
      'range',
      'price',
      'max_number',
      'color'
    ])

    const type = await Type.create(data)

    return type
  }

  async update ({ params, request }) {
    const data = request.only([
      'type',
      'description',
      'range',
      'price',
      'max_number',
      'color'
    ])

    const type = await Type.findOrFail(params.id)
    type.merge(data)
    await type.save()

    return type
  }

  async destroy ({ params }) {
    const type = await Type.findOrFail(params.id)

    await type.delete()
  }
}

module.exports = TypeController
