import type { HttpContext } from '@adonisjs/core/http'
import Room from '../models/room.js'

export default class RoomsController {
  public async index({}: HttpContext) {
    // Método para listar todas as salas
  }
  public async store({ request, response }: HttpContext) {
    try {
      const room = new Room()
      room.name = request.input('name')
      room.id = request.input('id')
      await room.save()
      return response.status(201).json(room)
    } catch (error) {
      return response.status(400).json({ message: 'Erro ao criar sala', error: error.message })
    }
  }
  public async show({ params }: HttpContext) {
    return await Room.find(params.id)
  }
  public async update({ params, request }: HttpContext) {
    const payload = request.all()
    return Room.query().where('id', params.id).update(payload)
  }
  public async destroy({ params }: HttpContext) {
    return Room.query().where('id', params.id).delete()
  }
}
