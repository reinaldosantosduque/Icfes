import { Observable } from "rxjs";
import { JoyaService } from "./../joya.service";
import { Joya } from "./../joya";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { ModalService } from '../_modal';

@Component({
  selector: "app-joya-list",
  templateUrl: "./joya-list.component.html",
  styleUrls: ["./joya-list.component.css"]
})
export class JoyaListComponent implements OnInit {
  joyas: Observable<Joya[]>;
  joya: Joya;
  idToDelete: number;
  constructor(private joyaService: JoyaService,
    private router: Router,
    private modalService: ModalService,
    private route: ActivatedRoute) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.joyas = this.joyaService.getJoyasList();
  }

  confirmardeleteJoya(id: number) {
    this.idToDelete = id;
    this.modalService.open('custom-modal-2');
  }

  deleteJoya() {
    this.joyaService.deleteJoya(this.idToDelete)
    .subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error));
      this.modalService.close('custom-modal-2');
    }

  updateJoya(id: number){
    this.router.navigate(['update', id]);
  }

  openDetalle(id: number) {
    this.joya = new Joya();
    this.joyaService.getJoya(id)
      .subscribe(data => {
        console.log(data)
        this.joya = data;
      }, error => console.log(error));

    
    this.modalService.open('custom-modal-1');
  }

  openModal(id: string) {
    this.modalService.open(id)
  }

  closeModal(id: string) {
    this.modalService.close(id);
}

}
