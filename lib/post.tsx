export default async function GetPostById(id){

    let data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res=>res.json())

    return data;
}

export async function getAllIds(){
    
 let mapped = await fetch(`https://jsonplaceholder.typicode.com/posts`).then(res=>res.json())
    .then((data)=>{
      return  data.map(item=> {
            return {
               params: {
                id: item.id?.toString(),
              }
            } 
        })
    }).catch(err=>{
        return [{
            params:{
                id:"1"
            }
        }]
    })


    return mapped;
}