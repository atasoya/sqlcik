// i will skip creating table for now 

import { warn } from "console"

// example promt: insert 0 ata atasoy 22
type Command = {commandType: String, id: String, name: String, surname: String, age: String}

export function parseCommand(promt: String): Command  {
    // handle parser here
    let promtArguments = promt.split("\\s+")
    let userCommand: Command = {commandType:promtArguments[0] ,id:promtArguments[1], name: promtArguments[2], surname: promtArguments[2],
        age: promtArguments[2]
    }
    return userCommand
}
