import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
    name: String | undefined;
    email: String | undefined;
    message: String | undefined;
  constructor() { }

  ngOnInit(): void {
    
  }
  submitForm(){
    const message = `My name is ${this.name}. My email is ${this.email}. My message is ${this.message}`;
    alert(message);
  }
}
