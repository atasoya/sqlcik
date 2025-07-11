// TODO: implement save, delete, get, getAll, DONE
// TODO: add UPDATE
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

    fs.writeFile("users.json", JSON.stringify(users), 'utf8', (err) => {
        if (err) {
            console.error('Error writing to file', err);
        }
    })
    // close file
    return {"status":"success",user}
}

// supports only get by id
export function getUser(id:String): EngineResponse {
    const usersFile = fs.readFileSync('./users.json', 'utf-8');
    const users = JSON.parse(usersFile);
    let usersObjectList = users
    for(let i = 0;i<usersObjectList.length;i++){
        if(usersObjectList[i].id === id){
            return {"status":"success","user": usersObjectList[i]}
        }
    }
    let nullUser:User = {id:"null", name: "null", surname: "null",
        age: "null"}
    return {"status":"failed: provided ID is not valid ", "user": nullUser}


}

export function deleteUser(id:String): EngineResponse {
    const usersFile = fs.readFileSync('./users.json', 'utf-8');
    const users = JSON.parse(usersFile);
    let usersObjectList = users
    for(let i = 0;i<usersObjectList.length;i++){
        if(usersObjectList[i].id === id){
            let deletedUser = usersObjectList[i]
            users.splice(i,1) // TODO: bug with user delete with id's DONE
            fs.writeFile("users.json", JSON.stringify(users), 'utf8', (err) => {
            if (err) {
                console.error('Error writing to file', err);
            }
                })
            return {"status":"success","user": deletedUser}
        }
    }
    let nullUser:User = {id:"null", name: "null", surname: "null",
        age: "null"}
    return {"status":"failed: provided ID is not valid ", "user": nullUser}

}

export function getAll() {
    const usersFile = fs.readFileSync('./users.json', 'utf-8');
    const users = JSON.parse(usersFile);
    let usersObjectList = users
    return {"status":"success","users":usersObjectList}
}

export function updateUser(user:User) {
    const usersFile = fs.readFileSync('./users.json', 'utf-8');
    const users = JSON.parse(usersFile);
    let usersObjectList = users
    for(let i = 0;i<usersObjectList.length;i++){
        if(usersObjectList[i].id === user.id){
            usersObjectList[i] = user
            fs.writeFile("users.json", JSON.stringify(users), 'utf8', (err) => {
            if (err) {
            console.error('Error writing to file', err);}})
            return {"status":"success","user": usersObjectList[i] }
        }
    }
}
