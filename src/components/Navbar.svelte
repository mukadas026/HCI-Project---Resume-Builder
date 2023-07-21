<script>
	import logo from "../assets/logo.png"
	import NavItem from "./NavItem.svelte"
</script>

<nav class="w-full flex pt-16">
	<div class="w-48">
		<img
			src={logo}
			alt="logo"
		/>
	</div>
	<div class="w-2/5 ml-auto mr-8 flex items-center justify-around">
		<NavItem text="Tools" />
		<NavItem text="CV" />
		<NavItem text="About" />
		<NavItem text="Resume" />
		<NavItem text="Cover Letter" />
		<div class="bg-blue-ter/80 text-blue-pr px-4 py-2 rounded-full">My Account</div>
	</div>
</nav>
