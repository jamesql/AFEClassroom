/// <reference path="../../../util/@types/wss.d.ts" />

// @ts-ignore
class ClientWS {



}

(async () => {
    const token = localStorage.getItem("token");
    if (token === null) return window.location.href = "/login";



})();