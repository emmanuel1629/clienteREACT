import axios  from "axios";

const urlAPI = "http://localhost:3000/api";

export const registrarPeticion = usuario => axios.post(`${urlAPI}/auth/signup`, usuario);
export const loginPeticion = usuario => axios.post(`${urlAPI}/auth/signin`, usuario);
