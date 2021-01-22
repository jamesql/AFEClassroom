/// <refrence path="../util/@types/global.d.ts" />

import * as https from "https";
import * as fs from "fs";

const config = {

    web: {
		userAgent: `Octogo.nl`,
		host: "localhost",
		secure: false,
		get port() { return 0 || (config.web.secure ? 443 : 80); },
		serverOptions: {
		} as https.ServerOptions,
		cookieSecret: "ZTXTfjbMVdqWryvaJz9s9mT2Q3zbxAUeUGU7mwMX"
	}

};

export default config;