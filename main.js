function removeDistractions() {
	const feed = document.querySelector('[role=feed]');
	const stories = document.querySelector('[data-pagelet=Stories]');
	const rooms = document.querySelector('[data-pagelet=VideoChatHomeUnit]');
	const watch = document.querySelector('[aria-label=Watch]');
	const rightPanel = document.querySelector('[data-pagelet=RightRail]');

	if (feed == null) {
		return;
	}

	const msg = document.createElement('h1');
	msg.innerText = 'News Feed has been REMOVED';
	msg.style.color = 'white';

	feed.style.visibility = 'hidden';
	stories.style.display = 'none';
	rooms.style.display = 'none';
	watch.parentElement.parentElement.parentElement.style.display = 'none';
	rightPanel.style.display = 'none';

	setTimeout(() => {
		feed.parentElement.insertBefore(msg, feed);
	}, 1000);

	console.log('FEED REMOVED');
}

setInterval(removeDistractions(), 1000);
