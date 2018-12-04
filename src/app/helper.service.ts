import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }

  public generateImgUrl(item){
      item.imgurl = `https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}_n.jpg`
      return item
  }

  public errorHandler(){
    console.log('Some error occured on server side')
  }
}
