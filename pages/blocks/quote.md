# Quotes

All the qoutes are rendered as simple `paragraph` tag nested inside in a `blockquote`.

The element receives `text` and `key` as parameter and should return node type value.
:::tip Remember
Node Type Value is anything that can be rendered: numbers, strings, elements or an array.
:::

## Pre-Defined Syntax

```jsx
	blocks: {
		quote: (text, key) => (
				<blockquote key={key}>
					<p>{text}</p>
				</blockquote>
			),
	}
```
