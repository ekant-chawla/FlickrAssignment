import { Component, OnInit, OnDestroy } from '@angular/core';
import { HelperService } from '../helper.service';
import { ApiService } from '../api.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private page = 1;
  public photos = [];
  public loadingImages = false;
  constructor(private helper: HelperService, private api: ApiService, private data: DataService) { }

  ngOnInit() {
    if (this.data.photos.length > 0) {
      this.photos = this.data.photos;
      this.page = this.data.page;
    } else this.getImages();
  }

  ngOnDestroy() {
    this.data.photos = this.photos;
    //this.data.page = this.page;
  }

  public getImages() {
    this.loadingImages = true
    this.api.getImages(this.page).subscribe((response: any) => {
      this.loadingImages = false;
      if (response.stat !== 'ok') {
        console.log('Some error in api response')
      } else {
        //Create image urls for each image
        // Note: Had to create urls by my self and not using the query parameter as the query parameter returned no image url for some of the images.
        let tempArray = response.photos.photo.map(this.helper.generateImgUrl);
        //Add the image to the images array
        this.photos = this.photos.concat(tempArray);
        //this.page++;
      }

    },this.helper.errorHandler)
  }

}
