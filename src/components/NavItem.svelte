<script>
	export let text = ""
	import Icon from "@iconify/svelte"
</script>

<div class="flex items-center text-bg-main font-medium text-sm">
	<span>
		{text}
	</span>
	<Icon icon="ic:outline-arrow-drop-down" />
</div>
