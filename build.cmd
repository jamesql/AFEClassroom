@echo off
title Building AFEClassroom Scripts
echo [Build] Compiling Client WebSocket.....
tsc ./src/WSS/Handlers/Utils/ClientWS.ts --esModuleInterop --outDir ./src/WEB/public/scripts
