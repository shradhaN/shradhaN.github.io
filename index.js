var req = new XMLHttpRequest();
req.onload = reqListener;
req.open('get','http://192.168.0.152:5555/',true);
req.withCredentials = true;
req.send();

function reqListener() {
    console.log(this.responseText);
};

console.log("The js is being loaded here")