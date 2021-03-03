// Auth.js - AFEClassroom

// add regex check later
const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

function login()
{
    fetch(`http://${window.location.hostname}${!!window.location.port?":"+window.location.port:""}/api/login`, {
        method: "POST",
        body: JSON.stringify({
            username: $("#email").val(),
            password: $("#password").val()
        }),
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
    .then(async(res)=> {
        const d = await res.json();
        if(!d["authed"]) sendAlert(d["failReason"]);
        else {
            const token = d["user"].id;
            localStorage.setItem("token", token);
            window.location.href = `http://${window.location.hostname}${!!window.location.port?":"+window.location.port:""}/app`;
        }
    });
}

function register()
{
    fetch(`http://${window.location.hostname}${!!window.location.port?":"+window.location.port:""}/api/register`, {
        method: "POST",
        body: JSON.stringify({
            username: $("#email").val(),
            password: $("#password").val(),
            name: $("#name").val()
        }),
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
    .then(async(res)=> {
        const d = await res.json();
        if(!d["success"]) sendAlert(d["failReason"]);
        else {
            const token = d["user"].id;
            localStorage.setItem("token", token);
            window.location.href = `http://${window.location.hostname}/app`;
        }
    });
}

function checkValidEmail()
{
    
}

function checkValidPassword()
{

}

function sendAlert(str)
{
    alert(str);
}