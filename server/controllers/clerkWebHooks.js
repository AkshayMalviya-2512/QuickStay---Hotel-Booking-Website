import User from "../models/User.js";
import { Webhook } from "svix";


const clerkWebHooks = async (req, res) => {
    try{
        //Svix instance with clerk web hook
        const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRECT)

        //headers
        const headers = {
            "svix-id": req.headers["svix-id"],
            "svix-timestamp": req.headers["svix-timestamp"],
            "svix-signature": req.headers["svix-signature"],
        };

        //hearder verification
        await whook.verify(JSON.stringify(req.body), headers)

        //get data from request body
        const{data, type} = req.body;

        const userData = {
            _id: data.id,
            email: data.email_addresses[0].email_address,
            username: `${data.first_name || ""} ${data.last_name || ""}`,
            image:data.image_url
        }

        //switch case for different events
        switch (type) {
            case "user.created":{
                await User.create(userData);
                break;
            }
            case "user.updated":{
                await User.findByIdAndUpdate(data.id, userData);
                break;
            }
            case "user.deleted":{
                await User.findByIdAndDelete(data.id);
                break;
            }
        
            default:
                break;
        }

        res.json({success: true, message: "Webhook Received"})
    }catch(error){
        console.error(error.message);
        res.status(500).json({success: false, message: "error.message"})
    }
};

export default clerkWebHooks;