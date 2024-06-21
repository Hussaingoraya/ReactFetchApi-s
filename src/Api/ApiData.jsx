export const data =  async(apiEndpoints)=>{
    console.log(apiEndpoints)
    let res =  await fetch("https://jsonplaceholder.typicode.com/" + apiEndpoints)
    let apires = await res.json()
    console.log(apires)

}

// THIS WILL SHOW US RESPONSE NOT OUTPUT OR DATA TO RESOLVE THIS WE WILL USE RES.JSON
// export const data =  async(apiEndpoints)=>{
//     let res =  await fetch("https://jsonplaceholder.typicode.com/" + apiEndpoints)
//     console.log(res)

// }

// THis will show us promice in console to resolve this we will use async await
// export const data = (apiEndpoints)=>{
//     let res = fetch("https://jsonplaceholder.typicode.com/" + apiEndpoints)
//     console.log(res)

// }