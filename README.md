# AFEClassroom ![build](https://img.shields.io/badge/build-passing-brightgreen.svg?style=flat)
> Open source virtual classroom software.

## Project Purpose
AFEClassroom is a open source virtual classroom project to respond to a AFE prompt and is a open-source alternative to Google Classroom.

## File Structure
    ./src
    ├── config                  # Configuaration Files
    ├── DB                      # TypeScript Database Interface
    ├── util                    # Utility scripts & functions
    ├── WEB                     # Express Server and Front-End
    ├── WS                      # Web Sockets
    └── Launch.ts
    ./start.cmd                 # Default Start Cmd Script
    ./Dockerfile                # Docker container file

## TODO - Roadmap
- [x] Front End Design
- [x] Logo
- [x] Database Structure
- [x] Login / Authentication
- [x] Grading System
- [x] Video Call Front-End
- [ ] Basic Assign Class Schedule System
- [ ] CDN
- [x] Finish WebSocket
- [ ] Video/Audio
- [ ] Screensharing
- [ ] Chat
- [ ] Auto-Attendance  
- [ ] Auto-Participation (w/ Data)
- [ ] Raise Hand
- [ ] Add breakout rooms
- [ ] Auto-Class Schedule System
- [x] School Anouncements 
- [ ] Chrome Reminder Extension
- [ ] Add Redis
- [x] Add scaling for multiple schools
- [x] Finish README
- [ ] Add documentation
- [x] Add screenshots of software in use

### Screenshots
> Application Home Screen.

![apphome](https://cdn.discordapp.com/attachments/811807146395828304/816458642739036160/unknown.png)

> Classwork Section. (Teacher View)

![classworksectiontv](https://cdn.discordapp.com/attachments/811688896479756351/816493652225425448/unknown.png)

> Login Page.

![loginpage](https://cdn.discordapp.com/attachments/811688896479756351/816498817863516160/unknown.png)

> Register Page.

![registerpage](https://cdn.discordapp.com/attachments/811688896479756351/816502315401871380/unknown.png)

> Application Console.

![appconsole](https://cdn.discordapp.com/attachments/811807146395828304/817630889314877440/unknown.png)

### LICENSE
> This project is currently using an MIT License. For more information please read `LICENSE`