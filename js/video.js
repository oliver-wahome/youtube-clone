//Adding video object data to array
//In a real life application I would get this data from a database
const videoData = [];

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

var urlString = decodeURIComponent(window.location.search);
var theId = parseInt(urlString.substring(1));

console.log(theId);

//loads the video data to the respective elements
document.getElementById("largeVideo").src = videoData[theId].source;
document.getElementById("largeVideoTitle").innerText = videoData[theId].title.toUpperCase();
document.getElementById("largeVideoChannelIcon").src = videoData[theId].channelIcon;
document.getElementById("largeVideoChannelName").innerText = videoData[theId].channel;
document.getElementById("largeVideoChannelSubs").innerText = videoData[theId].channelSubs + " subscribers";
document.getElementById("largeVideoViews").innerText = videoData[theId].views + " views";
document.getElementById("largeVideoTimeOnline").innerText = videoData[theId].timeOnline + " ago";
document.getElementById("largeVideoDesc").innerText = videoData[theId].description;

