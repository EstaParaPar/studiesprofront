import {Component, OnInit} from '@angular/core';
import {getStyle, hexToRgba} from '@coreui/coreui/dist/js/coreui-utilities';
import {CustomTooltips} from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import {TokenStorageService} from '../../../service/token-storage.service';
import {Router} from '@angular/router';
import {MachinesService} from '../../../service/machines.service';
import {StudiestypeService} from '../../../service/studiestype.service';
import {UserdataService} from '../../../service/userdata.service';
import {HealthInsuranceService} from '../../../service/healthinsurance.service';
import {PatientsService} from '../../../service/patients.service';
import {NgOption} from '@ng-select/ng-select';
import {NewStudiesService} from '../../../service/new-studies.service';

@Component({
    templateUrl: 'newPayout.component.html'
})
export class NewPayoutComponent implements OnInit {

    techArray = [];
    currentUser: any;
    selectedTech= null;
    validform = true;
    messageFormValid = 'completar todos los campos';
    
    constructor(
        private studiesTypeService: StudiestypeService,
        private machinesService: MachinesService,
        private userdataService: UserdataService,
        private healthInsuranceService: HealthInsuranceService,
        private patientsService: PatientsService,
        private router: Router,
        private tokenStorageService: TokenStorageService,
        private newStudiesService: NewStudiesService) {
    }

    ngOnInit(): void {
        if (!this.tokenStorageService.isloggedin()) {
            this.router.navigate(['']);
        } else {
            this.init();
        }
    }



    init(): void {
        this.currentUser = this.tokenStorageService.getUser();


        this.userdataService.getTechs().subscribe((data: any[]) => {
            // console.log(data);
            this.techArray = data;
        });
        
    }


    NewPayoutStudies(): void {
        this.validateform();
        if (this.validform){   
        let ruta = '/studies/allstudiespayout/' + this.selectedTech;
        this.router.navigate([ruta])
    }
    }


    onChangeTech($event) {
        if ($event) {
            this.selectedTech = $event.id;

        }
    }

    onRemoveTech() {
            this.selectedTech = null;

        }

    validateform() {
        let valid = true;
        if (this.selectedTech == null) {
            valid = false;
        }
    

        this.validform = valid;
    }

}

