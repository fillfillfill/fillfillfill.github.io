/*let data = {
    photo: '/images/pic-creation.jpg', 
    title: 'My title',
    description: 'Why is this a very good image'
}

$('#photo').attr('src',data.photo)
*/
let imagesData = [
    {
        photo: '/pic-creation.jpg', 
        title: 'Amazing Creation',
        description: 'Once upon a time, there was this beautiful island. It shows a beautiful contrast between sea, desert, plantation and mountains. It would be aamazing to chillout there.'
    },
    {
        photo: '/pic-beachCity.jpg', 
        title: 'Port City',
        description: 'Beautiful port city. It is a cosy city with many ports and nearby islands and beaches.'
    },
    {
        photo: '/pic-beachPath.jpg', 
        title: 'Path to the Beach',
        description: 'This is a tropical beach. Amazing for holidays and for families to visit.'
    },
    {
        photo: '/pic-beachWaves.jpg', 
        title: 'Beach Waves',
        description: 'If you want to have peace with your soul, just come to this beach. It is quite and peaceful. Good for contemplating.'
    },
    {
        photo: '/pic-butterflies.jpeg', 
        title: 'Butterflies Forest',
        description: 'This picture reminds me of The Avatar movie. It is like a fantasy forest where elves and strange creatures live in.'
    },
    {
        photo: '/pic-fantasyWinter.jpg', 
        title: 'Science Fiction',
        description: 'This is a science fiction picture. It looks amazing. It is suppose to be when humanity advanced in the future and build their own small planets roaming the galaxies.'
    },
    {
        photo: '/pic-flowersPath.jpg', 
        title: 'Flowered Path',
        description: 'This is in Japan, a place where is famous for it pink and purple flowers and they cover a long path. Nice for visiting with families or to relax there.'
    },
    {
        photo: '/pic-islands.jpg', 
        title: 'Remote Island Chains',
        description: 'A good place to make movies or write stories about. It is also a good place for contemplating on the creation.'
    },
    {
        photo: '/pic-lake.jpeg', 
        title: 'Beautiful Lake',
        description: 'This remote and lonely lake is located between moutains. So it is kind of hidden. Nice for camping and fishing.'
    },
    {
        photo: '/pic-roadByLake.jpg', 
        title: 'Road by the River',
        description: 'A small and beautiful road by a river. The river is surrounded by forests.'
    }
]

let currentPhoto = 0;

function loadPhoto(photoNumber) {
    $('#photo').attr('src', imagesData[photoNumber].photo);
    $('#photo-title').text(imagesData[photoNumber].title);
    $('#photo-description').text(imagesData[photoNumber].description)
    $('.clicked').toggleClass('clicked');//this will make the unhighlighted thumb border disappear
    $(`.thumb${photoNumber}`).toggleClass('clicked'); //this will make the css clicked border appear on the new thumb

};

  
loadPhoto(currentPhoto);
//here we handle the arrow clicking
$('#right-arrow').click(() => {

    if (currentPhoto < 9) {
        currentPhoto++;
    } else {
        currentPhoto = 0;
    }
    loadPhoto(currentPhoto);
})

$('#left-arrow').click(() => {
    if (currentPhoto > 0) {
        currentPhoto--
    } else {
        currentPhoto = 9;
    }
    loadPhoto(currentPhoto);
})

//here we make a thumb for each photo
imagesData.forEach((item, index) => {
  $('#thumbnails-container').append
  (`<div class="thumbnail thumb${index}" data-index="${index}" style="background: url('${item.photo}') 
  no-repeat center center; background-size: cover;"> </div>`);
});

//here the thumbnail connection the the images and clicking is handled
$('.thumbnail').click((event) => {
    clicked = $(event.target).attr('data-index');
    loadPhoto(clicked);
    $(event.target).addClass('clicked');
    $(event.target).siblings().removeClass('clicked');
    currentPhoto = $(event.target).attr('data-index');

});



