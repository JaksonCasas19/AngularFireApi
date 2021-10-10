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
  dep:any;

  ngOnInit(): void {
    this.refreshDepList();
  }

  addClick(){
    this.dep={
      DepartmentId:0,
      DepartmentName:""
    }
    this.ModalTitle="Add Department";
    this.ActivateAddEditEmpComp=true;
  }

  deleteClick(item:any){
    if(confirm('Are you sure?')){
      this.service.deleteDepartment(item.DepartmentId).subscribe(data =>{
        alert(data.toString());
        this.refreshDepList();
      });
    }
  }


  editClick(item:any){
    this.dep=item;
    this.ModalTitle = "Edit Department"
    this.ActivateAddEditEmpComp=true;

    

  }

  closeClick(){
    this.ActivateAddEditEmpComp=false;
    this.refreshDepList();
  }

  refreshDepList(){
    this.service.getDepList().subscribe(data=>{
      this.EmployeetList=data;
    });
  }

}
