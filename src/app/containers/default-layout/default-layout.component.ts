import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../service/token-storage.service';
import { navItemsAdmin } from '../../_navAdmin';
import { navItemsDoctor } from '../../_navDoctor';
import { navItemsUser } from '../../_navUser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  private name: string;
  private lastname: string;
  private roles: string;
  public sidebarMinimized = false;
  public navInUse = null;
  isLoggedIn = false;

  constructor(private router: Router, private tokenStorageService: TokenStorageService) { }
 
  ngOnInit() {
    const user = this.tokenStorageService.getUser();
      this.name = user.name;
      this.lastname = user.lastname;
      this.roles = user.role;
      console.log(user);
      console.log(this.roles);

      if (this.roles === 'Admin') {
        this.navInUse = navItemsAdmin;
      }
      if (this.roles === 'Doctor') {
        this.navInUse = navItemsDoctor;
      }
      if (this.roles === 'Tecnico') {
        this.navInUse = navItemsUser;
      }
    }


  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
  logout() {
      this.router.navigate(['logout']);
  }

  profile() {
    this.router.navigate(['profile']);
  }
}
