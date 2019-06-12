import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Employee {
  constructor(
    public empId: string,
    public name: string,
    public designation: string,
    public salary: string,
  ) {}
}

export class Textbox {
  constructor(
    public campo: string
  ) { }
}

@Injectable({
  providedIn: 'root'
})

export class HttpClientService {

  constructor(private httpClient: HttpClient) {
  }

  getEmployees() {
    return this.httpClient.get<Employee[]>('http://localhost:8080/funcionarios');
  }

  public deleteEmployee(employee: Employee) {
    return this.httpClient.delete<Employee>('http://localhost:8080/funcionarios' + '/' + employee.empId);
  }

  public createEmployee(employee: Employee) {
    return this.httpClient.post<Employee>('http://localhost:8080/funcionarios', employee);
  }

  public submit(textbox: Textbox) {
    return this.httpClient.post<Textbox>('http://localhost:8080/textbox', textbox);
  }

  copiaTexto() {
    console.log('Teste entrou');
    return this.httpClient.get<Textbox>('http://localhost:8080/textbox');
  }

}
