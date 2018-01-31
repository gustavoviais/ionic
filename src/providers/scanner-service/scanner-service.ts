import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import uuid from "uuid";
import { uri } from "../utils/constants";

@Injectable()
export class ScannerServiceProvider{
    constructor(public http:HttpClient){}
    
    postData(idAluno, idDisciplina){
        const body = {
            id: uuid.v4(),
            dia: new Date(),
            disciplina: idDisciplina,
            usuario: idAluno
        };

        return this.http.post(`${uri}/presenca`, body);
    }
}
