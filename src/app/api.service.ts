import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private API_KEY = 'f962dde5039061e65ddbd1de51ad4f89';
  private ITEM_PER_PAGE = 30;

  constructor(private http: HttpClient) { }

  public getImages(page:number){
    if(page<1) page =1;
    let url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${this.API_KEY}&tags=food&media=photos&per_page=${this.ITEM_PER_PAGE}&page=${page}&format=json&nojsoncallback=1&extras=date_upload&sort=date-posted-desc`;
    return this.http.get(url);
  }


  public getImageDetail(id:string){
    let url = `https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=${this.API_KEY}&photo_id=${id}&format=json&nojsoncallback=1`;
    return this.http.get(url);
  }

}
