import React from 'react'
import { useNavigate } from 'react-router-dom';

type Props = {}

const Sidebar = (props: Props) => {
    const navigate = useNavigate();
    return (
        <div className='servicePageSidebar'>
            <h3>Our Services</h3>
            <ul>
                <li onClick={() => navigate("/air")}>Air Ducts</li>
                <li onClick={() => navigate("/carpet")}>Carpet & Rugs</li>
                <li onClick={() => navigate("/tile")}>Tile & Grout</li>
                <li onClick={() => navigate("/hardwood")}>Hardwood Floors</li>
                <li onClick={() => navigate("/dryer")}>Dryer Vents</li>
                <li onClick={() => navigate("/mold")}>Mold Removal</li>
                <li onClick={() => navigate("/water")}>
                    Water & Fire Damage
                </li>
                <li onClick={() => navigate("/crime")}>
                    Crime Scene Cleaning
                </li>
                <li onClick={() => navigate("/upholstery")}>Upholstery</li>
            </ul>
        </div>
    )
}

export default Sidebar