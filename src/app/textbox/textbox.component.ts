import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientService, Textbox } from '../service/httpclient.service';
import { delay } from 'q';

@Component({
  selector: 'app-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.css']
})
export class TextboxComponent implements OnInit {

  textbox1: Textbox = new Textbox('');
  textbox2: Textbox = new Textbox('');

  constructor(private httpClientService: HttpClientService) {
  }

  ngOnInit() {
  }

  submit(): void {
    this.httpClientService.submit(this.textbox1)
      .subscribe( data => {
      });

    this.httpClientService.copiaTexto().subscribe(
      response => {this.textbox2.campo = response.campo ; }
      );
  }

}
