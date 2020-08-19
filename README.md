# react-scroll-on-edges

> Scroll the container when the mouse is on the edges

[![NPM](https://img.shields.io/npm/v/react-scroll-on-edges.svg)](https://www.npmjs.com/package/react-scroll-on-edges) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-scroll-on-edges
```

## Usage

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

## License

MIT © [07harish](https://github.com/07harish)
