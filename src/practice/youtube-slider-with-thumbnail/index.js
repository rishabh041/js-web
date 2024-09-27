document.addEventListener('DOMContentLoaded', function() {

  const sliderContainer = document.querySelector('.slider');
  const seek = document.querySelector('.seek');
  const thumbnailContainer = document.getElementById('thumbnail');
  let currOffsetX = 0;

  seek.addEventListener('mousedown', () => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  });

  function handleMouseUp(e){
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  function handleMouseMove(e){
    // logic for getting offset
    // bounding client
    // handle edge case for overflow

    const rect = sliderContainer.getBoundingClientRect();
    let offsetX = e.clientX - rect.left;

    // handle edge case
    // overflow towards left
    offsetX = Math.max(0, offsetX);
    // overflow towards right
    offsetX = Math.min(offsetX, rect.width);

    // handle style
    seek.style.width = `${offsetX}px`;

    const limit = 1;
    const skip = Math.floor(offsetX/rect.width *100)

    // optimization logic
    // implemented throttling to call api after a particular slide
    if(Math.abs(offsetX - currOffsetX) > 50){
      currOffsetX = offsetX;
      fetchThumbnails(limit, skip)
    }
  };

  function fetchThumbnails(limit, skip){
    const url = `https://dummyjson.com/products?limit=${limit}&skip=${skip}&select=title,thumbnail`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        renderThumbnail(data.products[0]);
      });
  };


  function renderThumbnail(thumbnailData){
    thumbnailContainer.innerHTML = '';

    const thumbnailElement = document.createElement('img');
    thumbnailElement.src = thumbnailData.thumbnail;
    thumbnailElement.alt = thumbnailData.title;
    thumbnailElement.classList.add('thumbnailImg');

    thumbnailContainer.appendChild(thumbnailElement);
  }

});