// REPL (READ, EVAL, PRINT, LOOP) main shell of sqlcik
import readline from "readline";

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
    rl.prompt()
});
