# Images

By default tetrapack exports images as a `figure` tag wrapping the `image` tag along with a `figcaption` to caption the image.

The element receives `caption`, `url` and `key` as parameter and should return node type value.
:::tip Remember
Node Type Value is anything that can be rendered: numbers, strings, elements or an array.
:::

## Pre-Defined Syntax

```jsx
	blocks: {
		image: (caption, url, key) => (
				<figure key={key}>
					<img src={url} alt="image found" />
					<figcaption>{caption}</figcaption>
				</figure>
			),
	}
```
