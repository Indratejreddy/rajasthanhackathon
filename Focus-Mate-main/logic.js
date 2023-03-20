console.log("Logic Script is Loaded");
API_KEYS = 'AIzaSyATqQhaAvfE6IwORudIwlLqiMipVfyyT_A';

var blurVideo = function(){

    let videosDiv = document.getElementById("items");
    let videos = document.querySelectorAll("ytd-rich-item-renderer, ytd-playlist-renderer , ytd-compact-video-renderer, ytd-video-renderer, ytd-grid-video-renderer, ytd-compact-radio-renderer, ytd-grid-playlist-renderer, ytd-grid-show-renderer, ytd-playlist-panel-video-renderer, ytd-compact-playlist-renderer");
    let video_ids = [];
    let id;
    let filtered_videos = [];
    for (let i = 0;i< videos.length;i++){
        // Add a class instead of style.

        try {
            if(!(videos[i].classList.contains("blurDiv") || videos[i].classList.contains("noBlur"))) {
                link = videos[i].getElementsByTagName("ytd-thumbnail")[0].getElementsByTagName("a")[0].getAttribute("href")
                link = link.replace("/watch", "");
                id = new URLSearchParams(link).get('v');
                video_ids.push(id);
                filtered_videos.push(videos[i]);
            }

        }
        catch(e){
            // console.log("Selected tag is not a VIDEO");

        }

    }
    const chunk = 50;
    // console.log("Length of filtered video", filtered_videos.length, "Length of video", videos.length);
    chrome.storage.sync.get('selected_category', function(data) {
        let user_selected_categories = data.selected_category;
        for (let j = 0; j < filtered_videos.length; j += chunk) {
            let categories = get_category(video_ids.slice(j, j + chunk));
            for (i = j; i < j + chunk && i < filtered_videos.length; i++) {
                var category = categories[i];
                if (!user_selected_categories.includes(category)) {
                    filtered_videos[i].classList.add("blurDiv");
                } else {
                    if(category!==-1){
                    // console.log("Category not found in user selected list", subcategory_dictionary[category]);
                        }
                    filtered_videos[i].classList.add("noBlur");
                }

            }
        }
    });

};
subcategory_dictionary = {
    '1': 'Film & Animation',
    '10': 'Music',
    '15': 'Pets & Animals',
    '17': 'Sports',
    '18': 'Short Movies',
    '19': 'Travel & Events',
    '2': 'Autos & Vehicles',
    '20': 'Gaming',
    '21': 'Videoblogging',
    '22': 'People & Blogs',
    '23': 'Comedy',
    '24': 'Entertainment',
    '25': 'News & Politics',
    '26': 'Howto & Style',
    '27': 'Education',
    '28': 'Science & Technology',
    '29':'Nonprofits & Activism',
    '30': 'Movies',
    '31': 'Anime/Animation',
    '32': 'Action/Adventure',
    '33': 'Classics',
    '34': 'Comedy',
    '35': 'Documentary',
    '36': 'Drama',
    '37': 'Family',
    '38': 'Foreign',
    '39': 'Horror',
    '40': 'Sci-Fi/Fantasy',
    '41': 'Thriller',
    '42': 'Shorts',
    '43': 'Shows',
    '44': 'Trailers'
};

function get_category_id(video_id, api_keys){
    var request = new XMLHttpRequest();
    url = 'https://www.googleapis.com/youtube/v3/videos?part=id%2C+snippet&id=' + video_id + '&key=' + api_keys;

    request.open('GET', url, false);
    request.send();
    var data = JSON.parse(request.response);
    if (request.status === 200) {
        return data.items;
    }
    else {
        console.log('error happend in fetching category id');
        return [null];
    }
}


function get_category_name(category_ids) {


    return category_ids.map(function(index){
        if (index != null){
            if( index["snippet"]["categoryId"] in subcategory_dictionary){
                return index["snippet"]["categoryId"];
            }
            else {
                return -1;
            }}
        else{
            return -1;
        }});


}

function get_category(video_id){
    try {

        // console.log(video_id);
        t0 = performance.now();
        var category_id = get_category_id(video_id, API_KEYS);
        t1 = performance.now();
        var category_name = get_category_name(category_id);
        t2 = performance.now();

        // console.log("For category ID", (t1-t0));
        // console.log("For category name", (t2-t1));
        return category_name;
    }
    catch (e){
        console.log("Error while fetching category of video");
        return "random";
    }
}


