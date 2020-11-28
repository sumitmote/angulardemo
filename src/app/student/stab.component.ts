import { Student } from './../student.model';
import { Component } from "@angular/core";
import { StudentService } from '../student.service';

@Component({

    selector: 'stab',
    templateUrl: './stab.component.html',
    styleUrls: ['./stab.component.css']
})

export class StabComponent
  {
  sarr:Student[]
  flag:boolean=false;
  sob:Student;
  constructor(private sservice:StudentService){
  }

  ngOnInit(){
    this.sservice.getAllStudent()
        .subscribe(result=>this.sarr=result);
  }

  displayForm() {
   this.flag=true; 
  }

  updateStudent(s:Student){
    this.flag=true;
    this.sob=s;
  }

  deleteStudent(s:Student){
    this.sservice.deleteStudent(s)
        .subscribe(result=>this.sarr=result);
  }

}