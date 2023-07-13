# To-Do

To-do block is a combination of read-only `checkbox` accompanied by corresponding text wrapped in `paragraph`.

The checkbox should always be set to `readOnly`, making it toggle won't update the checbox state back in notion page.

The element receives `text`, `checked` and `key` as parameter and should return node type value.
:::tip Remember
Node Type Value is anything that can be rendered: numbers, strings, elements or an array.
:::

## Pre-Defined Syntax

```jsx
	blocks: {
		to_do: (text, checked, key) => (
			<span key={key}>
				<input checked={checked} readOnly type="checkbox" />
				<p>{text}</p>
			</span>
		),
	}
```