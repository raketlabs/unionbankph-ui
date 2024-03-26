import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  standalone: true,
  imports: [],
  templateUrl: './splash.component.html',
  styleUrl: './splash.component.scss'
})
export class SplashComponent implements OnInit {

  isLoaded = false

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
    // do work
    setTimeout(() => this.done(), 5000)
  }

  done() {
    this.isLoaded = true
    setTimeout(() => this.router.navigate(['/login']), 200)
  }

}
