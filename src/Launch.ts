/// <refrence path="./util/@types/global.d.ts" />
import start from "./WEB";
import launchWSS from "./WSS";

export default class OctogonlServer
{
    async launch()
    {
        await start();
        await launchWSS();
    }  
};