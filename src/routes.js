import express from 'express';
import User from './models/User.js';
import { validate } from './middleware/validate.js';
import { userSch } from './validators/userValidator';

const router = express.Router()

router.get('/users', async(req, res) =>{
    const users = await User.find()
    res.json(users)
})

router.post('/users', validate(userSch), async(req, res) =>{
    const user = new User(req.body)
    await user.save()
    res.status(201).json(user)
})

export default router