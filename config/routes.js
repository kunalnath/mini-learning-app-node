const express = require('express')
const router = express.Router()
const coursesController = require('../app/controllers/coursesController')
const studentsController = require('../app/controllers/studentsController')
const userProfileController = require('../app/controllers/userProfileController')
const usersController = require('../app/controllers/usersController')
const { authenticateUser } = require('../app/middlewares/authenticate')

router.get('/api/profile', authenticateUser, userProfileController.list)
router.post('/api/profile', authenticateUser , userProfileController.create)
router.get('/api/profile/:id', authenticateUser , userProfileController.show)
router.put('/api/profile/:id' , authenticateUser , userProfileController.update)
router.delete('/api/profile/:id', authenticateUser , userProfileController.destroy)

router.get('/api/students', authenticateUser , studentsController.list)
router.post('/api/students', authenticateUser , studentsController.create)
router.get('/api/students/:id', authenticateUser , studentsController.show)
router.put('/api/students/:id', authenticateUser , studentsController.update)
router.delete('/api/students/:id', authenticateUser, studentsController.destroy)

router.get('/api/courses/all', authenticateUser , coursesController.listAll)
router.get('/api/courses' , authenticateUser , coursesController.list)
router.post('/api/courses' , authenticateUser , coursesController.create)
router.get('/api/courses/:id', authenticateUser , coursesController.show)
router.put('/api/courses/:id', authenticateUser , coursesController.update)
router.delete('/api/courses/:id', authenticateUser , coursesController.destroy)

router.get('/api/users',usersController.list)
router.post('/api/users/register', usersController.register)
router.post('/api/users/login',usersController.login)
router.get('/api/users/account', authenticateUser , usersController.account)

module.exports = router

