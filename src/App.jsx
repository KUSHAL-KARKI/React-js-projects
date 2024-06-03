import React from 'react'
import Accordion from './components/accordion'
import Colorfinder from './components/colorFinder'
import StarRating from './components/star-rating'
import QrCodeGenerate from './components/QRcode-generator'
import ModalTest from './components/Model-Popup/modal-test'
import GithubProfileFinder from './components/github-profile-finder'

const App = () => {
  return (
    <div>
      <Accordion />
      <Colorfinder />
      <QrCodeGenerate />
      <StarRating noOfStars={10} />
      <ModalTest />
      <GithubProfileFinder />
    </div>
  )
}

export default App