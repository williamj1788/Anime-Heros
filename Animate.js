$(document).ready( () => {
	$('#Saitama').on('mouseenter', () => {
		$('#cool').css('backgroundImage', "url('./images/Saitama.gif')");
		
	}).on('mouseleave', () => {
		$('#cool').css('backgroundImage', "url('./images/back.jpg')");
	});
	
	$('#AllMight').on('mouseenter', () => {
		$('#cool').css('backgroundImage', "url('./images/AllMight.gif')");
		
	}).on('mouseleave', () => {
		$('#cool').css('backgroundImage', "url('./images/back.jpg')");
	});
	
	$('#Naruto').on('mouseenter', () => {
		$('#cool').css('backgroundImage', "url('./images/Nat.gif')");
		
	}).on('mouseleave', () => {
		$('#cool').css('backgroundImage', "url('./images/back.jpg')");
	});
	
	$('#Guku').on('mouseenter', () => {
		$('#cool').css('backgroundImage', "url('./images/Gat.gif')");
		
	}).on('mouseleave', () => {
		$('#cool').css('backgroundImage', "url('./images/back.jpg')");
	});
});