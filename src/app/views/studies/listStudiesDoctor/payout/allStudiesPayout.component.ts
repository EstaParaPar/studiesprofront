import { Component, OnInit, TemplateRef} from '@angular/core';
import { StudiesService } from '../../../../service/studies.service';
import { ActivatedRoute, Router } from '@angular/router';
import {TokenStorageService} from '../../../../service/token-storage.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
@Component({
    templateUrl: 'allStudiesPayout.component.html',
    styleUrls: ['allStudiesPayout.component.css']
})
export class AllStudiesPayoutComponent  implements OnInit {
        dataArray = [];
        currentUser: any;
        modalRef: BsModalRef;
        techId: any;
        allSelectedData: string[];
        totalPrice: number;
        totalTechPrice: number;
        techname;


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
        this.techId = this.route.snapshot.paramMap.get('id');
        console.log(this.techId);
        this.currentUser = this.tokenStorageService.getUser();
        let datavalues = {
            idTech: this.techId
        };
        this.studiesService.getStudiesDoctorTech(this.currentUser.userId, datavalues).subscribe((data: any[]) => {
        console.log(data);
        console.log("creando listado");
        this.dataArray = data;
        this.techname = this.dataArray[0].technician.name + ' ' + this.dataArray[0].technician.lastname;
        this.allSelectedData = new Array<string>();
      });
      
  }


    checkAllCheckBox(e){
        
        this.dataArray.forEach(x=> x.checked = e.target.checked);
        if(e.target.checked){
        this.selectAll();
        this.suma();
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
        let suma2 = 0;
        for (var x = 0;x < this.dataArray.length;  x++){
                let datavalue = this.dataArray[x];
                if (this.allSelectedData.includes(datavalue.id )){
                    suma = suma + datavalue.currentPrice;
                    suma2= suma2 + datavalue.techCurrentPrice;
            }
        }

        this.totalPrice = suma
        this.totalTechPrice = suma2

    }
    
 

    confirmStudiesPayout(body): void {
        let payoutData
        idstudy : this.allSelectedData

        payoutData = {
            payoutPrice : this.totalPrice,
            payoutPriceTech : this.totalTechPrice,
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