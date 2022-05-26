import React from 'react'

function SaveBooks(props) {
  return (
    <div>
  <ul className='save__product-list'>
                {props.saved.map((item, index) => {
                  return (
                    <>
                      <h1>{item.bookName}</h1>
                    </>
                  )
                })}
              </ul>
    </div>
  )
}

export default SaveBooks
