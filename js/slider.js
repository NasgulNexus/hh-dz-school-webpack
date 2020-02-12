let active = document.querySelector(".js-slide.slider__carousel__active");

document.querySelector('.js-slide-buttons').addEventListener('click', e => {
    const slideId = e.target.dataset.slideId;

    if (!slideId){
        return;
    }

    if (active.dataset.slideId === slideId){
        return;
    }

    const slide = document.querySelector(`.js-slide[data-slide-id="${slideId}"]`);

    slide.classList.add('slider__carousel__show');
    active.classList.add('slider__carousel__hide');
    active.classList.add('slider__carousel__active');

    const previous = active;
    active = slide;

    document.querySelector(`.js-slide-button[data-slide-id="${previous.dataset.slideId}"]`).classList.remove("slider__ellipse__active");
    document.querySelector(`.js-slide-button[data-slide-id="${slideId}"]`).classList.add("slider__ellipse__active");

    active.addEventListener('animationend', () =>{
        active.classList.add('slider__carousel__active');
        active.classList.remove('slider__carousel__show');
        previous.classList.remove('slider__carousel__hide');
        active.parentNode.insertBefore(active,previous);
    },
    {once:true}
    )
})