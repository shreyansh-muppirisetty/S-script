function getHostName() {
    return location.hostname;
}

function getHost() {
    return location.host;
}

function open(url) {
    const a = document.createElement('a');
    a.href = url;
    a.click();
}

function call(phonenumber) {
    const a = document.createElement('a');
    a.href = `tel+${phonenumber}`;
    a.click();
}

function ask(question) {
    let w = prompt(question);
    alert("We'l remember that");
    localStorage.ans = w;
}