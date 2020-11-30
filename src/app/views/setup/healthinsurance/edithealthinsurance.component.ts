import { Component, OnInit } from '@angular/core';
import {HealthInsuranceService} from '../../../service/healthinsurance.service';
import {ActivatedRoute, Router} from '@angular/router';
import { GroupPricesService } from '../../../service/groupPrices.service';

@Component({
  templateUrl: 'edithealthinsurance.component.html'
})
export class EditHealthinsuranceComponent implements OnInit {
  dataArray: any[];
  id: string;
  gpArray = [];
  selectedGPId: number;
  healthinsurance = {
      name: ''
  };

  validform = true;
  messageFormValid = 'completar todos los campos';

  constructor(private healthInsService: HealthInsuranceService,
              private groupPrices: GroupPricesService,
              private router: Router,
              private route: ActivatedRoute) {}


    ngOnInit() {
      this.id = this.route.snapshot.paramMap.get('id');
      this.healthInsService.getHealthinsById(this.id).subscribe((data: any[]) => {
        // console.log(data);
        this.dataArray = data;
      });
      this.getGroupPrices()
    }
    getGroupPrices() {
    this.groupPrices.getGroupPrices().subscribe((data: any[]) => {
      // console.log(data);
      this.gpArray = data;
    });
    }

    saveHealthinsurance(): void {
      this.validateform();
      if (this.validform) {
          const data = {
              name: this.healthinsurance.name,
              gpId: this.selectedGPId
        };
        console.log(data);

          this.healthInsService.update(this.id, data)
              .subscribe(
                  response => {
                      console.log(response);

                  },
                  error => {
                      console.log(error);
                  });
          this.volver();
      }
  }

  validateform() {
    this.messageFormValid = 'completar todos los campos';
    let valid = true;
    if (this.selectedGPId == null) {
        valid = false;
    }
    if (this.healthinsurance.name == null || this.healthinsurance.name == "") {
        valid = false;
    }
    this.validform = valid;
}
  onChangeGP($event) {
    if ($event) {
        this.selectedGPId = $event.id;

    }
  }
  onRemoveGP() {
    this.selectedGPId = null;

  }

    volver() {
        this.router.navigate(['setup/healthins']);
    }
}
