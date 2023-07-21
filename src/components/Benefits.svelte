<script>
	import benefitsData from "../data/benefitsData"
</script>

<section class="my-32">
	<h2 class="text-5xl text-bg-main text-center font-medium">Here’s what our resume maker has to offer :</h2>
<div class="my-32">

    {#each benefitsData as { img, heading, text }, i}
    <div class={`w-full flex my-16 mx-auto items-center justify-center ${i % 2 === 0 && 'flex-row-reverse'}`}>
        <div class="w-2/5 ">
            <img
            src={img}
					alt=""
                    class=""
				/>
			</div>
			<div class="text-bg-main w-2/5">
				<h3 class="text-3xl font-medium">{heading}</h3>
				<p class="">{text}</p>
			</div>
		</div>
        {/each}
    </div>
</section>
