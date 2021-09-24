import DiscoverySpaceShuttle from "../../components/3DModels/DiscoverySpaceShutle"
import Perseverance from "../../components/3DModels/Perseverance"
import SpaceStation from "../../components/3DModels/SpaceStation"

export default function ClassRoom2() {
    return (
        <div className="z-10 pt-20 bg-ARbg">
            <DiscoverySpaceShuttle />
            <Perseverance />
            <SpaceStation />
        </div>
    )
}
