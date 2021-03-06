import WebSocket from "ws";

declare global {
        namespace AFECWS {
            interface AFECServer extends WebSocket.Server {
                clients: Set<ClientSocket>;
            }

            interface ClientSocket extends WebSocket {
                type: "client";
                authenticated: boolean;

                // ids
                _id: string;
                readonly id: string;

                props: {
                    userId: string | null;
                    sequence: number;
                    lastHeartbeat: number;
                };

                sendAsync(data: any): Promise<void>;

            }
        }

        namespace Packets {
            
        }
}