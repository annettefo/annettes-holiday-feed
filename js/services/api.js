var token = 'xxxx', // my access token
    userid = 'xxx', // user id to get photos from (currently myself)
    num_photos = xx, // how many photos to pull
    hashtag='intel'; // hashtag without # symbol

$.ajax({
    url: 'https://api.instagram.com/v1/users/' + userid + '/media/recent',

    dataType: 'jsonp',
    type: 'GET',
    data: {
        access_token: token,
        count: num_photos
    },
    success: function (data) {
        console.log(data);
        for (x in data.data) {
            $('ul').append('<li><img src="' + data.data[x].images.low_resolution.url + '"></li>'); // URL of image, 306x306
        }
    },
    error: function (data) {
        console.log(data);
    }


});
