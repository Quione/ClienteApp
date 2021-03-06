
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Cliente } from '../model/cliente';

const URL_API = `http://localhost:3000/cadastro`;

//Encaminha o cabeçalho da requisição
const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json;charset=utf-8'
  })
}

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  constructor(private http: HttpClient) { }

  getDados(param:string = ""):Observable<Cliente> {
    return this.http.get<Cliente>(`${URL_API}${param}`,httpOptions).pipe(
      catchError(this.handleError<any>('Falha ao recuperar os dados'))
    );
  }

  addDados(dados:Cliente):Observable<Cliente>{
    return this.http.post(URL_API, dados, httpOptions).pipe(
      catchError(this.handleError<any>('Falha ao registra a avaliação'))
    )
  }

  updateDados(dados:Cliente):Observable<Cliente>{
  return this.http.put(`${URL_API}/${dados.id}`, dados, httpOptions).pipe(
      catchError(this.handleError<any>('Falha ao atualizar a avaliação'))
    )
  }

  //método privado para exibir o erro
  private handleError<T>(Operator = 'operation', result?: T){
    return (error: any):Observable<T> => {
      console.error(error); //log do erro na console

      //mantem o app rodando por ter retornado o obj vazio
      return of(result as T);
    };
  }
}