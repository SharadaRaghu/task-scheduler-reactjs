import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({ title, onAddButton, showAdd }) => {
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button text={showAdd ? 'Close' : 'Add'} 
      color={showAdd ? 'red' : 'green'} 
      onClick={onAddButton} />
    </header>
  )
}

Header.defaultProps = {
    title: 'Task Scheduler',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// CSS in JS
// const headingStyle = {
//     color: 'green',
//     backgroundColor: 'black'
// }


export default Header
