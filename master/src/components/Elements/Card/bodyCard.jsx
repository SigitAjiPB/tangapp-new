const BodyCard = (props) => {

    const {eventbio} = props
    return (
        <div className="mt-4">
            <p className="text-pretty text-sm text-gray-500 line-clamp-2">
                {eventbio}
            </p>
      </div>
    )
}

export default BodyCard