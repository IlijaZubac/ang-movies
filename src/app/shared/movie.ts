export class Movie {

     id: number;
     name: string;
     director: string;
     imageUrl: string;
     duration: number;
     realeaseDate: string;
     genres: Array<string>;

     constructor(id: number, name: string, director: string, imageUrl: string, duration: number, realeaseDate: string, genres: Array<string>){
         this.id = id;
         this.name = name;
         this.director = director;
         this.imageUrl = imageUrl;
         this.duration = duration;
         this.realeaseDate = realeaseDate;
         this.genres = genres;
     }

}
