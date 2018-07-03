const TOKEN = '610787216:AAGus1ZsR2qubfT5h1md3lyndpZzvSjgQ6I' // токен от BotFather
const CHAT_ID = '355514330'; // chat_id для телеграм

var form = document.querySelector('.form'); // находим в DOM нашу форму
form.addEventListener("submit", function (e) { // прослушиваем форму
    e.preventDefault(); // перехватываем стандартный ответ
    data = new FormData(this); // вместо serialize на jQuery
    sendMsg(data); // передаём данные из формы на отправку
})

function sendMsg(data) {
    var url = 'https://api.telegram.org/bot' + TOKEN + '/sendMessage'; // токен бота
    var body = JSON.stringify({ // склеиваем объект в JSON строку
        chat_id: CHAT_ID,
        parse_mode: 'Markdown', // разметка сообщений вкл (чтобы использовать *жирный текст*)
        text: '\n\n*Name:* ' + data.get("name") + '\n*Email:* ' + data.get("email") + '\n*Message:* ' + data.get("message")
    });
    var xhr = new XMLHttpRequest(); // инициализируем AJAX запрос
    xhr.open('POST', url, true); // отправляем наше сообщение методом POST на сервак телеги
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8'); // на всякий случай, оповестим телеграм, что отправили JSON
    xhr.send(body);
}