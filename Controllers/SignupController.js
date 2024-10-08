import User from '../models/userModel.js';
import jwt from 'jsonwebtoken';

 export const signup = function (req, res) {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).send("Username and password are required");
    }
    const newUser = new User({ username, password });

    newUser.save()
        .then(() => {
            const token = jwt.sign({
                username: newUser.username,
                id: newUser._id
            }, process.env.JWT_SECRET, { expiresIn: '30d' });
            res.status(201).json(
                token
            );
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send("An error occurred");
        });
};

