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

    async deletePost(slug){
        try {
            await this.databases.deletePost(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true
        } catch (error) {
            console.log("Appwrite service :: deletePost :: error",error)
            return false
        }
    }


    async getPost(slug){
        try {
            return await this.databases.getPost(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
            )
        } catch (error) {
            console.log("Appwrite service :: getPost :: error",error)
        }
    }


    async getPosts(queries=[Query.equal("status","active")]){

        try {
            
            return await this.databases.getPosts(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries
                // if parameter queries was not defined above;
                //[
                //Query.equal("status","active")
                //]
            )

        } catch (error) {
            console.log("Appwrite service :: getPosts :: error",error)
            return false
        }

    }
 

    //File upload
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite service :: uploadFile :: error",error)
            return false
        }
    }


    async deleteFile(fileID){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileID
            )
            return true
        } catch (error) {
            console.log("Appwrite service :: deleteFile :: error",error)
        }
    }


    //Uncomment to see response:
    //this won't return a promise. So as mentioned in error or warning
    // await won't have any effect on that getfilePreview method, so can use direct method

    // async getFilePreview(fileID){
    //     try {
        
    //         return await this.bucket.getFilePreview(
    //             conf.appwriteBucketId,
    //             fileID
    //         )
    //     } catch (error) {
    //         console.log("Appwrite service :: getFilePreview :: error",error)
    //     }
    // }


    getFilePreview(fileID){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileID
        )
    }
    
}






const service = new Service()

export default service