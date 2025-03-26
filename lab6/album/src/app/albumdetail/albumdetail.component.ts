import {Component, inject, OnInit, signal, TemplateRef, WritableSignal} from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AlbumfetchService } from '../albumfetch.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-albumdetail',
  imports: [RouterLink],
  templateUrl: './albumdetail.component.html',
  styleUrl: './albumdetail.component.css'
})

export class AlbumdetailComponent implements OnInit {
  album: any;
  loaded: boolean = false;

  constructor(private route: ActivatedRoute, protected albumfetchService: AlbumfetchService) {  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const albumId = params['id'];

      this.albumfetchService.getAlbum(albumId).subscribe(album => {
        this.album = album;
        this.loaded = true;
      })
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
