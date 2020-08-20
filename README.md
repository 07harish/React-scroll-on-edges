# react-scroll-on-edges

### Ability to Scroll when the mouse is near the edges


  useScrollOnEdges is a react hook which uses `scrollTo` for scrolling X and Y. `requestAnimationFrame` to animate the scrolling.

 Returns back the prop getter, which can be spread on a Html element for which we want the scrolling animation to happen.
***
[![NPM](https://img.shields.io/npm/v/react-scroll-on-edges.svg)](https://www.npmjs.com/package/react-scroll-on-edges) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-scroll-on-edges
```

## Usage (Basic)

```jsx
import React from 'react'

import useScrollOnEdges from 'react-scroll-on-edges'

class Example extends Component {

  const getEdgeScrollingProps = useScrollOnEdges()

  render() {
    // Container div
    return <div {...getEdgeScrollingProps()} >
              Content...
          </div>
  }
}
```

## Props and usage with props
 `useScrollOnEdges` hook takes an object with three props

 ```jsx
{
  canAnimate: boolean | true (default),
  scrollSpeed: number | 12 (default),
  edgeSize: number | 30 (default)
}
```

  - `canAnimate` - boolean - Tell the hook - Whether to scroll or not thorugh programmatically (default is `true`)
  - `scrollSpeed` - number - speed of the scroll (default is `12`)
  - `edgeSize` - number - Tell the hook - the distance from edges when mouse has to start scrolling (default is `30`)




Usage:
```jsx
const edgeScroll = useScrollOnEdges({
    canAnimate: true,
    scrollSpeed: 15,
    edgeSize: 35
 })

 // JSX
 // edgeScroll is a prop getter, more info below
  return (
    <div {...edgeScroll()} >
      content...
    </div>
  )
```
More info on [prop getters](https://kentcdodds.com/blog/how-to-give-rendering-control-to-users-with-prop-getters)

## Demo
[Basic demo](https://codesandbox.io/s/react-scroll-on-edges-phhfb?file=/src/App.js) - Move the mouse near edges to scroll the container

[Using with React-table](https://codesandbox.io/s/react-scroll-on-edges-79f8o?fontsize=14&hidenavigation=1&theme=dark) - Start selecting the cells and move near edges to scroll the container and select more cells

## License

MIT © [07harish](https://github.com/07harish)
