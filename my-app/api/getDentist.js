export const apiUrl = 'https://jsonplaceholder.typicode.com/users'


export async function getDentists(url) {

    try {
        //es el mismo fetch, el await dice resuelva el fetch y espere 
        const response = await fetch(url);
        //como es una promesa, vuelve y espera con el await a que parsee
        const data = await response.json();
        //cuando ya se resolvió lo de arriba, hace el log
        return data;
    } catch (error) {
        console.log(error);
    }
}


export async function getDentistId(url) {

    try {
        //es el mismo fetch, el await dice resuelva el fetch y espere 
        const response = await fetch(url);
        //como es una promesa, vuelve y espera con el await a que parsee
        const data = await response.json();
        //cuando ya se resolvió lo de arriba, hace el log
        return data;
    } catch (error) {
        console.log(error);
    }
}