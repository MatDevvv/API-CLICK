/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import UsersController from '../app/controllers/users_controller.js'
import RoomsController from '../app/controllers/rooms_controller.js'

router.get('/users', [UsersController, 'index'])

router.post('/users', [UsersController, 'store'])

router.put('/user/:id', [UsersController, 'update'])

router.get('/user/:id', [UsersController, 'show'])

router.delete('/user/:id', [UsersController, 'destroy'])

router.get('/rooms', [RoomsController, 'index'])

router.post('/rooms', [RoomsController, 'store'])

router.put('/rooms/:id', [RoomsController, 'update'])

router.get('/rooms/:id', [RoomsController, 'show'])

router.delete('/rooms/:id', [RoomsController, 'destroy'])
