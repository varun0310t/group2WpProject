import User from '../models/userModel.js';


export const downloadDocumentCloud = async (req, res) => {
    try {
        console.log(req.user);
        const undercurrent = await User.findOne({ username: req.user.username });
        if (!undercurrent) {
            return res.status(404).send("User not found");
        }
        const files = undercurrent.cloudUrl;
        console.log(files);
        res.status(200).send(files);



    } catch (error) {

        res.status(500).send("An error occurred");
    }
}



export const downloadDocumentLocal = async (req, res) => {
    try {
        const currentUser = await User.findOne({ username: req.user.username });
        if (!currentUser) {
            return res.status(404).send("User not found");
        }

        const files = currentUser.fileurl;
        res.status(200).send(files);

    } catch (error) {
        res.status(500).send("An error occurred");  // Add this line to send a response
        console.log(error);  // Add this line to log the error
    }
}

export const downloadDocumentLocalPost = async (req, res) => {  // Add this line to define the downloadDocumentLocalPost function
    try {
        const currentUser = await User.findOne({ username: req.user.username });  // Add this line to find the user
        if (!currentUser) {  // Add this line to check if the user does not exist
            return res.status(404).send("User not found");  // Add this line to send a response
        }
       const filename= req.body.filename;
        const files = currentUser.fileurl;
        const file = files.find(file => file === filename);  // Add this line to find the file
        if (!file) {  // Add this line to check if the file does not exist
            return res.status(404).send("File not found");  // Add this line to send a response
        }
        //from lcoal storage search this file and send it to the user

          res.download(`localStorage/${filename}`);  // Add this line to send the file to the user   
       
    }

    catch (error) {  // Add this line to catch an error
        res.status(500).send("An error occurred");  // Add this line to send a response
        console.log(error);  // Add this line to log the error
    }

}