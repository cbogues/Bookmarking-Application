(function() {

	const body = document.body;
	const input = document.querySelector('input[type=next]');
	const overlay = document.querySelector('.overlay');

	function showFloater() {
		body.classList.add('show-floater');
	}


	function closeFloater() {
		if (body.classList.contains('show-floater')) {
		body.classList.remove('show-floater');
		}
	}

 	input.addEventListener('focus', showFloater);
 	console.log(input);
    input.addEventListener('blur', closeFloater);
    console.log(input);
    overlay.addEventListener('click', closeFloater);


		// ======= for Showing bookmarks

	const bookmarksList = document.querySelector('.bookmarks-list');
	const bookmarkForm = document.querySelector('.bookmark-form');
	const bookmarkInput = bookmarkForm.querySelector('input[type=text]');

	function createBookmark(e) {
	e.preventDefault();

	console.log('processing the form');
	}



	bookmarkForm.addEventListener('submit', createBookmark);


})();