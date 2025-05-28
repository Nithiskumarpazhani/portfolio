import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    
  }

  onSubmit() {
    alert("Message sent Please contact me via email at 'nithiskumarbe15@gmail.com'");
  }

}
