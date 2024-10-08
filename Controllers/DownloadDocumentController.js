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
        res.status(500).send("An error occurred");  
        console.log(error);  
    }
}

export const downloadDocumentLocalPost = async (req, res) => { 
    try {
        const currentUser = await User.findOne({ username: req.user.username }); 
        if (!currentUser) {  
            return res.status(404).send("User not found");  
        }
       const filename= req.body.filename;
        const files = currentUser.fileurl;
        const file = files.find(file => file === filename);  
        if (!file) {  
            return res.status(404).send("File not found");  
        }
        

          res.download(`localStorage/${filename}`);
       
    }

    catch (error) {  
        res.status(500).send("An error occurred");  
        console.log(error); 
    }

}