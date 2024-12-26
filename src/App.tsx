import './App.css'
import { Button } from './components/Button'
import { PlusIcon } from './icons/PlusIcon'
import { ShareIcon } from './icons/ShareIcon'
import { Card } from './components/Card'
import { CreateContentModal } from './components/CreateContentModal'
import { useState } from 'react'
function App() {
  const[modalOpen, setModalOpen] = useState(true)
  return <div className='p-4'>
    <CreateContentModal open={modalOpen} onClose={() => {
      setModalOpen(false)
    }}/>
    <div className='flex justify-end gap-4'>
    <Button onClick = {() =>{
      setModalOpen(true)
    }} variant='primary' text='Add content' startIcon={<PlusIcon />}/>
    <Button variant='secondary' text='Share brain' startIcon={<ShareIcon />}/>
    </div>
    <div className='flex gap-4'>
    <Card link="https://x.com/orca_x27/status/1871599364440993995" title="first tweet" type='twitter'/>
    <Card link="https://www.youtube.com/embed/6p8R6vFuFMI?si=4T63n_qy8iAQ0k3H" title="first video" type='youtube'/>
    </div>
  </div>
}

export default App
