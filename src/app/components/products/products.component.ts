import { Component, OnInit } from '@angular/core';
import { faStar, faStarHalfAlt, faHeart, faChartLine, faEye, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor() { }
  faStar = faStar;
  faStarHalfAlt = faStarHalfAlt;
  faHeart = faHeart;
  faChartLine = faChartLine;
  faEye = faEye;
  faTimes = faTimes;
  
  // quick view
  activeClass = false;
  showQuickView() {
    this.activeClass = true;
  }
  closeQuickView() {
    if ((this.activeClass) = true ) {
      this.activeClass = false;
    }
  }

  ngOnInit(): void {
  }

}
