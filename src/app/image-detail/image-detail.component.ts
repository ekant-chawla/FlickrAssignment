import { Component, OnInit } from '@angular/core';
import { HelperService } from '../helper.service';
import { ApiService } from '../api.service';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit {

  public photo
  public providedBy
  public reason
  public rating = 5
  public ratingValues = [1,2,3,4,5,6,7,8,9,10]
  public gettingData = false

  constructor(private helper: HelperService, private api: ApiService, private data: DataService, private route: ActivatedRoute,private router:Router,private location:Location) { }

  ngOnInit() {
    this.getImageDetail()
  }

  private getImageDetail() {
    let id = this.route.snapshot.paramMap.get('imageId')
    this.gettingData = true
    this.api.getImageDetail(id).subscribe((response: any) => {
      this.gettingData = false
      if (response.stat !== 'ok') {
        console.log('Some error in api response')
      } else {
        this.photo = this.helper.generateImgUrl(response.photo)
        console.log(this.photo)
      }
    }, this.helper.errorHandler)
  }

  public submitRating() {
    console.log(this.providedBy, this.reason, this.rating)
    this.data.rateImage(this.photo.id,this.rating)
    this.router.navigate(['/home'])
  }

  public back(){
    this.location.back()
  }
}
