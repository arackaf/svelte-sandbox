<script>
	let x = 0;
	let y = 0;
	
	let xPlusY = 0;
	$: {
		xPlusY = x + y;
	}
</script>

<button on:click={() => x++}>
	Inc X
</button>

<button on:click={() => y++}>
	Inc Y
</button>

<div>
	x = {x}
	<br />
	y = {y}
	<br />
	xPlusY = {xPlusY}	
	
</div>