const BodyCard = (props) => {

    const {eventbio} = props
    return (
        <div className="mt-2">
            <p className="text-pretty text-sm text-gray-500 line-clamp-1">
                {eventbio}
            </p>
      </div>
    )
}

export default BodyCard