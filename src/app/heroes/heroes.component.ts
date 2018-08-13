import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

 Hero = [
    {id: 1, name: 'first'},
    {id: 2, name: 'second'},
    {id: 3, name: 'third'},
    {id: 4, name: 'fourth'},
    {id: 5, name: 'fifth'}];
  constructor(private router: Router) { }

  ngOnInit() {
  }
  OnSelect(hero) {
this.router.navigate(['/hero', hero.id]);
  }

}
