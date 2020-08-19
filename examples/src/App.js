import React from 'react'

import useScrollOnEdges from 'react-scroll-on-edges'
// import 'react-scroll-on-edges/dist/index.css'

const App = () => {
  const getEdgeScrollingProps = useScrollOnEdges()
  return (
    <div
      {...getEdgeScrollingProps({
        style: {
          boxSizing: 'border-box',
          backgroundColor: 'yellow',
          height: '400px',
          width: '500px',
          margin: '30px auto'
        }
      })}
    >
      <center>
        <h2>React-Hooks for Scroll on Edges 😄</h2>
        <h5>Move the mouse near any edges to scroll</h5>
      </center>
      <p
        style={{
          height: '2000px',
          width: '2000px'
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mattis
        purus eget gravida porta. Donec ornare tempor tellus sed lobortis.
        Vestibulum ac consequat quam. Vestibulum vitae mi id nulla pharetra
        euismod. Nam sodales orci maximus quam accumsan, at luctus elit
        placerat. Nunc euismod elit non felis tempor, id ullamcorper lectus
        faucibus. Sed auctor hendrerit augue, ac aliquam ligula condimentum in.
        Aliquam pretium, eros et finibus accumsan, erat turpis mattis turpis,
        quis tincidunt urna odio luctus erat. Quisque a turpis orci. Etiam
        vulputate varius nisi, ac accumsan orci feugiat id. Curabitur
        consectetur orci at volutpat efficitur. Integer lacus lacus, lacinia at
        magna in, lobortis varius lorem. Aenean id ornare nunc. Mauris imperdiet
        lacus eu sodales posuere. Ut sodales maximus vehicula. Quisque ut
        feugiat urna, vitae maximus lacus. Nam finibus ligula sit amet maximus
        pharetra. Sed sit amet odio feugiat, accumsan urna ac, suscipit nisl.
        Quisque efficitur vehicula quam, nec interdum elit condimentum in.
        Nullam lacinia dui a urna posuere, id accumsan lectus porttitor. Vivamus
        ac dolor et lacus aliquam rhoncus. Ut cursus gravida nisi nec vulputate.
        Praesent aliquam, dui non vehicula ornare, ante diam scelerisque magna,
        pharetra vulputate nisl purus non magna. Etiam vehicula mi sed odio
        scelerisque, a sagittis est rutrum. Nam enim orci, vulputate vulputate
        porta quis, eleifend id elit. Donec ac dictum felis, vitae consectetur
        nunc. Suspendisse eleifend orci enim, quis dapibus augue venenatis a.
        Vivamus hendrerit congue arcu, quis euismod est. In varius mi ac orci
        imperdiet pellentesque quis id sem. Proin metus justo, tempor ut
        faucibus molestie, mollis id arcu. Aliquam erat volutpat. Quisque
        commodo cursus ex, vitae cursus libero malesuada luctus. Duis accumsan
        ullamcorper viverra. Curabitur consectetur tristique arcu, vel sodales
        neque maximus venenatis. Cras dictum tincidunt dictum. Suspendisse
        potenti. Morbi non tellus dui. Sed a efficitur felis. Etiam in libero
        urna. In malesuada pellentesque elit, ut feugiat ex scelerisque sit
        amet. Nunc maximus sodales sollicitudin. Nam eu est id justo fringilla
        ultrices. Vivamus non bibendum ex. Class aptent taciti sociosqu ad
        litora torquent per conubia nostra, per inceptos himenaeos. Nam
        malesuada ante sed nunc placerat iaculis. Ut massa urna, suscipit non
        vestibulum non, commodo vitae nisi. Fusce eget enim vel enim viverra
        feugiat. Etiam a arcu nisi. Duis luctus eleifend nulla nec sagittis.
        Proin aliquam fermentum sodales. Curabitur fermentum magna purus.
        Integer et neque ac tellus vehicula maximus id sit amet tortor. Donec at
        massa sit amet eros auctor cursus. Donec nec scelerisque massa. Aliquam
        luctus metus tellus, eu elementum felis finibus a. Vestibulum ante ipsum
        primis in faucibus orci luctus et ultrices posuere cubilia curae;
        Quisque sit amet euismod quam, eu tincidunt tortor. Duis sit amet leo
        tincidunt, cursus arcu quis, fermentum magna. Duis commodo, ligula non
        tempor ultricies, ante dolor efficitur lacus, non iaculis magna tellus
        porttitor odio. Praesent a tortor malesuada velit auctor viverra ut
        suscipit lorem. Proin posuere tincidunt semper. Suspendisse a nulla
        imperdiet, elementum purus vitae, fermentum lorem.
      </p>
    </div>
  )
}

export default App
