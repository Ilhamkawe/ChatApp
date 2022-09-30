import {pusher} from "../helper/pusher"

export const send = async (req, res) => {

    await pusher.trigger("my-channel", "my-event", {
        message: req.body.message
    });

}