import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-herodetails',
  templateUrl: './herodetails.component.html',
  styleUrls: ['./herodetails.component.css']
})
export class HerodetailsComponent implements OnInit {

  public heroId;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    const id = parseInt[this.route.snapshot.paramMap. get('id')];
    this.heroId = id;


  }
}







