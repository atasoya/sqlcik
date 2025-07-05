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

// supports only get by id
export function get(id:String): EngineResponse {
    const usersFile = fs.readFileSync('./users.json', 'utf-8');
    const users = JSON.parse(usersFile);

    let usersObjectList = users[0]
    for(let i = 0;i<usersObjectList.lenght;i++){
        if(usersObjectList[i].id == id){
            return {"status":"sucsess","user": usersObjectList[i]}
        }
    }
    let nullUser:User = {id:"null", name: "null", surname: "null",
        age: "null"}
    return {"status":"failed: provided ID is not valid ", "user": nullUser}


}
