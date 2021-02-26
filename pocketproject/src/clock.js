import { htmlGenerator } from "./warmup.js"

export default class Clock {
    constructor() {
        const timeNow = new Date();

        this.hours = timeNow.getHours();
        this.minutes = timeNow.getMinutes();
        this.seconds = timeNow.getSeconds();

        let clockEle = document.getElementById("clock")
        
        let theDiv = htmlGenerator(this.printTime(), clockEle);
        this.el = Array.from( theDiv.children )[0];
        setInterval(this._tick.bind(this), 1000)
    }

    _tick() {
        this.seconds += 1;
        if (this.seconds === 60) {
            this.seconds = 0;
            this.minutes += 1;
        }
        if (this.minutes === 60) {
            this.minutes = 0;
            this.hours += 1;
        }
        if (this.hours === 24){
            this.hours = (this.hours + 1) % 24;
        }
        this.el.textContent = this.printTime();
    }

    stringify(val) {
        if (val < 10) {
            return `0${val}`;
        } else {
            return `${val}`
        }
    }

    printTime() {
        let str =  `${this.stringify(this.hours)}:${this.stringify(this.minutes)}:${this.stringify(this.seconds)}`;
        
        // ele.textContent = str;

        return str;
    }
}

new Clock();