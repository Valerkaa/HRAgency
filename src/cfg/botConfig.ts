import axios from "axios";

const authToken = process.env.TELEGRAM_BOT_TOKEN;
const chatId = process.env.TELEGRAM_CHAT_ID;


const sendTelegramNotification = async (message: any) => {
    const url = `https://api.telegram.org/bot${authToken}/sendMessage`;
    const payload = {
        chat_id: chatId,
        text: message,
        parse_mode: 'html'
    }

    return  axios.post(url, payload)
}

export default sendTelegramNotification;