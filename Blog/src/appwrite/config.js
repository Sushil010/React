import conf from "../conf/conf";
import { Client, Databases,Account, ID, Storage, Query} from "appwrite";


export class Service{

    client = new Client();
    databases;
    bucket;


    constructor(){
        this.client
        .setEndpoint(conf.appwriteURL)
        .setProject(conf.appwriteProjectId)

        this.database=new Databases(this.client)

        this.bucket=new Storage(this.client)



    }

    async createPost({title, slug, content, featuredImage, status, userId}){

        try {
            
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )


        } catch (error) {
            console.log("Appwrite service :: createPost :: error",error)
        }

    }

    async updatePost(slug,{title, content, featuredImage, status}){

        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                    
                }
            )
        } catch (error) {
            console.log("Appwrite service :: updatePost :: error",error)
        }

    }

    async deletePost(slug,{title, content, featuredImage, status}){
        try {
            return await this.databases.deletePost(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
            )
            return true
        } catch (error) {
            console.log("Appwrite service :: deletePost :: error",error)
            return false
        }
    }

    


    
}






const service = new Service()

export default service