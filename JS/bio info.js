var toggle= document.querySelector('.toggle');
var toggleon= document.querySelector('.toggleon');
var navmain= document.querySelector('.navmain');

toggle.addEventListener('click', function(){

navmain.classList.toggle('d-none');
toggle.classList.add('d-none');
toggleon.classList.toggle('d-none');
	
})

toggleon.addEventListener('click', function(){

	navmain.classList.toggle('d-none');
	toggleon.classList.toggle('d-none');
	toggle.classList.toggle('d-none');
})

