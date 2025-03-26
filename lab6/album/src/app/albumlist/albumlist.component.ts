import {Component, inject, OnInit, signal, TemplateRef, WritableSignal} from '@angular/core';
import { Album } from '../album';
import { CommonModule } from '@angular/common';
import { AlbumfetchService } from '../albumfetch.service'
import { RouterLink } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-albumlist',
  imports: [CommonModule, RouterLink],
  templateUrl: './albumlist.component.html',
  styleUrl: './albumlist.component.css'
})

export class AlbumlistComponent implements OnInit {
  albums!: Album[];
  loaded: boolean = false;

  constructor(protected albumfetchService: AlbumfetchService) {  }

  ngOnInit() {
    this.loaded = false;
    this.albumfetchService.getAlbums().subscribe((albums: Album[])=> {
      this.albums = albums;
      this.loaded = true;
    })
  }

  // bootstrap
  private modalService = inject(NgbModal);
  closeResult: WritableSignal<string> = signal('');

  open(content: TemplateRef<any>) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result) => {
        this.closeResult.set(`Closed with: ${result}`);
      },
      (reason) => {
        this.closeResult.set(`Dismissed ${this.getDismissReason(reason)}`);
      },
    );
  }

  private getDismissReason(reason: any): string {
    switch (reason) {
      case ModalDismissReasons.ESC:
        return 'by pressing ESC';
      case ModalDismissReasons.BACKDROP_CLICK:
        return 'by clicking on a backdrop';
      default:
        return `with: ${reason}`;
    }
  }
  // end bootstrap

  textFromForm() : string {
    console.log("text getted from form");
    // @ts-ignore
    return document.getElementById('details').value.trim();
  }
}
