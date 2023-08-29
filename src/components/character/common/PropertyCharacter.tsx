interface PropertyCharacterProps {
    label: string;
    value: string;
}

const PropertyCharacter = ({ label, value }: PropertyCharacterProps) => {
    return (
        <div className="wrapper-prop-character">
            <p className="font-bold">{label}</p>
            <p className="text-grey-500">{value}</p>
        </div>
    )
}

export default PropertyCharacter