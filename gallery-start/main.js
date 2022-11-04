const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ['images/pic1.jpg', 'images/pic2.jpg', 'images/pic3.jpg', 'images/pic4.jpg',
 'images/pic5.jpg'];

/* Declaring the alternative text for each image file */
const altText = {'images/pic1.jpg' : 'eye', 'images/pic2.jpg' : 'wavy thing', 'images/pic3.jpg' : 'flowers',
'images/pic4.jpg' : 'egyptian shit', 'images/pic5.jpg' : 'butterfly'};

/* Looping through images */
for (const image of images) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', image);
    newImage.setAttribute('alt', altText[image]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', () => {
        displayedImage.setAttribute('src', image);
        displayedImage.setAttribute('alt', altText[image]);
    });
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
    if (btn.getAttribute() === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        btn.style.backgroundColor = "rgba(0,0,0,0.5)";
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        btn.style.backgroundColor = "rgba(0,0,0,0)";
    }
})
