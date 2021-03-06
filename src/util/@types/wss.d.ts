import WebSocket from "ws";

declare global {
        namespace AFECWS {
            interface AFECServer extends WebSocket.Server {
                clients: Set<ClientSocket>;
            }

            interface ClientSocket extends WebSocket {
                type: "client";
                id: string;
                authenticated: boolean;

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