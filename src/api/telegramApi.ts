import axios from "axios";

const authToken = process.env.REACT_APP_TELEGRAM_BOT_TOKEN;
const chatId = process.env.REACT_APP_TELEGRAM_CHAT_ID;


const sendTelegramNotification = async (message: any) => {
    const url = `https://api.telegram.org/bot${authToken}/sendMessage`;
    const payload = {
        chat_id: chatId,
        text: `🧟‍♀️New slave: 
👽fullname: ${message.fullName}
☠️vacancy: ${message.vacancy}
🐒experience: ${message.experience}
🌐englvl: ${message.englvl}
⚜️employment: ${message.employment}

Contact data:
🔔phone: ${message.phone}
🫶email: ${message.email}
🌃city: ${message.city}`,
        withCredentials: false,
        parse_mode: 'html'
    }

    return  axios.post(url, payload)
}

export default sendTelegramNotification;