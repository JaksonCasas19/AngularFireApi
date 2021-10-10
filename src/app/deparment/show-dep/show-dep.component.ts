import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-dep',
  templateUrl: './show-dep.component.html',
  styleUrls: ['./show-dep.component.css']
})
export class ShowDepComponent implements OnInit {

  constructor(private service:SharedService) { }

  DepartmentList:any=[];
  ModalTitle:string="Add Department";
  ActivateAddEditDepComp:boolean=false;
  dep:any;
  ngOnInit(): void {
    this.refreshDepList();
  }

  addClick(){
    this.dep={
      DepartmentId:0,
      DepartmentName:""
    }
    this.ActivateAddEditDepComp=true;
  }
  editClick(item:any){
    this.dep=item;
    this.ActivateAddEditDepComp=true;
    this.ModalTitle = "Edit Department"
  }

  closeClick(){
    this.ActivateAddEditDepComp=false;
    this.refreshDepList();
  }

  refreshDepList(){
    this.service.getDepList().subscribe(data=>{
      this.DepartmentList = data;
    });
  }

}
