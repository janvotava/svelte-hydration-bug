<script>
	export let items = [];
</script>

<ul>
	{#each items as item}
		<li>
			{item.name}

			{#if item.items}
				<svelte:self items={item.items} />
			{/if}
		</li>
	{/each}
</ul>