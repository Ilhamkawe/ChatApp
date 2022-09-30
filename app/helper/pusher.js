const Pusher = require("pusher");
require('dotenv').config()

const {PUSHER_APP_ID, PUSHER_KEY, PUSHER_SECRET, PUSHER_CLUSTER} = process.env;

export const pusher = () => {
    
    const pusher = new Pusher({
        appId: PUSHER_APP_ID,
        key: PUSHER_KEY,
        secret: PUSHER_SECRET,
        cluster: PUSHER_CLUSTER,
        useTLS: true
    });

    return pusher

}