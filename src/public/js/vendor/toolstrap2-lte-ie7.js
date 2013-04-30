/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'Groupon\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-your-deals' : '&#xe000;',
			'icon-yin-yang' : '&#xe001;',
			'icon-x' : '&#xe002;',
			'icon-wrench' : '&#xe003;',
			'icon-weights' : '&#xe004;',
			'icon-wand' : '&#xe005;',
			'icon-vip' : '&#xe006;',
			'icon-user' : '&#xe007;',
			'icon-truck' : '&#xe008;',
			'icon-trash' : '&#xe009;',
			'icon-tophat' : '&#xe00a;',
			'icon-tickets' : '&#xe00b;',
			'icon-thumbs-up' : '&#xe00c;',
			'icon-thief' : '&#xe00d;',
			'icon-text-tool' : '&#xe00e;',
			'icon-target' : '&#xe00f;',
			'icon-tag' : '&#xe010;',
			'icon-star-filled' : '&#xe011;',
			'icon-smiley' : '&#xe012;',
			'icon-skull' : '&#xe013;',
			'icon-shopping' : '&#xe014;',
			'icon-share' : '&#xe015;',
			'icon-services' : '&#xe016;',
			'icon-sad' : '&#xe017;',
			'icon-rewards' : '&#xe018;',
			'icon-question' : '&#xe019;',
			'icon-plus' : '&#xe01a;',
			'icon-phone' : '&#xe01b;',
			'icon-phone-nocall' : '&#xe01c;',
			'icon-pencil' : '&#xe01d;',
			'icon-paw' : '&#xe01e;',
			'icon-parallel' : '&#xe01f;',
			'icon-out' : '&#xe020;',
			'icon-now' : '&#xe021;',
			'icon-neutral' : '&#xe022;',
			'icon-mug' : '&#xe023;',
			'icon-moneybag' : '&#xe024;',
			'icon-minus' : '&#xe025;',
			'icon-menu' : '&#xe026;',
			'icon-marker' : '&#xe027;',
			'icon-magnifying-glass' : '&#xe028;',
			'icon-logo-g' : '&#xe029;',
			'icon-lock' : '&#xe02a;',
			'icon-lock-open' : '&#xe02b;',
			'icon-loading' : '&#xe02c;',
			'icon-list' : '&#xe02d;',
			'icon-link' : '&#xe02e;',
			'icon-leaf' : '&#xe02f;',
			'icon-layout' : '&#xe030;',
			'icon-info' : '&#xe031;',
			'icon-image' : '&#xe032;',
			'icon-home' : '&#xe034;',
			'icon-groupon-cat' : '&#xe036;',
			'icon-group' : '&#xe037;',
			'icon-graduate-cap' : '&#xe038;',
			'icon-goods' : '&#xe039;',
			'icon-glove' : '&#xe03a;',
			'icon-gift' : '&#xe03b;',
			'icon-getaways' : '&#xe03c;',
			'icon-gear' : '&#xe03d;',
			'icon-gavel' : '&#xe03e;',
			'icon-g2' : '&#xe03f;',
			'icon-food-and-drink' : '&#xe040;',
			'icon-flag' : '&#xe041;',
			'icon-filter' : '&#xe042;',
			'icon-dollar' : '&#xe045;',
			'icon-dice' : '&#xe046;',
			'icon-daily-deals' : '&#xe047;',
			'icon-cut' : '&#xe048;',
			'icon-credit-card' : '&#xe049;',
			'icon-courthouse' : '&#xe04a;',
			'icon-corner' : '&#xe04b;',
			'icon-cocktail' : '&#xe04c;',
			'icon-cloud' : '&#xe04d;',
			'icon-close' : '&#xe04e;',
			'icon-circle' : '&#xe04f;',
			'icon-check' : '&#xe050;',
			'icon-check-circle' : '&#xe051;',
			'icon-car' : '&#xe052;',
			'icon-bucks' : '&#xe053;',
			'icon-bubble-open' : '&#xe054;',
			'icon-bubble-closed' : '&#xe055;',
			'icon-box' : '&#xe056;',
			'icon-book-ring' : '&#xe057;',
			'icon-beauty-wellness-healthcare' : '&#xe058;',
			'icon-bars' : '&#xe059;',
			'icon-barcode' : '&#xe05a;',
			'icon-asterisk' : '&#xe05b;',
			'icon-arrow-up' : '&#xe05c;',
			'icon-arrow-right' : '&#xe05d;',
			'icon-arrow-pointer-up' : '&#xe05e;',
			'icon-arrow-replay' : '&#xe05f;',
			'icon-arrow-nav-right' : '&#xe060;',
			'icon-arrow-nav-left' : '&#xe061;',
			'icon-arrow-left' : '&#xe062;',
			'icon-arrow-down' : '&#xe063;',
			'icon-arrow-curved' : '&#xe064;',
			'icon-alert' : '&#xe065;',
			'icon-nuke' : '&#xe066;',
			'icon-puzzle' : '&#xe067;',
			'icon-hourglass' : '&#xe033;',
			'icon-tree' : '&#xe068;',
			'icon-document-search' : '&#xe06f;',
			'icon-calendar' : '&#xe043;',
			'icon-twitter' : '&#xe044;',
			'icon-pinterest' : '&#xe069;',
			'icon-linkedin' : '&#xe06a;',
			'icon-google-plus' : '&#xe06b;',
			'icon-feed' : '&#xe06c;',
			'icon-facebook' : '&#xe06e;',
			'icon-email' : '&#xe070;',
			'icon-circle-alert' : '&#xe071;',
			'icon-heart-filled' : '&#xe035;',
			'icon-mobile' : '&#xe072;',
			'icon-groupon' : '&#xe073;',
			'icon-quote' : '&#xe06d;',
			'icon-arrow-up-large' : '&#xe074;',
			'icon-arrow-right-large' : '&#xe075;',
			'icon-arrow-left-large' : '&#xe076;',
			'icon-arrow-down-large' : '&#xe077;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};

