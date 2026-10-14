# pulse-loader

A lightweight, zero-dependency animated loading bar built as a Web Component.
Works in any HTML page — no framework required.

## Demo
👉 [Live demo](https://your-username.github.io/pulse-loader/demo/)

## Install

**Via CDN (quickest)**
```html
<script src="https://cdn.jsdelivr.net/npm/pulse-loader/dist/pulse-loader.min.js"></script>
```

**Via npm**
```bash
npm install pulse-loader
```

## Usage

```html
<script src="pulse-loader.js"></script>

<pulse-loader style="height: 80px; width: 100%;" />
```

## Options

| Attribute    | Default     | Description                        |
|-------------|-------------|------------------------------------|
| `count`      | `60`        | Number of bars                     |
| `duration`   | `1.5`       | Animation cycle in seconds         |
| `gap`        | `3`         | Gap between bars in px             |
| `bar-width`  | `5`         | Width of each bar in px            |
| `bar-height` | `24`        | Peak height of each bar in px      |
| `color-top`  | `#1D9E75`   | Color of the top bar segment       |
| `color-bot`  | `#5DCAA5`   | Color of the bottom bar segment    |

## Examples

```html
<!-- default -->
<pulse-loader />

<!-- purple, slow, tall -->
<pulse-loader count="40" duration="2.5" bar-height="40" color-top="#7F77DD" color-bot="#AFA9EC" />

<!-- coral, fast, compact -->
<pulse-loader count="80" duration="1" bar-height="20" color-top="#D85A30" color-bot="#F0997B" />
```

## License
MIT