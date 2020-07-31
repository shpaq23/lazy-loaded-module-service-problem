import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";

@Component({
  selector: 'app-security',
  templateUrl: 'SecurityComponent.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SecurityComponent implements OnInit {

  firstXss: string | SafeHtml = `<img src=xss onerror=alert(document.cookie)>`;
  secondXss: string | SafeHtml = `<a href=“www.softwareplant.com”>Super stronka wygrasz tysiaka</a>`;
  thirdXss: string | SafeHtml = `<script>alert('Executing JS')</script>`;
  fourthXss: string | SafeHtml = `<img src=“www.softwareplant.com” onerror=alert(document.cookie)>`;

  imagePath = 'https://i.ibb.co/6tBJQr8/xss.jpg';

  constructor(private sanitizer: DomSanitizer) {

  }

  ngOnInit() {
    // this.bypassSecurity();
  }

  bypassSecurity(): void {
    this.firstXss = this.sanitizer.bypassSecurityTrustHtml(this.firstXss as string);
    this.secondXss = this.sanitizer.bypassSecurityTrustHtml(this.secondXss as string);
    this.thirdXss = this.sanitizer.bypassSecurityTrustHtml(this.thirdXss as string);
    this.fourthXss = this.sanitizer.bypassSecurityTrustHtml(this.fourthXss as string);
  }

}
