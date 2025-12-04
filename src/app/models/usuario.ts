import { RolEnum } from "./rolEnum";

export interface Usuario {
    id: number;
    email: string;
    nombre: string;           
    rol: RolEnum;   
}