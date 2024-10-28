

const FooterCard = (props) => {

    const {eventdate, eventcost} = props
    return (
        <div className="mt-4 flex gap-4 sm:gap-6">
            <div className="flex flex-col-reverse">
                <div className="text-sm font-medium text-gray-600">Date</div>
                <div className="text-xs text-gray-500">{eventdate}</div>
            </div>
        
            <div className="flex flex-col-reverse">
                <div className="text-sm font-medium text-gray-600">Cost</div>
                <div className="text-xs text-gray-500">{eventcost}</div>
            </div>
            <div className="flex flex-col-reverse">
                <div className="text-sm font-medium text-gray-600">Participant</div>
                <div className="text-xs text-gray-500">3 Participants</div>
            </div>
        </div>
    )
}

export default FooterCard