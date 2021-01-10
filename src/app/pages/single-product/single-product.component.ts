import { Component, OnInit } from '@angular/core';
import { faStar, faStarHalfAlt, faHeart, faChartLine, faEye, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {

  constructor() { }
  faStar = faStar;
  faStarHalfAlt = faStarHalfAlt;

  ngOnInit(): void {
  }

}
