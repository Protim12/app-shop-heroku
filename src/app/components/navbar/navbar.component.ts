import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { faShoppingCart, faSearch, faTimes, faEllipsisH, faUser, faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public router: Router) { }
  faShoppingCart = faShoppingCart;
  faSearch = faSearch;
  faTimes = faTimes;
  faEllipsisH = faEllipsisH;
  faUser = faUser;
  faBars = faBars;

  // cartModal
  cartModalActive = false;
  viewCartModal() {
    this.cartModalActive = true;
  }
  closeCartModal() {
    if ((this.cartModalActive) = true ) {
      this.cartModalActive = false;
    }
  }

  // searchShow
  searchShow = false;
  @HostListener('document:click', ['$event']) onDocumentClick() {
    this.searchShow = false;
    this.dotActive = false;
  }
  toggleSearch($event:any) {
    $event.stopPropagation();
    if(this.searchShow == false) {
      this.searchShow = true;
    }
    else {
      this.searchShow = false;
    }
  }

  // dotActive
  dotActive = false;
  toggleDot($event:any) {
    $event.stopPropagation();
    if(this.dotActive == false) {
      this.dotActive = true;
    }
    else {
      this.dotActive = false;
    }
  }

  // mobileActive
  mobileActive = false;
  toggleMenu() {
    if(this.mobileActive == false) {
      this.mobileActive = true;
    }
    else {
      this.mobileActive = false;
    }
  }

  // mobileNavbar
  scrWidth:any;
  @HostListener('window:resize', ['$event'])
  // getScreenSize(event:any) {
  //       this.scrWidth = window.innerWidth;
  //       console.log(this.scrWidth);
  // }
  appendFunction(event:any) {
    this.scrWidth = window.innerWidth;
    if(this.scrWidth < 992) {
      console.log(this.scrWidth);
    }
  }

  ngOnInit(): void {
  }

}
