//Adding video object data to array
//In a real life application I would get this data from a database
var videoData = [];
videoData[0] = {
    id: 0,
    source: "https://player.vimeo.com/external/347925811.sd.mp4?s=e48915e5abacccf4471e3daf61611fd8af52ca87&profile_id=164&oauth2_token_id=57447761",
    title: "Manchester United vs Chelsea | Match Highlights",
    channel: "DailyFootball",
    channelSubs: "58K",
    channelIcon: "https://cdn-icons-png.flaticon.com/128/1165/1165187.png",
    views: "120K",
    timeOnline: "2 months",
    description: "Full match hightlights of the game between Manchester United and Chelsea at Stamford Bridge. I hope you enjoy."
}

videoData[1] = {
    id: 1,
    source: "https://player.vimeo.com/external/392681120.sd.mp4?s=7c032f96adf30f26162fbec0cf91f14753aa5b9d&profile_id=164&oauth2_token_id=57447761",
    title: "Wildlife Photography at Nairobi National Park",
    channel: "The Seasoned Traveler",
    channelSubs: "221K",
    channelIcon: "https://cdn-icons-png.flaticon.com/128/3251/3251221.png",
    views: "1.8M",
    timeOnline: "2 weeks",
    description: "This is some footage from when I was in Nairobi National Park on a safari with my family."
}

videoData[2] = {
    id: 2,
    source: "https://player.vimeo.com/external/372182116.sd.mp4?s=2225f7b0666c1baeb2dd4e0580c43c1a0bab6920&profile_id=164&oauth2_token_id=57447761",
    title: "A Day in the life of a Jumia Product Manager",
    channel: "Jane Akinyi",
    channelSubs: "105K",
    channelIcon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpbx0UkmdcEGTqEr7uzUDMa78q_CuV5MTuug&usqp=CAU",
    views: "406K",
    timeOnline: "1 week",
    description: "Hi I'm Jane Akinyi a product manager at Jumia Kenya and this is my day in the life video."
}

videoData[3] = {
    id: 3,
    source: "https://player.vimeo.com/external/398510938.sd.mp4?s=d52c2d502a2e3a8246b540a1b1ca97916661dcb7&profile_id=164&oauth2_token_id=57447761",
    title: "Walter White On Lunch Break | \"Breaking Bread\"",
    channel: "BreakingBadStan",
    channelSubs: "789K",
    channelIcon: "https://cdn-icons-png.flaticon.com/128/169/169935.png",
    views: "2.5M",
    timeOnline: "3 weeks",
    description: "This is what I imagine Walter White would do during his lunch break at Gustavo's meth factory."
}

videoData[4] = {
    id: 4,
    source: "https://player.vimeo.com/external/260569255.sd.mp4?s=748317eb87cd75ee7a93ff0fd8b0711759f2196a&profile_id=164&oauth2_token_id=57447761",
    title: "WhatsApp is Tracking You!!",
    channel: "Tech Insider",
    channelSubs: "5.2M",
    channelIcon: "https://yt3.googleusercontent.com/ytc/AMLnZu-sjDHJ0U-HcdZ6bboae3v-F4fKfFnjmS7H_rwmnA=s176-c-k-c0x00ffffff-no-rj-mo",
    views: "10M",
    timeOnline: "3 months",
    description: "'WhatsApp is Tracking You!' were the first words that came out of John Doe's mouth. John Doe is an ex WhatsApp cybersecurity engineer who provided us with this chilling information."
}

//loading video data to their respective elements in index.html
for(let i=0; i<videoData.length; i++){
    document.getElementById("video"+(i+1)).src = videoData[i].source;
    document.getElementById("video"+(i+1)+"Title").innerText = videoData[i].title;
    document.getElementById("video"+(i+1)+"ChannelIcon").src = videoData[i].channelIcon;
    document.getElementById("video"+(i+1)+"ChannelName").innerText = videoData[i].channel;
    document.getElementById("video"+(i+1)+"Views").innerText = videoData[i].views + " views";
    document.getElementById("video"+(i+1)+"TimeOnline").innerText = videoData[i].timeOnline + " ago";
}

//function to add videoData id to url onclick of video
function videoOnclick(num){
    window.location.href = "video.html?" + videoData[num].id;
}

//video expand function
//expanding the videoContainer when the video class is hovered over
//NOTE: I could not achieve this using css so I resorted to doing it using js
function videoMouseOver(num){
    //playing the video on hover
    document.getElementById("video"+num).play();

    //making the videoContainer expand when user hovers over video
    document.getElementById("vc"+num).style.zIndex = 2;
    document.getElementById("vc"+num).style.position = "relative";
    document.getElementById("vc"+num).style.scale = 1.25;
    document.getElementById("vc"+num).style.borderRadius = "15px";
    document.getElementById("vc"+num).style.overflow = "hidden";
    document.getElementById("vc"+num).style.boxShadow = "3px 3px 8px rgba(0, 0, 0, 0.5)";
    document.getElementById("video"+num).style.borderRadius = 0;
}

function videoMouseOut(num){
    //pausing the video on mouseout
    document.getElementById("video"+num).pause();

    //making the videoContainer shrink to its original state on mouseout
    document.getElementById("vc"+num).style.zIndex = 1;
    document.getElementById("vc"+num).style.position = "relative";
    document.getElementById("vc"+num).style.scale = 1;
    document.getElementById("vc"+num).style.borderRadius = 0;
    document.getElementById("vc"+num).style.overflow = "hidden";
    document.getElementById("vc"+num).style.boxShadow = "none";
    document.getElementById("video"+num).style.borderRadius = "15px";
}
