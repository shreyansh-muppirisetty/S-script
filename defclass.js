class Debug {
    constructor() {
        this.log = (data) => {
            console.log(data)
        }
        this.table = (data) => {
            console.table(data)
        }
        this.info = (data) => {
            console.info(data)
        }
        this.warn = (data) => {
            console.warn(data);
        }
        this.error = (data) => {
            console.error(data);
        }
    }
}

class Scene {
    constructor() {
        this.fill = (col) => {
            document.querySelector('body').style.background = col;
        }
        this.add = (obj) => {
            document.querySelector('body').appendChild(obj)
        }
        this.html = (html) => {
            document.querySelector('body').innerHTML += html;
        }
    }
}
