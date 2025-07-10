// REPL (READ, EVAL, PRINT, LOOP) main shell of sqlcik
import readline from "readline";
import { parseCommand } from "./parser";
import { save, getUser, deleteUser, getAll } from "./database";
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
    prompt:"sqlcik >>> "
});

console.log("Welcome to SQLCIK")
rl.prompt();

rl.on("line",(line) => {
    const input = line.trim();
    if(input === ".quit"){
        rl.close()
        return
    }
    let parsedCommand = parseCommand(input)
    let result = null
    let commandType = parsedCommand.commandType
    if(commandType == "insert"){
        result = save(parsedCommand.user)
    } else if(commandType == "select"){
       result = getUser(parsedCommand.user.id)
    } else if(commandType == "delete"){
        result = deleteUser(parsedCommand.user.id)
    } else if (commandType == "all"){
        result = getAll()
    }
    console.log(result)
    rl.prompt()
});
