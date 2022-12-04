const service=require("../services/video.services");
const Video = require("../module/video");



const filter = async(req,res)=>{
    const title = req.query.title;
    let gener = req.query.genres;
    let rating = req.query.contentRating;
    let videos = await Video.find();

    videos = service.Sort(videos,req.query.sortBy);
    
    if(rating) videos=service.FilterByContentRating(videos,rating);
    console.log(videos.length);
    if(gener){
        let obj={};
        for(let i=0;i<gener.length;i++){
            obj[gener[i]]=true;
        }
        console.log(obj);
        videos = service.FilterByGener(videos,obj);
    }
    console.log(videos.length);
    if(title){
        videos = service.FilterByTitle(videos,title);
    }
    console.log(videos.lenght);
    res.status(200).send(videos);

}

const videoID=async(req,res)=>{
    const id=req.params.videoId;
    const video = await service.getVideo(id);
    if(!video)
    {
        res.status(404).send({code:404,message:"No video found with matching id"});
        return;
    }
    
    res.status(200).send(video);
}

const addVideo= async(req,res)=>{
    const obj=req.body;
    const vid = await Video.create(obj).catch(err=>{
        res.status(400).send(err);
    });
    
    res.status(200).send(vid);
}

const votes=async (req,res)=>{
    const id = req.params.videoId;
    const vote = req.body.vote;
    const change = req.body.change;
    
    const video = await service.getVideo(id);
    if(!video)
    {
        res.status(404).send({code:404,message:"No video found with matching id"});
        return;
    }
    
    if(change === "increse")
        video.votes[vote] = String(parseInt(video.votes[vote]) + 1);
    else 
    video.votes[vote] = String(parseInt(video.votes[vote]) - 1);

    await video.save();
    res.status(200).send(req.body);    
}

const IncreseViewCount =async (req,res)=>{
    const id = req.params.videoId;
    const video = await service.getVideo(id);
    if(!video)
    {
        res.status(404).send({code:404,message:"No video found with matching id"});
        return;
    }
    video.viewCount=String( parseInt(video.viewCount) + 1 );
    await video.save();
    res.status(200).send(video);
}


module.exports={
    filter,
    videoID,
    addVideo,
    votes,
    IncreseViewCount,
}