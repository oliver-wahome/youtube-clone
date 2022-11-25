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

var urlString = decodeURIComponent(window.location.search);
var theId = urlString.substring(1);

if(theId == "1"){
    document.getElementById("largeVideo").src = video1.source;
    document.getElementById("largeVideoTitle").innerText = video1.title.toUpperCase();
    document.getElementById("largeVideoChannelIcon").src = video1.channelIcon;
    document.getElementById("largeVideoChannelName").innerText = video1.channel;
    document.getElementById("largeVideoChannelSubs").innerText = video1.channelSubs + " subscribers";
    document.getElementById("largeVideoViews").innerText = video1.views + " views";
    document.getElementById("largeVideoTimeOnline").innerText = video1.timeOnline + " ago";
    document.getElementById("largeVideoDesc").innerText = video1.description;
}
else if(theId == "2"){
    document.getElementById("largeVideo").src = video2.source;
    document.getElementById("largeVideoTitle").innerText = video2.title.toUpperCase();
    document.getElementById("largeVideoChannelIcon").src = video2.channelIcon;
    document.getElementById("largeVideoChannelName").innerText = video2.channel;
    document.getElementById("largeVideoChannelSubs").innerText = video2.channelSubs + " subscribers";
    document.getElementById("largeVideoViews").innerText = video2.views + " views";
    document.getElementById("largeVideoTimeOnline").innerText = video2.timeOnline + " ago";
    document.getElementById("largeVideoDesc").innerText = video2.description;
}
else if(theId == "3"){
    document.getElementById("largeVideo").src = video3.source;
    document.getElementById("largeVideoTitle").innerText = video3.title.toUpperCase();
    document.getElementById("largeVideoChannelIcon").src = video3.channelIcon;
    document.getElementById("largeVideoChannelName").innerText = video3.channel;
    document.getElementById("largeVideoChannelSubs").innerText = video3.channelSubs + " subscribers";
    document.getElementById("largeVideoViews").innerText = video3.views + " views";
    document.getElementById("largeVideoTimeOnline").innerText = video3.timeOnline + " ago";
    document.getElementById("largeVideoDesc").innerText = video3.description;
}
else if(theId == "4"){
    document.getElementById("largeVideo").src = video4.source;
    document.getElementById("largeVideoTitle").innerText = video4.title.toUpperCase();
    document.getElementById("largeVideoChannelIcon").src = video4.channelIcon;
    document.getElementById("largeVideoChannelName").innerText = video4.channel;
    document.getElementById("largeVideoChannelSubs").innerText = video4.channelSubs + " subscribers";
    document.getElementById("largeVideoViews").innerText = video4.views + " views";
    document.getElementById("largeVideoTimeOnline").innerText = video4.timeOnline + " ago";
    document.getElementById("largeVideoDesc").innerText = video4.description;
}
else if(theId == "5"){
    document.getElementById("largeVideo").src = video5.source;
    document.getElementById("largeVideoTitle").innerText = video5.title.toUpperCase();
    document.getElementById("largeVideoChannelIcon").src = video5.channelIcon;
    document.getElementById("largeVideoChannelName").innerText = video5.channel;
    document.getElementById("largeVideoChannelSubs").innerText = video5.channelSubs + " subscribers";
    document.getElementById("largeVideoViews").innerText = video5.views + " views";
    document.getElementById("largeVideoTimeOnline").innerText = video5.timeOnline + " ago";
    document.getElementById("largeVideoDesc").innerText = video5.description;
}

