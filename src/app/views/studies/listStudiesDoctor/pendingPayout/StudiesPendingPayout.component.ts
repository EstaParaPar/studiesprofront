import { Component, OnInit, TemplateRef} from '@angular/core';
import { StudiesService } from '../../../../service/studies.service';
import { ActivatedRoute, Router } from '@angular/router';
import {TokenStorageService} from '../../../../service/token-storage.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
@Component({
    templateUrl: 'StudiesPendingPayout.component.html',
    styleUrls: ['StudiesPendingPayout.component.css']
})
export class StudiesPendingPayoutComponent  implements OnInit {
        dataArray = [];
        currentUser: any;
        modalRef: BsModalRef;
        allSelectedData: string[];
    totalPrice: number;
    techId: number;


    constructor(
      private router: Router,
      private studiesService: StudiesService,
      private tokenStorageService: TokenStorageService,
      private modalService: BsModalService,
      private route: ActivatedRoute
  ) {}


    ngOnInit(): void {
        if (!this.tokenStorageService.isloggedin()) {
            this.router.navigate(['']);
        } else {
            this.init();
        }
    }
    init() {
        console.log  ("init de Pendingstudies");
        this.currentUser = this.tokenStorageService.getUser();
        this.studiesService.getStudiesDoctor(this.currentUser.userId).subscribe((data: any[]) => {
        console.log("creando listado");
            this.dataArray = data;
            this.allSelectedData = new Array<string>();
            this.techid();
      });
      
  }


    checkAllCheckBox(e){
        
        this.dataArray.forEach(x=> x.checked = e.target.checked);
        if(e.target.checked){
        this.selectAll();
            this.suma();
            this.techid();
        }else {
            this.allSelectedData=[];
            this.totalPrice=0;
        }
    }

    isAllCheckBoxChecked(){
        return this.dataArray.every(p=> p.checked);
    }

    getSelectedStudie(e: any , id:string){
        if (e.target.checked )
        {
            console.log(id + 'Checked');
            this.allSelectedData.push(id);
        }else{
            console.log(id + 'unChecked');
            this.allSelectedData = this.allSelectedData.filter(m=>m!=id);
        }

        this.suma();

    }
    selectAll(){
        this.allSelectedData= [];
        
        for (var x = 0;x < this.dataArray.length;  x++){
                let datavalue = this.dataArray[x];
                console.log(datavalue);
                this.allSelectedData.push(datavalue.id); 
                
        }
    }
    
    suma(){
        let suma = 0;
        for (var x = 0;x < this.dataArray.length;  x++){
                let datavalue = this.dataArray[x];
                if (this.allSelectedData.includes(datavalue.id )){
                    suma= suma + datavalue.currentPrice;
            }
        }
        this.totalPrice = suma

    }
    techid() {
        let techId;
        for (var x = 0;x < this.dataArray.length;  x++){
            let datavalue = this.dataArray[x];

                techId = datavalue.technician.id;
                console.log("el id del tecnico es " + techId);
            this.techId = techId;
    }
    }
 

    confirmStudiesPayout(body): void {
        let payoutData;
        payoutData = {
            payoutPrice : this.totalPrice,
            payoutDoctorId : this.currentUser.userId,
            payoutTechId: this.techId,
            studyId: Array.from(this.allSelectedData),
        }
        console.log("entro a la llamada");
        console.log(payoutData)
        this.studiesService.confirmStudiesPayout(payoutData)
        .subscribe(
            response => {
              console.log(response);
              const ruta = 'payout/confirmedPayout/';
              this.router.navigate([ruta]);
            },
            error => {
              console.log(error);
            });
    }


}