<script>
	export let text = "CREATE YOUR RESUME NOW"
	export let extendStyle = ""

    const goToApp = () => {
        window.location.href = 'https://resbuilda.netlify.app/'
    }
</script>

<button class={`${extendStyle} h-12 block px-8 py-2 bg-red-pr rounded-full text-white font-semibold`} on:click={goToApp}>
	{text}
</button>
