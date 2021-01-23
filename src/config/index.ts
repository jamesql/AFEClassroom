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
	},
	snowflake: {
		dilimiter: "$",
		epoch: 1593561600000,
		regex: /[0-9]{15,21}/,
		machineId: 0
	},
	database: {
		host: "127.0.0.1",
		db: "afe",
		auth: {
			user: "afe",
			password: "password"
		}
	}

};

export default config;