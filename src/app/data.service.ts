import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public photos = []
  public page
  constructor() { }

  public rateImage(id: number, rating: number) {

    if (rating < 1 || rating > 10) return

    let index = this.photos.findIndex((item) => {
      return item.id == id
    })

    if (index != -1) this.photos[index].rating = rating;

  }

}
