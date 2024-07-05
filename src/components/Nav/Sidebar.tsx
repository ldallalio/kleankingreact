import React from 'react'
import { useNavigate } from 'react-router-dom';

type Props = {}

const Sidebar = (props: Props) => {
    const navigate = useNavigate();
    return (
        <div className='servicePageSidebar'>
            <h3>Our Services</h3>
            <ul>
                <li onClick={() => navigate("/airducts")}>Air Ducts</li>
                <li onClick={() => navigate("/carpet")}>Carpet & Rugs</li>
                <li onClick={() => navigate("/tile")}>Tile & Grout</li>
                <li onClick={() => navigate("/hardwood")}>Hardwood Floors</li>
                <li onClick={() => navigate("/dryervent")}>Dryer Vents</li>
                <li onClick={() => navigate("/mold")}>Mold Removal</li>
                <li onClick={() => navigate("/waterandfiredamage")}>
                    Water & Fire Damage
                </li>
                <li onClick={() => navigate("/crimescene")}>
                    Crime Scene Cleaning
                </li>
                <li onClick={() => navigate("/upholstery")}>Upholstery</li>
            </ul>
        </div>
    )
}

export default Sidebar