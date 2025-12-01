// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js
class SettingsSingleton {
    static instance;

    constructor() {
        if (SettingsSingleton.instance) {
            return SettingsSingleton.instance;
        }
        this.email = false;
        this.popup = false;
        this.interval = 0;

        SettingsSingleton.instance = this;
    }

    save(){
        const notify_email = document.querySelector("#notify_email")
        const notify_popup = document.querySelector("#notify_popup")
        const notify_interval = document.querySelector("#notify_interval")
        this.email = notify_email.value;
        this.popup = notify_popup.value;
        this.interval = notify_interval.value;
        console.log("test save()")

    }

    getSettings() {
        console.log("test getSettings()")
        return this.email;
        return this.popup;
    }

}

const settings = new SettingsSingleton();

function updateUI() {
    document.querySelector("#notify_output").textContent = settings.getSettings();
}

document.querySelector("#btn_notify_save").addEventListener("click", () => {
    settings.save();
    updateUI();
});

document.querySelector("#btn_notify_show").addEventListener("click", () => {
    updateUI();
});

updateUI();
