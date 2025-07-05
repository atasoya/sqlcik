// REPL (READ, EVAL, PRINT, LOOP) main shell of sqlcik
import readline from "readline";
import { parseCommand } from "./parser";
import { save, get } from "./database";

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
    console.log(`Command: ${input}`)
    let parsedCommand = parseCommand(input)

    if(parsedCommand.commandType == "insert"){
        save(parsedCommand.user)
    } else if (parsedCommand.commandType == "select"){
        get(parsedCommand.user.id)
    }
    console.log(parsedCommand)
    rl.prompt()
});
