# Video data managing server

## This is a backend API to get and store videos

format= {
............videoLink": "youtube.com/embed/vxxN3_bs6Uo" (Should follow the exact format),
............"title": "Fireside chat with Binny Bansal",
............"genre": one of ["Education", "Sports", "Movies", "Comedy", "Lifestyle", “All” ],
............"contentRating": one of [Anyone, +7, +12, +18, All],
............"releaseDate": "12 Jan 2021",
............"previewImage":"https://i.ytimg.com/vi/vxxN3_bs6Uo/maxresdefault.jpg",
............"votes": {
....................."upVotes": "0",
......................"downVotes": "0"
.............},
............."viewCount": "0",
        }
[LiveLink](https://xflix-backend-s2qe.onrender.com/v1/videos)

### endpoint -> /

`POST` 
  You can add a video to the database.
  body format: follow the above format and 

`GET`
Link queries:
 1. sortBy: one of [ViewCount, releaseDate] 
 2. title: any string in the title 
 3. contentRating: one of [Anyone, +7, +12, +18, All]
 4. genres: any of ["Education", "Sports", "Movies", "Comedy", "Lifestyle", “All” ]

### enpoint -> /:vidoeID/

`GET / -> get a single video corresponding to the id`

`PATCH /votes -> increase UpVote or DownVote`
  Body format:{
      vote: UpVote or DownVote,
      change: increase or decrease,
  }

`PATCH /views -> Increases the view count`
