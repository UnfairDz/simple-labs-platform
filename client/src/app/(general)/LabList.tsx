import { resolve } from 'path';
import LabCard from '../components/LabCard'

import { judson } from '../fonts'

async function getLabs() {
  //imitate delay
  await new Promise(resolve => setTimeout(resolve, 3000))

  const res = await fetch('http://localhost:5000/api/v1/labs', {
    next: {
      revalidate: 0 // use 0 to opt out of using cache
    }
  })
  
  return res.json();
}

export default async function LabList() {
  const labs = await getLabs();

  return (
    <>
      {labs.data.data.map((lab:any) => (
        <LabCard key={lab._id} lab={lab} />
      ))}
      {labs.data.data.length === 0 && (
        <h1 className={judson.className + ' no-lab-find-text'} >No Lab Available come back later</h1>
      )}
    </>
  )
}