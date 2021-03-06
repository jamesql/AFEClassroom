export const OPCodes = {
    HELLO: 0,
    HEARTBEAT: 1,
    HEARTBEAT_ACK: 2,
    ERROR: 3,
} as const;

export const HEARTBEAT_INTERVAL = 3e4 as const;