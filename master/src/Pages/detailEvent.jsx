import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const DetailEventPage = () => {
  let {id} = useParams()
  const [detailEvent, setDetailEvent] = useState({})

  useEffect(() => {
      const eventData = JSON.parse(localStorage.getItem('events')) || [];
      setDetailEvent(eventData);
  }, [])
  console.log(detailEvent)
  return (
    <div>
      {Object.keys(detailEvent).length > 0 && (
        <div>detail: {id}</div>
      )}
    </div>
  )
}

export default DetailEventPage