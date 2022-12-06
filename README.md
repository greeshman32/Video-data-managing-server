# Video data managing server

## This is a backend API to get and store videos

format= {<br/>
..."videoLink": "youtube.com/embed/vxxN3_bs6Uo" (Should follow the exact format),<br/>
..."title": "Fireside chat with Binny Bansal",<br/>
..."genre": one of ["Education", "Sports", "Movies", "Comedy", "Lifestyle", “All” ],<br/>
..."contentRating": one of [Anyone, +7, +12, +18, All],<br/>
..."releaseDate": "12 Jan 2021",<br/>
..."previewImage":"i.ytimg.com/vi/vxxN3_bs8Uo/maxresdefault.jpg",<br/>
..."votes": {<br/>
..."upVotes": "0",<br/>
... "downVotes": "0"<br/>
...},<br/>
..."viewCount": "0",<br/>
...}<br/>
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

`PATCH /votes` -> increase UpVote or DownVote <br/>
  Body format:{<br/>
<tb/><tb/>vote: UpVote or DownVote,<br/>
<tb/><tb/>change: increase or decrease,<br/>
 <tb/>}

`PATCH /views ->` Increases the view count
