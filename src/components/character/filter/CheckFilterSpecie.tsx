import CheckFilterItem from "./CheckFilterItem";
import { ALIEN, FILTER_BY_SPECIE, HUMAN, SpecieFilterId } from "./constants";
import { ItemType } from "./types";

const items:ItemType[]  = [
    {
        id: SpecieFilterId,
        label: 'All',
        checked: false,
    },
    {
        id: HUMAN,
        label: 'Human',
        checked: false,
    },
    {
        id: ALIEN,
        label: 'Alien',
        checked: false,
    },
];

const CheckFilterSpecie = () => {
    return (
        <>
        <div className="pl-6 pb-2 text-grey-500"><p>Specie</p></div>
        <div className="wrapper-filter">
            {items.map((item, index) => (
                <CheckFilterItem filterBy={FILTER_BY_SPECIE} item={item} key={index} />
            ))}
        </div>
        </>
    )
}

export default CheckFilterSpecie