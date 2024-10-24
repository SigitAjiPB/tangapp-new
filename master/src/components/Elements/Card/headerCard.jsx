
import tripSvg from "../../../assets/svg/trip.svg"

const HeaderCard = (props) => {
    const {eventname, eventorganizer} = props
    return(
        <div className="sm:flex sm:justify-between sm:gap-4">
            <div>
                <h3 className="text-lg font-bold text-gray-900 sm:text-xl">{eventname}</h3>
                <p className="mt-1 text-xs font-medium text-gray-600">{eventorganizer}</p>
            </div>

            <div className="hidden sm:block sm:shrink-0 bg-gradient-to-r from-yellow-300 via-orange-500 to-red-600 rounded-md p-2">
                <img
                    alt=""
                    src={tripSvg}
                    className="size-10 rounded-lg object-cover shadow-sm "
                />
            </div>
        </div>
    )
}

export default HeaderCard