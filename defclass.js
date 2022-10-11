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
