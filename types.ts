// shared types

export type User = {id: String, name: String, surname: String, age: String}

export type Command = {commandType: String, user: User}

export type EngineResponse = {status:String,user:User}
