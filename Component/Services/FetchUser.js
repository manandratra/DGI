export const getUserInfo = (nif) => {
    let Nif = nif;
    const URL = 'http://localhost:8000/api/indexUtilisateur/${nif}';
    return fetch(URL)
            .then((res)=>res.json());
}