# Video data managing server

## This is a backend API to get and store videos

format= {<br/>
<tb/><tb/> "videoLink": "youtube.com/embed/vxxN3_bs6Uo" (Should follow the exact format),<br/>
<tb/><tb/> "title": "Fireside chat with Binny Bansal",<br/>
 <tb/><tb/> "genre": one of ["Education", "Sports", "Movies", "Comedy", "Lifestyle", “All” ],<br/>
<tb/><tb/> "contentRating": one of [Anyone, +7, +12, +18, All],<br/>
 <tb/><tb/> "releaseDate": "12 Jan 2021",<br/>
 <tb/><tb/> "previewImage":"https://i.ytimg.com/vi/vxxN3_bs6Uo/maxresdefault.jpg",<br/>
<tb/><tb/> "votes": {<br/>
<tb/><tb/><tb/><tb/> "upVotes": "0",<br/>
<tb/><tb/><tb/><tb/> "downVotes": "0"<br/>
 <tb/><tb/> },<br/>
<tb/><tb/> "viewCount": "0",<br/>
<tb/><tb/> }<br/>
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

`GET /` -> get a single video corresponding to the id

`PATCH /votes` -> increase UpVote or DownVote
  Body format:{
      vote: UpVote or DownVote,
      change: increase or decrease,
  }

`PATCH /views ->` Increases the view count
