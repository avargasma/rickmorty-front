interface PropertyCharacterProps {
    label: string;
    value: string;
}

const PropertyCharacter = ({ label, value }: PropertyCharacterProps) => {
    return (
        <div className="border-b border-grey-lighter py-3">
            <p className="font-bold text-grey-darkest">{label}</p>
            <p className="text-grey-darkest">{value}</p>
        </div>
    )
}

export default PropertyCharacter