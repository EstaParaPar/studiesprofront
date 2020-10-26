import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from '../../../service/token-storage.service';
import {ActivatedRoute, Router} from '@angular/router';
import { StudiesService } from '../../../service/studies.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';


@Component({
    templateUrl: 'detailPayout.component.html',
    styleUrls: ['detailPayout.component.css']
})
export class DetailPayoutComponent implements OnInit {
    currentPayout;
    currentUser;
    dataArray;
    allData;
    modalRef: BsModalRef;

    constructor(
        private router: Router,
        private tokenStorageService: TokenStorageService,
        private route: ActivatedRoute,
        private studiesService: StudiesService,
        private modalService: BsModalService
    ) { }

    ngOnInit(): void {
            if (!this.tokenStorageService.isloggedin()) {
            this.router.navigate(['']);
        } else {
            this.init();
        }


    }

    init(): void {

        this.currentUser = this.tokenStorageService.getUser();

        this.studiesService.getDetailPayout(this.route.snapshot.paramMap.get('id')).subscribe((data: any[]) => {
            console.log(data);

            this.allData = data;
            this.dataArray = this.allData.studies;
            this.currentPayout = this.allData.payout;
            });
        }
    }
