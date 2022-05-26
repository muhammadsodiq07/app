import React from 'react'

function SaveBooks({save}) {
  return (
    <div>
          {save.map(item => {
            return (
              <>
                <li>
                  {item.bookName}
                </li>
              </>
            )
          })}
    </div>
  )
}

export default SaveBooks
