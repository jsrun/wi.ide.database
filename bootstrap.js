/**
 *  __          __  _    _____ _____  ______   _____        _        _                         
 *  \ \        / / | |  |_   _|  __ \|  ____| |  __ \      | |      | |                        
 *   \ \  /\  / /__| |__  | | | |  | | |__    | |  | | __ _| |_ __ _| |__   __ _ ___  ___  ___ 
 *    \ \/  \/ / _ \ '_ \ | | | |  | |  __|   | |  | |/ _` | __/ _` | '_ \ / _` / __|/ _ \/ __|
 *     \  /\  /  __/ |_) || |_| |__| | |____ _| |__| | (_| | || (_| | |_) | (_| \__ \  __/\__ \
 *      \/  \/ \___|_.__/_____|_____/|______(_)_____/ \__,_|\__\__,_|_.__/ \__,_|___/\___||___/                                                                                                                                                                                     
 *                                                                            
 *  @author André Ferreira <andrehrf@gmail.com>
 *  @license MIT
 */

let fs = require("fs");

module.exports = (navbar, sidebar) => {  
    navbar.addItem("Database/New Connection...", {command: "webide:database:newconnection"}, 999);
    navbar.addItem("Database/Manage Connections...", {command: "webide:database:manageconnections", divide: true}, 999);
    navbar.addItem("Database/Create Containers...", {command: "webide:database:createcontainer"}, 999);
    navbar.addItem("Database/Manage Containers...", {command: "webide:database:managecontainers", divide: true}, 999);
    
    sidebar.addItem("databases", {
        position: "left",
        display: "Databases",
        panel: fs.readFileSync(__dirname + "/databases.ejs")
    }, 200);
};