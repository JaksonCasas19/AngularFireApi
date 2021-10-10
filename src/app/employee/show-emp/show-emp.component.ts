import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css']
})
export class ShowEmpComponent implements OnInit {

  constructor(private service:SharedService) { }

  ModalTitle:string;
  EmployeetList:any=[];
  ActivateAddEditEmpComp:boolean=false;
  emp:any;

  ngOnInit(): void {
    this.refreshEmpList();
  }

  addClick(){
    this.emp={
      EmployeeId:0,
      EmployeeName:"",
      Deparment:"",
      DateOfJoining:"",
      PhotoFileName:"android.jpg"
    }
    this.ModalTitle="Add Employee";
    this.ActivateAddEditEmpComp=true;
  }

  deleteClick(item:any){
    if(confirm('Are you sure?')){
      this.service.deleteDepartment(item.EmployeeId).subscribe(data =>{
        alert(data.toString());
        this.refreshEmpList();
      });
    }
  }


  editClick(item:any){
    this.emp=item;
    this.ModalTitle = "Edit Employee"
    this.ActivateAddEditEmpComp=true;

  }

  closeClick(){
    this.ActivateAddEditEmpComp=false;
    this.refreshEmpList();
  }

  refreshEmpList(){
    this.service.getDepList().subscribe(data=>{
      this.EmployeetList=data;
    });
  }

}
