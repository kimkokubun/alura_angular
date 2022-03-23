import {Component} from '@angular/core';
import {$e} from "@angular/compiler/src/chars";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';
  transferencia: any;

  transferir(event: any) {
    this.transferencia = event.event;
    console.log(this.transferencia)
  }
}
