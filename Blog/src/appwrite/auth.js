import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService{

    client = new Client();
    account;

    constructor(){

        this.client
        .setEndpoint(conf.appwriteURL) 
        .setProject(conf.appwriteProjectId)

        this.account=new Account(this.client)
    }

    async  CreateAccount({email,password,name}) {
        try {
           const userAccount = await this.account.create(ID.unique(),email,password,name)

            if (userAccount) {
                // call another method, here user will login instead of cinserting login detail again 
                return this.Login({email,password})
            
            } 
            
            else {
                return userAccount
            }


        } catch (error) {
            throw error;
            
        }
    }


    async Login({email,password}){
        try {
            
            return await this.account.createEmailPasswordSession(email,password)

        } catch (error) {
            throw error
        }
    }





}



const authservice=new AuthService()


export default authservice