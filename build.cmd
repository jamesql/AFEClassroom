@echo off
title Building AFEClassroom Scripts
echo Compiling....
tsc ./src/WSS/Handlers/Utils/ClientWS.ts --esModuleInterop --outDir ./src/WEB/public/scripts
