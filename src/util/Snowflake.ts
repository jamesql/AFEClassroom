import config from "../config";

class SnowflakeUtil {
	static readonly BITS = {
		EPOCH: 41,
		MACHINE_ID: 10,
		SEQUENCE: 12,
		UNUSED: 1
	};
	static readonly MAX_MACHINE_ID = Math.pow(2, SnowflakeUtil.BITS.MACHINE_ID);
	static readonly MAX_SEQUENCE = Math.pow(2, SnowflakeUtil.BITS.SEQUENCE);
	private epoch: number;
	private machineId: number;
	private sequence: number;
	public constructor(epoch?: number | string, machineId?: number) {
		machineId = machineId ?? 0;
		if (machineId < 0 || machineId > SnowflakeUtil.MAX_MACHINE_ID) throw new TypeError(`Machine ID must be between 0 and ${SnowflakeUtil.MAX_MACHINE_ID}.`);

		this.epoch = Number(epoch);
		this.machineId = Number(machineId) || 0;
		this.sequence = 0;
	}

	getSequence() { return Number(this.sequence); /*make uneditable */ }

	generate(bigint: true, timestamp?: number): BigInt;
	generate(bigint?: false, timestamp?: number): string;
	generate(bigint?: boolean, timestamp?: number): BigInt | string {
		if (!timestamp) timestamp = Date.now();

		const bin = `${(timestamp - this.epoch).toString(2).padStart(SnowflakeUtil.BITS.EPOCH, "0")}${this.machineId.toString(2).padStart(SnowflakeUtil.BITS.MACHINE_ID, "0")}${(this.sequence++).toString(2).padStart(SnowflakeUtil.BITS.SEQUENCE, "0")}${"0".repeat(SnowflakeUtil.BITS.UNUSED)}`;

		return this.binaryToId(bin, bigint);
	}

	decode(id: string | BigInt) {
		const bin = this.idToBinary(id).toString().padStart(64, "0").split("");

		return {
			timestamp: parseInt(bin.splice(0, SnowflakeUtil.BITS.EPOCH).join(""), 2) + this.epoch,
			machineId: parseInt(bin.splice(0, SnowflakeUtil.BITS.MACHINE_ID).join(""), 2),
			sequence: parseInt(bin.splice(0, SnowflakeUtil.BITS.SEQUENCE).join(""), 2),
			unused: parseInt(bin.splice(0, SnowflakeUtil.BITS.UNUSED).join(""), 2)
		};
	}

	private binaryToId(bin: string, bigint?: boolean): BigInt | string {
		let dec = "";

		while (bin.length > 50) {
			const high = parseInt(bin.slice(0, -32), 2);
			const low = parseInt((high % 10).toString(2) + bin.slice(-32), 2);

			dec = (low % 10).toString() + dec;
			bin =
				Math.floor(high / 10).toString(2) +
				Math.floor(low / 10)
					.toString(2)
					.padStart(32, "0");
		}

		let b = parseInt(bin, 2);
		while (b > 0) {
			dec = (b % 10).toString() + dec;
			b = Math.floor(b / 10);
		}

		return !!bigint ? BigInt(dec) : dec;
	}

	private idToBinary(id: string | BigInt) {
		// had to do everything except string for overrides to work properly
		if (typeof id !== "string") id = id.toString();
		let bin = "";
		let high = parseInt(id.slice(0, -10), 10) || 0;
		let low = parseInt(id.slice(-10), 10);
		while (low > 0 || high > 0) {
			bin = String(low & 1) + bin;
			low = Math.floor(low / 2);
			if (high > 0) {
				low += 5e9 * (high % 2);
				high = Math.floor(high / 2);
			}
		}

		return bin;
	}
}

const Snowflake = new SnowflakeUtil(config.snowflake.epoch, config.snowflake.machineId);
export { SnowflakeUtil };
export default Snowflake;