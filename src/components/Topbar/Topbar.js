import './Topbar.scss'
import { Button } from '@mui/material'

const Topbar = () => {
  return (
    <div className='topbar-container'>
        <Button className='project-contain'>About Me</Button>
        <Button className='project-contain'>Projects</Button>
        <Button className='project-contain'>Porfolio</Button>
        <Button className='project-contain'>Resume</Button>
        <Button className='project-contain'>Contact</Button>
    </div>
  )
}

export default Topbar