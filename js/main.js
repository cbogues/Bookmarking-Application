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




		// ==============

	const bookmarksList = document.querySelector('.bookmarks-list');
	const bookmarkForm = document.querySelector('.bookmark-form');
	const bookmarkInput = bookmarkForm.querySelector('input[type=text]');
	const bookmarks = JSON.parse(localStorage.getItem('bookmaks')) || [];

	// console.table(bookmarks);

	fillBookmarksList(bookmarks);


	function createBookmark(e) {
	e.preventDefault();


	// add a new bookmark to the bookmarks
	const title  = bookmarkInput.value;
	const bookmark = {
		title: title
	};


	bookmarks.push(bookmark);
	fillBookmarksList(bookmarks);
	storeBookmarks(bookmarks);
	bookmarkForm.reset();


	console.table(bookmarks);

	// save that list to local storage

	// grab info out of the input and create element of the bookmark
	// const title  = bookmarkInput.value;
	// const bookmark = document.createElement('a');
	// bookmark.className = 'bookmark';
	// bookmark.innerText = title;
	// bookmark.href = '#';
	// bookmark.target = '_blank';
	// bookmarksList.appendChild(bookmark);

	// clear bookmark form
	

	}

	// take a parameter 'bookmarks' if there are no bookmarks
	// default to blank array. For each of these bookmarks add it to the list
	function fillBookmarksList(bookmark = []) {
		const bookmarksHtml = bookmarks.map((bookmark) => {
		return	` 
			<a href="#" class="bookmark">
			${bookmark.title}
			</a>
			`;
		}).join(' ');

	bookmarksList.innerHTML = bookmarksHtml;


// 
// for loop below vs map above
// 
	// 	let bookmarksHtml = '';
	// 	// way to loop over every bookmark
	// for (let i = 0; i < bookmarks.length; i++){
	// 	bookmarksHtml += ` 
	// 		<a href="#" class="bookmark">
	// 		${bookmarks[i].title}
	// 		</a>
	// 		`;
	// 	}
		// console.log(bookmarksHtml);
	}


	function storeBookmarks(bookmarks = []){
		localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
	}

	bookmarkForm.addEventListener('submit', createBookmark);














})();