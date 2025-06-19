// i will skip creating table for now 
// example promt: insert 0 ata atasoy 22
type Command = {commandType: String, id: String, name: String, surname: String, age: String}

export function parseCommand(promt: String): Command  {
    // handle parser here
    console.log(promt)
    let promtArguments = promt.split(/(\s+)/).filter( e => e.trim().length > 0)
    console.log(promtArguments)
    let userCommand: Command = {commandType:promtArguments[0] ,id:promtArguments[1], name: promtArguments[2], surname: promtArguments[3],
        age: promtArguments[4]
    }
    return userCommand
}
