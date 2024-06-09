function makeAlbum (artistName : string , albumTitle : string , tracks? : number){
  
    let album : {artist : string , title : string , tracks?: number} = {
         artist : artistName,
         title : albumTitle,
    };
   if(tracks !== undefined){
    album.tracks = tracks;
   }
    return album;
}

let album1 = makeAlbum("Ahzaz","Jazba-e-Junoon");
let album2=  makeAlbum("Ali Zafar","Jhoom");
let album3 = makeAlbum("Abida parveen","The Legend of Abida Parveen");
let album4 = makeAlbum("Sikandar Ka Mandar ","Pehli",12);

console.log(album1);
console.log(album2);
console.log(album3);
console.log(album4);


