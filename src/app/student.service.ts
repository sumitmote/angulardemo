import { Student } from './student.model';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable()
export  class StudentService{

  baseUrl = "http://localhost:9090/MyRestProductWebService";

  constructor(private httpC:HttpClient){

  }

    getAllStudent():Observable<Student[]>{
      return this.httpC.get<Student[]>(this.baseUrl+"/students");
    }

    addStudent(s:Student):Observable<Student[]>{
      return this.httpC.post<Student[]>(this.baseUrl+"/students",s);
    }

    updateStudent(s:Student):Observable<Student[]>{
      return this.httpC.put<Student[]>(this.baseUrl+"/students",s);
  } 


    deleteStudent(s:Student):Observable<Student[]>{
    return this.httpC.delete<Student[]>(this.baseUrl+"/students/"+s.sid);
  }

}