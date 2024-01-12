import React from 'react'

export default function Hero () {
  return (
      <section className="flex h-full">
        <div className="flex-auto">
          <h1>Bi developer</h1>
          <p>Hire me pls</p>
          <button>Contact me</button>
        </div>
        <div className="flex-auto">
          <img src="https://picsum.photos/400/400" alt="hero"/>
        </div>
      </section> 
  )
}

