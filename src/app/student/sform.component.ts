import { Student } from '../student.model';
import { Component, EventEmitter, Input, Output, SimpleChanges } from "@angular/core";
import { StudentService } from '../student.service';


@Component({
  selector: 'sform',
  templateUrl: './sform.component.html',
  styleUrls: ['./sform.component.css']
})

export class SformComponent {
  sid: number;
  sname: string;
  smarks: number;
  sarr: Student[];
  @Output() myevent = new EventEmitter();
  @Output() myevent1 = new EventEmitter();
  @Input("upob") std: Student;
  constructor(private sservice: StudentService) { }
  ngOnChanges(change: SimpleChanges) {
    if (change["std"].currentValue != change["std"].previousValue) {
      this.sid = this.std.sid;
      this.sname = this.std.sname;
      this.smarks = this.std.smarks;
    }
  }

  addStudent() {

    let s = new Student(this.sid, this.sname, this.smarks);
    this.sservice.addStudent(s)
      .subscribe(result => {
        this.sarr = result;
        this.myevent.emit(this.sarr);
        this.myevent1.emit(false)
      });
    console.log(this.sarr);
    this.sid = 0;
    this.sname = "";
    this.smarks = 0;
  }


  updateStudent() {
    let s = new Student(this.sid, this.sname, this.smarks);
    this.sservice.updateStudent(s).subscribe(result => {
      this.sarr = result;
      this.myevent.emit(this.sarr);
      this.myevent1.emit(false)
    });
    console.log(this.sarr);
    this.sid = 0;
    this.sname = "";
    this.smarks = 0;

  }


}


