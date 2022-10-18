import './Topbar.scss'
import { Button } from '@mui/material'

const Topbar = ({curWindow, setCurWindow}) => {
  return (
    <div className='topbar-container'>
        <Button className={`${curWindow === 0 ? `active` : ''} project-contain`} onClick={() => setCurWindow(0)}>About Me</Button>
        <Button className={`${curWindow === 1 ? `active` : ''} project-contain`} onClick={() => setCurWindow(1)}>Projects</Button>
        <Button className={`${curWindow === 2 ? `active` : ''} project-contain`} onClick={() => setCurWindow(3)}>Resume</Button>
        <Button className={`${curWindow === 3 ? `active` : ''} project-contain`} onClick={() => setCurWindow(4)}>Contact</Button>
    </div>
  )
}

export default Topbar