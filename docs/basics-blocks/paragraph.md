# Paragraph

There is a single paragraph block which can be customized. However, keep in mind that many other blocks rely on paragraph to show text.

The element receives `text` and `key` as parameter and should return node type value.
:::tip Remember
Node Type Value is anything that can be rendered: numbers, strings, elements or an array.
:::

## Pre-Defined Syntax

```jsx
	blocks: {
		paragraph: (text, key) => <h1 key={key}>{text}</h1>,
	}
```
