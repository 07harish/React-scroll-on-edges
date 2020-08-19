import React from 'react'

const useScrollOnEdges = (props = undefined) => {
  const { canAnimate = true, edgeSize = 25, scrollSpeed = 12 } = props || {}
  const timer = React.useRef()

  function handleMousemove (event) {
    if (!canAnimate) {
      return
    }

    // rect: element where the props is spread, upon which the scrolling animation takes place
    let rect = event.currentTarget.getBoundingClientRect()
    let el = event.currentTarget

    // Get the viewport-relative coordinates of the mousemove event.
    let viewportX = event.clientX - rect.left
    let viewportY = event.clientY - rect.top

    // Get the rect height and width .
    let viewportWidth = rect.width
    let viewportHeight = rect.height

    // Get rect edges, where top and left will be same as `edgeSize`, /
    // bottom and right will be (rectDimensions - edgeSize)
    let edgeTop = edgeSize
    let edgeLeft = edgeSize
    let edgeBottom = viewportHeight - edgeSize
    let edgeRight = viewportWidth - edgeSize

    // Check if mouse is on any of the rect's edges
    let isInLeftEdge = viewportX < edgeLeft
    let isInRightEdge = viewportX > edgeRight
    let isInTopEdge = viewportY < edgeTop
    let isInBottomEdge = viewportY > edgeBottom

    // If the mouse is not in the rect edge, stop animation. Otherwise start animation
    if (!(isInLeftEdge || isInRightEdge || isInTopEdge || isInBottomEdge)) {
      stopAnimmation()
    } else {
      startAnimation()
    }

    // Animate scrolling when shouldScroll returns true
    function animateScrolling (time) {
      if (shouldScroll()) {
        timer.current = undefined
        startAnimation()
      } else {
        stopAnimmation()
      }
    }

    // Sets Animation ID (timer.curent) and Initiate scrolling
    function startAnimation () {
      if (!timer.current) {
        timer.current = window.requestAnimationFrame(animateScrolling)
      }
    }

    // cancels scrolling of Animation ID
    function stopAnimmation () {
      if (timer.current) {
        window.cancelAnimationFrame(timer.current)
        timer.current = undefined
      }
    }

    // Measure maximum scrolling
    let maxScrollX = el.scrollWidth - el.clientWidth
    let maxScrollY = el.scrollHeight - el.clientHeight

    // Adjust the rect scroll based on the user's mouse position. Returns True
    // or False depending on whether or not the window scroll was changed.
    function shouldScroll () {
      // Get the current scroll position of the rect.
      let currentScrollX = el.scrollLeft
      let currentScrollY = el.scrollTop

      let canScrollUp = currentScrollY > 0
      let canScrollDown = currentScrollY < maxScrollY
      let canScrollLeft = currentScrollX > 0
      let canScrollRight = currentScrollX < maxScrollX

      let nextScrollX = currentScrollX
      let nextScrollY = currentScrollY

      // Determine next X or Y scroll depending on the edges mouse is on.
      // By adding scroll speed to next scroll gives use new scrollTo of x, y

      // Should we scroll left?
      if (isInLeftEdge && canScrollLeft) {
        nextScrollX = nextScrollX - scrollSpeed

        // Should we scroll right?
      } else if (isInRightEdge && canScrollRight) {
        nextScrollX = nextScrollX + scrollSpeed
      }

      // Should we scroll up?
      if (isInTopEdge && canScrollUp) {
        nextScrollY = nextScrollY - scrollSpeed

        // Should we scroll down?
      } else if (isInBottomEdge && canScrollDown) {
        nextScrollY = nextScrollY + scrollSpeed
      }

      // Sanitize invalid maximums.
      nextScrollX = Math.max(0, Math.min(maxScrollX, nextScrollX))
      nextScrollY = Math.max(0, Math.min(maxScrollY, nextScrollY))

      if (nextScrollX !== currentScrollX || nextScrollY !== currentScrollY) {
        el.scrollTo(nextScrollX, nextScrollY)
        nextScrollY = 0
        return true
      } else {
        return false
      }
    }
  }

  // Prop getter
  function getEdgeScrollingProps (elementProps) {
    const callAllFns = (...fns) => (...args) =>
      fns.forEach((fn) => fn && fn(...args))

    return {
      ...elementProps,
      style: { overflow: 'scroll', ...(elementProps && elementProps.style) },
      onMouseMove: callAllFns(
        elementProps && elementProps.onMouseMove,
        handleMousemove
      )
    }
  }

  return getEdgeScrollingProps
}

export default useScrollOnEdges
