// REPL (READ, EVAL, PRINT, LOOP) main shell of sqlcik
import readline from "readline";
import { parseCommand } from "./parser";
import { save, getUser } from "./database";
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

    if(parsedCommand.commandType == "insert"){
        result = save(parsedCommand.user)
    } else if (parsedCommand.commandType == "select"){
       result = getUser(parsedCommand.user.id)
    }else {
    }
    console.log(result)
    rl.prompt()
});
