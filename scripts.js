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
        description: 'Why is this a very good image'
    },
    {
        photo: '/pic-beachCity.jpg', 
        title: 'Port City',
        description: 'Why is this a very good image'
    },
    {
        photo: '/pic-beachPath.jpg', 
        title: 'Path to the Beach',
        description: 'Why is this a very good image'
    },
    {
        photo: '/pic-beachWaves.jpg', 
        title: 'My title',
        description: 'Why is this a very good image'
    },
    {
        photo: '/pic-butterflies.jpeg', 
        title: 'My title',
        description: 'Why is this a very good image'
    },
    {
        photo: '/pic-fantasyWinter.jpg', 
        title: 'My title',
        description: 'Why is this a very good image'
    },
    {
        photo: '/pic-flowersPath.jpg', 
        title: 'My title',
        description: 'Why is this a very good image'
    },
    {
        photo: '/pic-islands.jpg', 
        title: 'My title',
        description: 'Why is this a very good image'
    },
    {
        photo: '/pic-lake.jpeg', 
        title: 'My title',
        description: 'Why is this a very good image'
    },
    {
        photo: '/pic-roadByLake.jpg', 
        title: 'My title',
        description: 'Why is this a very good image'
    }
]

let currentPhoto = 0;

function loadPhoto(photoNumber) {
    $('#photo').attr('src', imagesData[photoNumber].photo);
    $('#photo-title').append(imagesData[photoNumber].title);
    $('#photo-description').append(imagesData[photoNumber].description)
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
  (`<div class="thumbnail thumb${index}" data-index="${index}" style="background: url('${item.photo}') no-repeat center center; background-size: cover;"> </div>`);
});

//here the thumbnail connection the the images and clicking is handled
$('.thumbnail').click((event) => {
    clicked = $(event.target).attr('data-index');
    loadPhoto(clicked);
    $(event.target).addClass('clicked');
    $(event.target).siblings().removeClass('clicked');
    currentPhoto = $(event.target).attr('data-index');

});



