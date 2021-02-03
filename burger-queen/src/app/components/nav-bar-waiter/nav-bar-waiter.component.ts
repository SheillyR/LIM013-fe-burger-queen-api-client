import { Component, OnInit, OnDestroy } from '@angular/core';
import { faHome, faClipboardList, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { ApiService } from '../../services/api.service';
import { UsersResponseI } from '../../models/users-response.model';

@Component({
  selector: 'app-nav-bar-waiter',
  templateUrl: './nav-bar-waiter.component.html',
  styleUrls: ['./nav-bar-waiter.component.sass']
})
export class NavBarWaiterComponent implements OnInit, OnDestroy {
  faHome = faHome;
  faClipboardList = faClipboardList;
  faSignOutAlt = faSignOutAlt;

  user!: UsersResponseI[];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    // Aqui obtenemos los usuarios de la API
    this.api.getUsers().subscribe((user: UsersResponseI[] )=> {
      this.user = user;
      console.log(user);
    })
  }

  
  ngOnDestroy() {
    
  }

  SignOut(){
    sessionStorage.removeItem('token');
  }
}
