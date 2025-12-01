// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js
const EventBus = {
    listeners: {},

    subscribe(eventName, handler) {
        if (!this.listeners[eventName]) {
            this.listeners[eventName] = [];
        }
        this.listeners[eventName].push(handler);
    },

    publish(eventName, data) {
        const handlers = this.listeners[eventName] || [];
        handlers.forEach(fn => fn(data));
    }
};

EventBus.subscribe("MESSAGE", function (payload) {
    const list = document.querySelector("#log_list");
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.textContent = `[${new Date().toLocaleTimeString()}] ${payload.text}`;
    list.appendChild(li);

    const totals_list = document.querySelector("#totals_list");
    const totals_li = document.createElement("li");
    totals_li.className = "list-group-item";
    totals_li.textContent = `${payload.amount}`;
    totals_list.appendChild(totals_li);
});
EventBus.subscribe("MESSAGE", function (payload) {
    console.log("Log voor debugging:", payload.text);
});

document
    .querySelector("#btn_send")
    .addEventListener("click", () => {
        const input = document.querySelector("#team_name");
        const amount = document.querySelector("#team_value").value;
        const text = input.value.trim();
        if (!text || !amount) return;

        EventBus.publish("MESSAGE", { text, amount });
        input.value = "";
    });