import jwt from 'jsonwebtoken';

export const login = function (req, res) {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).send("Username and password are required");
    }
    User.findOne({ username, password })
        .then((user) => {
            if (!user) {
                return res.status(404).send("User not found");
            }
            const token = jwt.sign({
                username: user.username,
                id: user._id
            }, process.env.JWT_SECRET, { expiresIn: '30d' });
            res.status(200).json(
                token
            );
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send("An error occurred");
        }); 
}