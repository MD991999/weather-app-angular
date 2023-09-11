import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myweather: any = {}
  input: string = '';
  temperature: any;
  humidity: any;
  pressure: any;
  speed: any;
  nature: any;
  icon: any;
  name: any;
  country: any;
  image:any;
  Clouds:any;
  degreesymbol:any='&#176;C'
  // cloud

  image1 = 'https://free4kwallpapers.com/uploads/originals/2015/10/09/amazing-view-of-sun-shining-under-the-cloudy-sky-wallpaper.jpg'
  // sunny
  image2 = 'https://p4.wallpaperbetter.com/wallpaper/689/575/765/sunny-day-hd-wallpaper-preview.jpg'
  // haize
  image3 = 'https://wallpapershome.com/images/wallpapers/yosemite-3840x2160-5k-4k-wallpaper-8k-forest-osx-apple-mountains-181.jpg'
  // clear
  image4 = 'https://wallup.net/wp-content/uploads/2019/09/481092-nature-tree-green-blue-sky-filed.jpg'
  // rain
  image5 = 'https://c4.wallpaperflare.com/wallpaper/561/111/792/grass-drops%C2%A0-background-fog-wallpaper-preview.jpg'
  constructor(public api: ApiService) {
  }
  ngOnInit(): void {

    this.submit()
    // this.imagerepresent()
  }
  submit() {
    this.api.getdetails(this.input)
      .subscribe((result: any) => {
        this.myweather = result
        console.log(this.myweather);
        // location.reload()

        this.temperature = this.myweather.main.temp
        console.log(this.temperature);
        this.humidity = this.myweather.main.humidity
        console.log(this.humidity);
        this.pressure = this.myweather.main.pressure
        console.log(this.pressure);
        this.speed = this.myweather.wind.speed
        console.log(this.speed);
        this.nature = this.myweather.weather[0].main
        console.log(this.nature);
        this.icon = this.myweather.weather[0].icon
        console.log(this.icon);
        this.name = this.myweather.name
        console.log(this.name);
        this.country = this.myweather.sys.country
        console.log(this.country);


      }
      )
      
  }
//   imagerepresent(){
//     console.log('hello');
    
//     if(this.nature==this.clouds){
//       console.log('this is michelle');

// this.image=this.image1

//     }
    // else if(this.nature=='sunny'){
    //   this.image=this.image2

    // }
    // else if(this.nature=='haize'){
    //   this.image=this.image3

    // }
    // else if(this.nature=='clear'){
    //   this.image=this.image4
 
    // }
    // else if(this.nature=='rain'){
    //   this.image=this.image5

    // }
  // }
}
