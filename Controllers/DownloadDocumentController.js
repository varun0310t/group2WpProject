import User from '../models/userModel.js';


export const downloadDocumentCloud = async (req, res) => {
    try {
        console.log(req.user);
        const undercurrent = User.find({ username: req.user.username });
        if (!undercurrent) {
            return res.status(404).send("User not found");
        }
        const files = undercurrent.filesUrl;

        res.status(200).send(files);



    } catch (error) {

        res.status(500).send("An error occurred");
    }
}