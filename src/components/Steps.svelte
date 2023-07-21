<script>

	import Button from "./Button.svelte"
    import stepsData from "../data/stepsData"


</script>
<section class="w-full pt-48 pb-16 bg-gradient-to-b from-blue-sec to-white  space-y-28">
    <h2 class="text-5xl text-bg-main text-center font-medium">Just four simple Steps to Download your resume</h2>
    <div class="w-full flex items-center justify-around mx-auto">
        {#each stepsData as { img, text }, i}
            <div class="w-1/5 min-h-[450px] flex flex-col items-center justify-between">
                <img
                    src={img}
                    alt="alt"
                    class="aspect-auto w-48"
                />
                <div class="bg-blue-sec w-fit px-4 py-2 rounded-full text-white">{i + 1}</div>
                <p class="text-bg-main">{text}</p>
            </div>
        {/each}
    </div>
<Button text='Create Your Perfect Resume' extendStyle='mx-auto w-1/4'/>
</section>