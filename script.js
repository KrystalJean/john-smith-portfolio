
// Active states for Buttons and Links
const siteNavLinks = document.querySelectorAll('#site-nav-links li');
const sortBtns = document.querySelectorAll('#works-menu .sort button');
const formatBtns = document.querySelectorAll('#works-menu .format button');

siteNavLinks.forEach(link => {
  link.addEventListener('click', () => {
    siteNavLinks.forEach(link => {
      link.classList.remove('active');
    })
    link.classList.add('active');
  })
})

sortBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    sortBtns.forEach(btn => {
      btn.classList.remove('active');
    })
    btn.classList.add('active');
  })
})

formatBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    formatBtns.forEach(btn => {
      btn.classList.remove('active');
    })
    btn.classList.add('active');
  })
})

// Changing Work List Format (Column vs Row)
const formatColBtn = document.getElementById('format-col-btn');
const formatRowBtn = document.getElementById('format-row-btn');
const worksList = document.getElementById('works-list');
const works = document.querySelectorAll('#works-list .work');
const worksText = document.querySelectorAll('#works-list .work .text-content');
const worksDesc = document.querySelectorAll('.work-description');
const worksImgWrapper = document.querySelectorAll('#works-list .work .image-wrapper');

formatColBtn.addEventListener('click', () => {

  if (formatColBtn.classList.contains('active')) {
    worksList.classList.remove('list-format-row');
    worksList.classList.add('list-format-col');
    worksImgWrapper.forEach(wrapper => {
      // wrapper.style.height = 'auto';
      wrapper.style.aspectRatio = 'auto';
    })
    worksDesc.forEach(desc => {
      desc.classList.add('hidden');
    })
    works.forEach(work => {
      work.classList.remove('list-format-row');
    })
    worksText.forEach(text => {
      text.classList.remove('list-format-row');
    })
  }

})

formatRowBtn.addEventListener('click', () => {

  if (formatRowBtn.classList.contains('active')) {
    worksList.classList.remove('list-format-col');
    worksList.classList.add('list-format-row');
    worksImgWrapper.forEach(wrapper => {
      // wrapper.style.height = '27rem';
      wrapper.style.aspectRatio = '2/1.5'
    })
    worksDesc.forEach(desc => {
      desc.classList.remove('hidden');
    })
    works.forEach(work => {
      // work.classList.remove('list-format-col');
      work.classList.add('list-format-row');
    })
    worksText.forEach(text => {
      // text.classList.remove('list-format-col');
      text.classList.add('list-format-row');
    })
  }

})

// Generate List of Works 
worksList.innerHTML = `

<li class="work">
<div class="image-wrapper">
  <img src="./images/work1.png" alt="">
</div>
<div class="text-content">
  <h2 class="work-title">UIDeli.com</h2>
  <h4>Design + Development <span class="year">2023</span></h4>
  <p class="work-description hidden">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et.</p>
</div>
</li>

`