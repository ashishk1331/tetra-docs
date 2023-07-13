# Headings

Customize headings to your liking and will. Out of the box, there are three types of heading levels supported, namely `heading_1`, `heading_2` and `heading_3`.

The element receives `text` and `key` as parameter and should return node type value.
:::tip Remember
Node Type Value is anything that can be rendered: numbers, strings, elements or an array.
:::

## Pre-Defined Syntax

```jsx
	blocks: {
		heading_1: (text, key) => <h1 key={key}>{text}</h1>,
		heading_2: (text, key) => <h2 key={key}>{text}</h2>,
		heading_3: (text, key) => <h3 key={key}>{text}</h3>,
	}
```
