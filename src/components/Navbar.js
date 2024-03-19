import React, { useState } from 'react';

const Navbar = (props) => {
    const navitems = props.filterData;
    const [isClicked, setIsClicked] = useState(false);

  return (
    <div className='nav-items'>
        {
            navitems.map((item, index) => {
                return (
                    <button key={item.id} 
                    onClick={() => props.navbarHandeler(item.title, index)} 
                    style={props.navClickedArr[index] ? { border: '2px solid #fff' } : { border: '2px solid #161430' }}
                    >
                        {item.title}
                    </button>
                );
            })
        }
    </div>
  )
}

export default Navbar;