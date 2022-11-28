//Adding video object data
//In a real life application I would get this data from a database
var video1 = {
    id: 1,
    source: "https://player.vimeo.com/external/347925811.sd.mp4?s=e48915e5abacccf4471e3daf61611fd8af52ca87&profile_id=164&oauth2_token_id=57447761",
    title: "Manchester United vs Chelsea | Match Highlights",
    channel: "DailyFootball",
    channelSubs: "58K",
    channelIcon: "https://cdn-icons-png.flaticon.com/128/1165/1165187.png",
    views: "120K",
    timeOnline: "2 months",
    description: "Full match hightlights of the game between Manchester United and Chelsea at Stamford Bridge. I hope you enjoy."
}

var video2 = {
    id: 2,
    source: "https://player.vimeo.com/external/392681120.sd.mp4?s=7c032f96adf30f26162fbec0cf91f14753aa5b9d&profile_id=164&oauth2_token_id=57447761",
    title: "Wildlife Photography at Nairobi National Park",
    channel: "The Seasoned Traveler",
    channelSubs: "221K",
    channelIcon: "https://cdn-icons-png.flaticon.com/128/3251/3251221.png",
    views: "1.8M",
    timeOnline: "2 weeks",
    description: "This is some footage from when I was in Nairobi National Park on a safari with my family."
}

var video3 = {
    id: 3,
    source: "https://player.vimeo.com/external/372182116.sd.mp4?s=2225f7b0666c1baeb2dd4e0580c43c1a0bab6920&profile_id=164&oauth2_token_id=57447761",
    title: "A Day in the life of a Jumia Product Manager",
    channel: "Jane Akinyi",
    channelSubs: "105K",
    channelIcon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpbx0UkmdcEGTqEr7uzUDMa78q_CuV5MTuug&usqp=CAU",
    views: "406K",
    timeOnline: "1 week",
    description: "Hi I'm Jane Akinyi a product manager at Jumia Kenya and this is my day in the life video."
}

var video4 = {
    id: 4,
    source: "https://player.vimeo.com/external/398510938.sd.mp4?s=d52c2d502a2e3a8246b540a1b1ca97916661dcb7&profile_id=164&oauth2_token_id=57447761",
    title: "Walter White On Lunch Break | \"Breaking Bread\"",
    channel: "BreakingBadStan",
    channelSubs: "789K",
    channelIcon: "https://cdn-icons-png.flaticon.com/128/169/169935.png",
    views: "2.5M",
    timeOnline: "3 weeks",
    description: "This is what I imagine Walter White would do during his lunch break at Gustavo's meth factory."
}

var video5 = {
    id: 5,
    source: "https://player.vimeo.com/external/260569255.sd.mp4?s=748317eb87cd75ee7a93ff0fd8b0711759f2196a&profile_id=164&oauth2_token_id=57447761",
    title: "WhatsApp is Tracking You!!",
    channel: "Tech Insider",
    channelSubs: "5.2M",
    channelIcon: "https://yt3.googleusercontent.com/ytc/AMLnZu-sjDHJ0U-HcdZ6bboae3v-F4fKfFnjmS7H_rwmnA=s176-c-k-c0x00ffffff-no-rj-mo",
    views: "10M",
    timeOnline: "3 months",
    description: "'WhatsApp is Tracking You!' were the first words that came out of John Doe's mouth. John Doe is an ex WhatsApp cybersecurity engineer who provided us with this chilling information."
}


var url = window.location.href;
var urlString = url.substring(27);

//loading video object data to index.html
//video1
document.getElementById("video1").src = video1.source;
document.getElementById("video1Title").innerText = video1.title;
document.getElementById("video1ChannelIcon").src = video1.channelIcon;
document.getElementById("video1ChannelName").innerText = video1.channel;
document.getElementById("video1Views").innerText = video1.views + " views";
document.getElementById("video1TimeOnline").innerText = video1.timeOnline + " ago";
//video2
document.getElementById("video2").src = video2.source;
document.getElementById("video2Title").innerText = video2.title;
document.getElementById("video2ChannelIcon").src = video2.channelIcon;
document.getElementById("video2ChannelName").innerText = video2.channel;
document.getElementById("video2Views").innerText = video2.views + " views";
document.getElementById("video2TimeOnline").innerText = video2.timeOnline + " ago";
//video3
document.getElementById("video3").src = video3.source;
document.getElementById("video3Title").innerText = video3.title;
document.getElementById("video3ChannelIcon").src = video3.channelIcon;
document.getElementById("video3ChannelName").innerText = video3.channel;
document.getElementById("video3Views").innerText = video3.views + " views";
document.getElementById("video3TimeOnline").innerText = video3.timeOnline + " ago";
//video4
document.getElementById("video4").src = video4.source;
document.getElementById("video4Title").innerText = video4.title;
document.getElementById("video4ChannelIcon").src = video4.channelIcon;
document.getElementById("video4ChannelName").innerText = video4.channel;
document.getElementById("video4Views").innerText = video4.views + " views";
document.getElementById("video4TimeOnline").innerText = video4.timeOnline + " ago";
//video5
document.getElementById("video5").src = video5.source;
document.getElementById("video5Title").innerText = video5.title;
document.getElementById("video5ChannelIcon").src = video5.channelIcon;
document.getElementById("video5ChannelName").innerText = video5.channel;
document.getElementById("video5Views").innerText = video5.views + " views";
document.getElementById("video5TimeOnline").innerText = video5.timeOnline + " ago";

//links video from home page to video page
document.getElementById("video1").onclick = function(){
    window.location.href = "video.html?" + video1.id;
}

//links video from home page to video page
document.getElementById("video2").onclick = function(){
    window.location.href = "video.html?" + video2.id;
}

//links video from home page to video page
document.getElementById("video3").onclick = function(){
    window.location.href = "video.html?" + video3.id;
}

//links video from home page to video page
document.getElementById("video4").onclick = function(){
    window.location.href = "video.html?" + video4.id;
}

//links video from home page to video page
document.getElementById("video5").onclick = function(){
    window.location.href = "video.html?" + video5.id;
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
