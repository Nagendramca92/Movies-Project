import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  moviesList:any;
  popularMovies:any;

 constructor(private http:HttpClient){ 
  
 }

 ngOnInit(): void {
   
   this.getTrendingMovies();
   this.getPopularMovies();

 }

 getTrendingMovies(){
  this.http.get('http://localhost:4200/assets/Data/trending-movies.json').subscribe(
    (movies)=>{
       this.moviesList = movies;
      console.log(this.moviesList);
    }
  )
 }

 getPopularMovies(){

  this.http.get("http://localhost:4200/assets/Data/popular-movies.json").subscribe(
    (movies)=>{
      this.popularMovies = movies;
      console.log(movies);
    }
  )
 }
}
