/// <refrence path="./util/@types/global.d.ts" />
import start from "./WEB";
import launchWSS from "./WSS";
import "./util/WSFunctions";

export default class OctogonlServer
{
    async launch()
    {
        await start();
        await launchWSS();
    }  
};