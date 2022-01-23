<script>
	import Tree from './components/Tree.svelte';

	const items = [
		{
			name: 1,
			items: [
				{ name: 11, },
				{ name: 12, },
				{ name: 13, },
				{ name: 14, },
				{ name: 15, },
			]
		},
		{
			name: 2,
		},
		{
			name: 3,
		},
		{
			name: 4,
		},
		{
			name: 5,
		}
	]
</script>

<Tree {items} />