import { Component, OnInit, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class GameHomeComponent implements OnInit {

	url : any;
	status: string;
	constructor(private sanitizer: DomSanitizer) { }

	ngOnInit(): void {
		this.setUrl('sales');
	}

	setUrl(url:string) {
		this.status =  url;
		this.url = this.sanitizer.bypassSecurityTrustResourceUrl(url)
	}

}
