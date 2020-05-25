import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  public selectedUser;
  public users = [
    { name: "Иванов" },
    { name: "Петров" },
    { name: "Сидоров" },
    { name: "Козлов"}
  ];

  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
