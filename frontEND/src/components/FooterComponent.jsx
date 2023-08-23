import React from 'react'

function FooterComponent(){
  return(
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div style={{ flex: 1 }}>
        {/* Contenido principal aquí */}
      </div>
      <footer className='bg-dark text-white'>
        <div className='container text-center py-3'>
          <h2>Footer</h2>
        </div>
      </footer>
    </div>
  )
}

export default FooterComponent