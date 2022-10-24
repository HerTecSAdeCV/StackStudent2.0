import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-p',
  templateUrl: './dashboard-p.component.html',
  styleUrls: ['./dashboard-p.component.css']
})
export class DashboardPComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  logOut() {
    localStorage.removeItem('token');
    this.router.navigate(['/loginP'])
  }

}
