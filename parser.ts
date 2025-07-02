// i will skip creating table for now 
// example promt: insert 0 ata atasoy 22
import { User, Command } from "./types"

export function parseCommand(promt: String): Command  {
    // handle parser here
    console.log(promt)
    let promtArguments = promt.split(/(\s+)/).filter( e => e.trim().length > 0)
    console.log(promtArguments)
    let commandUser:User = {id:promtArguments[1], name: promtArguments[2], surname: promtArguments[3],
        age: promtArguments[4]}
{
    let userCommand: Command = {commandType:promtArguments[0],user:commandUser}
    return userCommand
}
}
