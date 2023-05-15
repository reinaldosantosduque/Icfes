import { Component, OnInit } from '@angular/core';
import { Joya } from '../joya';
import { ActivatedRoute, Router } from '@angular/router';
import { JoyaService } from '../joya.service';

@Component({
  selector: 'app-update-joya',
  templateUrl: './update-joya.component.html',
  styleUrls: ['./update-joya.component.css']
})
export class UpdateJoyaComponent implements OnInit {

  id: number;
  joya: Joya;

  constructor(private route: ActivatedRoute,private router: Router,
    private joyaService: JoyaService) { }

  ngOnInit() {
    this.joya = new Joya();

    this.id = this.route.snapshot.params['id'];
    
    this.joyaService.getJoya(this.id)
      .subscribe(data => {
        console.log(data)
        this.joya = data;
      }, error => console.log(error));
  }

  updateJoya() {
    this.joyaService.updateJoya(this.id, this.joya)
      .subscribe(data => {
        console.log(data);
        this.joya = new Joya();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateJoya();    
  }

  gotoList() {
    this.router.navigate(['/joyas']);
  }
}
