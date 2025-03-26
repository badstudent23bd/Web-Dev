import { Component, OnInit } from '@angular/core';
import { Photo } from '../photo';
import { CommonModule } from '@angular/common';
import { AlbumfetchService } from '../albumfetch.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-albumphotos',
  imports: [CommonModule],
  templateUrl: './albumphotos.component.html',
  styleUrl: './albumphotos.component.css'
})
export class AlbumphotosComponent implements OnInit {
  photos!: Photo[];
  loaded: boolean = false;

  constructor(private route: ActivatedRoute, private albumfetchService: AlbumfetchService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const albumId = params['id'];

      this.albumfetchService.getPhotos(albumId).subscribe(photos => {
        this.photos = photos;
        this.loaded = true;
      })
    })
  }
}
