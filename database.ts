// TODO: implement save, delete, get, getAll
// all file engine related functions are stored here
import { EngineResponse, User } from "./types";
import fs from "node:fs"


export function save(user:User): EngineResponse {

    // open file 
    const usersFile = fs.readFileSync('./users.json', 'utf-8');
    const users = JSON.parse(usersFile);
    // save file 
    // TODO: check if id is unique when get is done
    users.push(user)
    console.log("users :",users)

    fs.writeFile("users.json", JSON.stringify(users), 'utf8', (err) => {
        if (err) {
            console.error('Error writing to file', err);
        } else {
            console.log('Data written to file');
        }
    })
    // close file
    console.log(users)
    return {"status":"sucsess",user}
}
