<script>
	import Button from "./Button.svelte"

	import fb from "../assets/fb.svg"
	import twitter from "../assets/twitter.svg"
	import linkedin from "../assets/linkedin.svg"

	import c from "../assets/c.png"
</script>

<section class="bg-blue-ter flex items-center justify-center min-h-[200px]">
	<div class="text-white space-y-4">
		<p>Try our resume builder for free without having to pay a dime</p>
		<Button
			text="Land Your Dream Job Now"
			extendStyle="bg-white text-blue-ter mx-auto"
		/>
	</div>
</section>
<footer class="w-full min-h-[100px] flex items-center justify-between px-16">
	<div class="flex items-center gap-x-4">
		<img
			src={c}
			alt="c"
            class="w-6"
		/>
		<p>2022 kJD Limited . all copyrights reserved</p>
	</div>
	<div class="flex items-center gap-x-16">
		<img
			src={fb}
			alt="facebook"
			class=""
		/>
		<img
			src={twitter}
			alt="twitter"
			class=""
		/>
		<img
			src={linkedin}
			alt="linkedin"
			class=""
		/>
	</div>
</footer>
