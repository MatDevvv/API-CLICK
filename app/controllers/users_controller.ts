import type { HttpContext } from '@adonisjs/core/http'
import User from '../models/user.js'

export default class UsersController {
  async index({}: HttpContext) {
    return await User.query().orderBy('id', 'desc')
  }

  async store({ request, response }: HttpContext) {
    try {
      const user = new User()
      user.full_name = request.input('name')
      user.email = request.input('email')
      user.password = request.input('password')
      user.registration = request.input('registration')
      user.dateBirth = request.input('dateBirth')
      await user.save()

      return response.status(200).json({ message: 'Usuário criado com sucesso' })
    } catch (error) {
      return response.status(500).json({ message: 'Erro ao criar usuário', error })
    }
  }

  async show({ params }: HttpContext) {
    return await User.find(params.id)
  }

  async update({ params, request }: HttpContext) {
    const payload = request.all()
    return User.query().where('id', params.id).update(payload)
  }

  async destroy({ params }: HttpContext) {
    return User.query().where('id', params.id).delete()
  }
}
