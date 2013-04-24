/**
 * Go through all the H1 tags. Find the ones that have id attributes and inject into the main navigation.
 * @todo: automatically link H2, H3, and H4 headings as sub-menu items to their parent H1.
 */
(function (window, undefined) {
	'use strict';

	var headings = document.querySelectorAll('h1[id]');
	var menu = document.querySelector('#nav ul');

	for (var i = 0, len = headings.length; i < len; i++) {
		var id = headings[i].getAttribute("id"),
				title = headings[i].getAttribute("title") || headings[i].innerHTML,
				li = document.createElement("li"),
				a = document.createElement("a");

		a.setAttribute( "href", "#" + id );
		a.appendChild(a.appendChild(document.createTextNode(title)));
		li.appendChild(a);
		menu.appendChild( li );
	}

})(this);