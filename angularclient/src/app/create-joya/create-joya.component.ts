import { JoyaService } from '../joya.service';
import { Joya } from '../joya';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-joya',
  templateUrl: './create-joya.component.html',
  styleUrls: ['./create-joya.component.css']
})
export class CreateJoyaComponent implements OnInit {

  joya: Joya = new Joya();
  submitted = false;

  constructor(private joyaService: JoyaService,
    private router: Router) { }

  ngOnInit() {
  }

  newJoya(): void {
    this.submitted = false;
    this.joya = new Joya();
  }

  save() {
    this.joyaService
    .createJoya(this.joya).subscribe(data => {
      console.log(data)
      this.joya = new Joya();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/joyas']);
  }
}