/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'Groupon\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-your-deals' : '&#xe000;',
			'icon-yin-yang' : '&#xe001;',
			'icon-x' : '&#xe002;',
			'icon-wrench' : '&#xe003;',
			'icon-weights' : '&#xe004;',
			'icon-wand' : '&#xe005;',
			'icon-vip' : '&#xe006;',
			'icon-user' : '&#xe007;',
			'icon-truck' : '&#xe008;',
			'icon-trash' : '&#xe009;',
			'icon-tophat' : '&#xe00a;',
			'icon-tickets' : '&#xe00b;',
			'icon-thumbs-up' : '&#xe00c;',
			'icon-thief' : '&#xe00d;',
			'icon-text-tool' : '&#xe00e;',
			'icon-target' : '&#xe00f;',
			'icon-tag' : '&#xe010;',
			'icon-star-filled' : '&#xe011;',
			'icon-smiley' : '&#xe012;',
			'icon-skull' : '&#xe013;',
			'icon-shopping' : '&#xe014;',
			'icon-share' : '&#xe015;',
			'icon-services' : '&#xe016;',
			'icon-sad' : '&#xe017;',
			'icon-rewards' : '&#xe018;',
			'icon-question' : '&#xe019;',
			'icon-plus' : '&#xe01a;',
			'icon-phone' : '&#xe01b;',
			'icon-phone-nocall' : '&#xe01c;',
			'icon-pencil' : '&#xe01d;',
			'icon-paw' : '&#xe01e;',
			'icon-parallel' : '&#xe01f;',
			'icon-out' : '&#xe020;',
			'icon-now' : '&#xe021;',
			'icon-neutral' : '&#xe022;',
			'icon-mug' : '&#xe023;',
			'icon-moneybag' : '&#xe024;',
			'icon-minus' : '&#xe025;',
			'icon-menu' : '&#xe026;',
			'icon-marker' : '&#xe027;',
			'icon-magnifying-glass' : '&#xe028;',
			'icon-logo-g' : '&#xe029;',
			'icon-lock' : '&#xe02a;',
			'icon-lock-open' : '&#xe02b;',
			'icon-loading' : '&#xe02c;',
			'icon-list' : '&#xe02d;',
			'icon-link' : '&#xe02e;',
			'icon-leaf' : '&#xe02f;',
			'icon-layout' : '&#xe030;',
			'icon-info' : '&#xe031;',
			'icon-image' : '&#xe032;',
			'icon-home' : '&#xe034;',
			'icon-groupon-cat' : '&#xe036;',
			'icon-group' : '&#xe037;',
			'icon-graduate-cap' : '&#xe038;',
			'icon-goods' : '&#xe039;',
			'icon-glove' : '&#xe03a;',
			'icon-gift' : '&#xe03b;',
			'icon-getaways' : '&#xe03c;',
			'icon-gear' : '&#xe03d;',
			'icon-gavel' : '&#xe03e;',
			'icon-g2' : '&#xe03f;',
			'icon-food-and-drink' : '&#xe040;',
			'icon-flag' : '&#xe041;',
			'icon-filter' : '&#xe042;',
			'icon-dollar' : '&#xe045;',
			'icon-dice' : '&#xe046;',
			'icon-daily-deals' : '&#xe047;',
			'icon-cut' : '&#xe048;',
			'icon-credit-card' : '&#xe049;',
			'icon-courthouse' : '&#xe04a;',
			'icon-corner' : '&#xe04b;',
			'icon-cocktail' : '&#xe04c;',
			'icon-cloud' : '&#xe04d;',
			'icon-close' : '&#xe04e;',
			'icon-circle' : '&#xe04f;',
			'icon-check' : '&#xe050;',
			'icon-check-circle' : '&#xe051;',
			'icon-car' : '&#xe052;',
			'icon-bucks' : '&#xe053;',
			'icon-bubble-open' : '&#xe054;',
			'icon-bubble-closed' : '&#xe055;',
			'icon-box' : '&#xe056;',
			'icon-book-ring' : '&#xe057;',
			'icon-beauty-wellness-healthcare' : '&#xe058;',
			'icon-bars' : '&#xe059;',
			'icon-barcode' : '&#xe05a;',
			'icon-asterisk' : '&#xe05b;',
			'icon-arrow-up' : '&#xe05c;',
			'icon-arrow-right' : '&#xe05d;',
			'icon-arrow-pointer-up' : '&#xe05e;',
			'icon-arrow-replay' : '&#xe05f;',
			'icon-arrow-nav-right' : '&#xe060;',
			'icon-arrow-nav-left' : '&#xe061;',
			'icon-arrow-left' : '&#xe062;',
			'icon-arrow-down' : '&#xe063;',
			'icon-arrow-curved' : '&#xe064;',
			'icon-alert' : '&#xe065;',
			'icon-nuke' : '&#xe066;',
			'icon-puzzle' : '&#xe067;',
			'icon-hourglass' : '&#xe033;',
			'icon-tree' : '&#xe068;',
			'icon-document-search' : '&#xe06f;',
			'icon-calendar' : '&#xe043;',
			'icon-twitter' : '&#xe044;',
			'icon-pinterest' : '&#xe069;',
			'icon-linkedin' : '&#xe06a;',
			'icon-google-plus' : '&#xe06b;',
			'icon-feed' : '&#xe06c;',
			'icon-facebook' : '&#xe06e;',
			'icon-email' : '&#xe070;',
			'icon-circle-alert' : '&#xe071;',
			'icon-heart-filled' : '&#xe035;',
			'icon-mobile' : '&#xe072;',
			'icon-groupon' : '&#xe073;',
			'icon-quote' : '&#xe06d;',
			'icon-arrow-up-large' : '&#xe074;',
			'icon-arrow-right-large' : '&#xe075;',
			'icon-arrow-left-large' : '&#xe076;',
			'icon-arrow-down-large' : '&#xe077;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};

