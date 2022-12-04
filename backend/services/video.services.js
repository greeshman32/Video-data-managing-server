const Video = require("../module/video")


const getVideo = async (id) => {
        return await Video.findById(id);
}

const FilterByTitle=(videos,title)=>{
    
    return videos.filter(value => {
        return value.title.toLowerCase().search(title)!==-1;
    } );
}

const FilterByGener=(videos,genre)=>{
    if(genre['All']) return videos;
    return videos.filter(value => genre[value.genre]);
}

const FilterByContentRating=(videos,rating)=>{
    rating = decodeURI(rating);
    if(rating==="Anyone") return videos;
    return videos.filter(value => parseInt(value.contentRating) <= parseInt(rating) || value.contentRating === "Anyone");
}

const Sort=(videos,option='releaseDate')=>{
    
    videos=videos.sort((a,b)=> {
        if(option==='releaseDate') return new Date(a[option]) - new Date(b[option]);
        else return a[option] - b[option];
    });
    
    return videos;
}


module.exports={
    FilterByTitle,
    FilterByGener,
    FilterByContentRating,
    Sort,
    getVideo,
}