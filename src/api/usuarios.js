import {API_URL} from "../utils/constantes";


export async function apideregisro(datosusuario) {
    try {
        const url = `${API_URL}/auth/local/register`;
        const params = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(datosusuario),
        };
        const response = await fetch(url,params);
        const result = await response.json();
        return result;

    } catch (error) {
        console.log(error);
        return null;
    }
}