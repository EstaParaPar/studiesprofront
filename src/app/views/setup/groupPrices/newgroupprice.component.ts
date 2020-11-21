import { Component, OnInit } from '@angular/core';
import {GroupPricesService} from './../../../service/groupPrices.service';
import {Router} from '@angular/router';

@Component({
    templateUrl: 'newgroupprice.component.html'
})
export class NewgrouppriceComponent implements OnInit {
    groupPrice = {
        name: ''
    };

    groupid = 0;

    constructor(
        private router: Router,
        private groupPricesService: GroupPricesService) {}

    ngOnInit(): void {
    }

    saveHealthinsurance(): void {
        const data = {
            name: this.groupPrice.name
        };

        this.groupPricesService.create(data)
            .subscribe(
                response => {
                    console.log(response);
                    this.groupid = response.id;
                    this.editarPrices(this.groupid);
                },
                error => {
                    console.log(error);

                });
    }
    editarPrices(id) {
        this.router.navigate(['/setup/editgroupPrice/', id]);
    }
    volver() {
        this.router.navigate(['setup/groupPrice']);
    }
}
