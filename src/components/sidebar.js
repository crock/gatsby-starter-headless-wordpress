import React from 'react'
import PropTypes from "prop-types"

const Sidebar = ({children}) => (
    <div className="sidebar"
        style={{
            width: `300px`,
            display: `flex`,
            flexDirection: `column`,
            justifyContent: `flex-start`,
            alignItems: `flex-start`,
        }}
    >
        {children}
    </div>
)

Sidebar.propTypes = {
    children: PropTypes.node.isRequired,
}
  
export default Sidebar