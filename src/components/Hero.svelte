<script>
	import Button from "./Button.svelte"
	import res1 from "../assets/res1.png"
</script>

<section class="w-full min-h-full flex items-center gap-16">
	<div class="mt-20 w-[40%] text-bg-main space-y-4">
		<h2 class="text-5xl leading-tight font-medium">
			Simplify Online Resume <br /> Builder <br /> Create a Professional <br />Resume for Free
		</h2>
		<h3 class="text-2xl font-medium">Free to use. Developed by hiring professionals.</h3>
		<p class="text-lg w-4/5">
			Resume writing can be stressful, confusing, and time-consuming if you do it all on your own. With simplify
			Resume Builder, it’s quick, pain-free, and effective.
		</p>
		<div class="pt-12">
			<Button extendStyle="w-4/5 " />
		</div>
	</div>
	<div class="w-2/5">
		<img
			src={res1}
			alt=""
		/>
	</div>
</section>
