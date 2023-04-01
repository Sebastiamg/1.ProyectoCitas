import React from 'react'

import Footer from './Components/Footer'
import Header from './Components/Header'
import Form from './Components/Form'

const App = () => {
  return (
    <div className='bg-slate-200'>
      {/* Header */}
      <Header />
      
      {/* Body */}
      <Form />

      {/* Footer */}
      <Footer/>
    </div>
    )
}

export default App