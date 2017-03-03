(function() {

	const body = document.body;
	const input = document.querySelector('input[type=text]');
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
 	// console.log(input);
    input.addEventListener('blur', closeFloater);
    // console.log(input);
    overlay.addEventListener('click', closeFloater);


		// ======= for Showing bookmarks

	const bookmarksList = document.querySelector('.bookmarks-list');
	const bookmarkForm = document.querySelector('.bookmark-form');
	const bookmarkInput = bookmarkForm.querySelector('input[type=text]');

	function createBookmark(e) {
	e.preventDefault();

	// grab info out of the input and create element of the bookmark
	const title  = bookmarkInput.value;
	const bookmark = document.createElement('a');
	bookmark.className = 'bookmark';
	bookmark.innerText = title;
	bookmark.href = '#';
	bookmark.target = '_blank';
	bookmarksList.appendChild(bookmark);

	// clear bookmark form
	
	bookmarkForm.reset();

	}



	bookmarkForm.addEventListener('submit', createBookmark);














})();