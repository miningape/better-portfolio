const pics = document.querySelectorAll('.pic');
const bars = document.querySelectorAll('.bar');

let anythingOpen = false;

function litPics() {
    pics.forEach((picture) => {
        if (picture.classList.contains('dim')) {
            picture.classList.remove('dim');
            picture.classList.add('lit');
        }
    });
}

pics.forEach((pic) => {
    pic.addEventListener('click', () => {
        if (anythingOpen) {
            document.querySelector('.wrapper').classList.add('transitioning');
            setTimeout(() => {
            document.querySelector('.wrapper').classList.remove('transitioning');
            
            bars.forEach((bar) => {
                bar.classList.remove('top');
                if (pic.classList[0] == bar.classList[0]) {
                    bar.classList.add('top');
                }
            }); }, 375);
        } else {
            bars.forEach((bar) => {
                bar.classList.remove('top');
                if (pic.classList[0] == bar.classList[0]) {
                    bar.classList.add('top');
                }
            });
        }

        if (pic.classList.contains('lit')) {
            // Make sure everything is lit so multiple arent
            litPics();

            // Make clicked one dim
            pic.classList.remove('lit');
            pic.classList.add('dim');

            anythingOpen = true;

            document.querySelector('.lower').classList.add('active');
            document.querySelector('.bars').classList.add('active');
        } else {
            litPics();

            anythingOpen = false;

            bars.forEach( bar => bar.classList.remove('top') );

            document.querySelector('.lower').classList.remove('active');
            document.querySelector('.bars').classList.remove('active');
        }
    });
});