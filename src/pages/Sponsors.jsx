import React, { useState } from 'react'
import AddSponsors from '../components/AddSponsors';
import SponsorsList from '../components/SponsorsList'
import Title from '../components/Title'

const Sponsors = () => {
  const [popup, setPopup] = useState(false)

  const [sponsor, setSponsor] = useState(null);

  return (
    <>
    <div className="p-2 md:p-6">
      
      <Title title={'Sponsors and Adverts'} />

    {popup ?
    <AddSponsors setPopup={setPopup} setSponsor={setSponsor} sponsor={sponsor} /> : 
    <SponsorsList setSponsor={setSponsor} setPopup={setPopup}/>}


    </div>
    </>
  )
}

export default Sponsors