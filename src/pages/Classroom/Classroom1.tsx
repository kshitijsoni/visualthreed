import { Link } from 'react-router-dom';
import Earth from "../../components/3DModels/Earth"
import SolarSystem from "../../components/3DModels/SolarSystem"
import Water from "../../components/3DModels/Water"
import ChemGlass from "../../components/3DModels/ChemGlass"

export default function ClassRoom1() {
    return (
        <div className="z-10 pt-20 bg-ARbg">
            <Link to="/learn" className="m-4">Go back</Link>
            <Earth />
            <SolarSystem />
            <Water />
            <ChemGlass />
        </div>
    )
}
