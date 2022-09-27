import { h, Component }					from 'preact/preact';
import UIImage								from 'com/img2/img2';

import SVGIcon 			from 'com/svg-icon/icon';
import NavLink 			from 'com/nav-link/link';

export default class ViewSidebar extends Component {
	constructor( props ) {
		super(props);
	}

	render( {}, {} ) {
		/* If event is active, and it's sponsored */
		if ( true ) {
			return (
				<div class="sidebar-base sidebar-shortlist sidebar-sponsor">
					<div class="-title _font2"><SVGIcon baseline>trophy</SVGIcon> <span class="-text">Sponsors</span></div>
					<div><a href="/events/ludum-dare/50/test-node/results-for-ludum-dare-50"><UIImage src="///content/b/z/4ee45.w200.png" /></a></div>
				</div>
			);
		}

/*
					<div><IMG2 src="///other/event/sample/sponsor/product.png" /></div>
					<div><IMG2 src="///other/event/sample/sponsor/company.png" /></div>
					<div class="-silver">
						<div><IMG2 src="///other/event/sample/sponsor/tagline.png" /></div>
						<div><IMG2 src="///other/event/sample/sponsor/example.png" /></div>
					</div>
*/
		return null;
	}
};

/*
<div><a href="/events/ludum-dare/49/$258334/ann-intel-sponsors-ludum-dare-49"><UIImage src="///content/b/z/42d0f.png.w200.png" /></a></div>
<div><a href="/events/ludum-dare/49/$258334/ann-gamemaker-studio-2-sponsors-ludum-dare-49"><UIImage src="///content/b/z/42d42.png.w200.png" /></a></div>
<div><a href="/events/ludum-dare/49/$258334/ann-core-sponsors-ludum-dare-49"><UIImage src="///content/b/z/42ebe.png.w200.png" /></a></div>
*/
