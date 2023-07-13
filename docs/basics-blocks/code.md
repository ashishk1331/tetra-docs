# Code

The code is shown within a `code` block nested inside the `pre` block.

The element receives `text` and `key` as parameter and should return node type value.
:::tip Remember
Node Type Value is anything that can be rendered: numbers, strings, elements or an array.
:::

## Pre-Defined Syntax

```jsx
	blocks: {
		code: (text, key) => (
			<pre key={key}>
				<code>{text}</code>
			</pre>
		),
	}
```