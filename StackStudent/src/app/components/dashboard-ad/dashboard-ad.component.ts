import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-ad',
  templateUrl: './dashboard-ad.component.html',
  styleUrls: ['./dashboard-ad.component.css']
})
export class DashboardAdComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  logOut() {
    localStorage.removeItem('token');
    this.router.navigate(['/loginAd'])
  }
}
