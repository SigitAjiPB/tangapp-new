import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const DetailEventPage = () => {
  let {id} = useParams()
  const [detailEvent, setDetailEvent] = useState({})
  useEffect(() => {
      const eventData = JSON.parse(localStorage.getItem('events')) || [];
      setDetailEvent(eventData);
  }, [])

  return (
    <div>
      {
        
      Object.keys(detailEvent).length > 0 && (
        <div>
            <div>detail: {id}</div>
            <table>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Event Name</th>
                  <th>Event Date</th>
                  <th>Event Organizer</th>
                  <th>Event Participant</th>
                  <th>Event Cost</th>
                  <th>Event Describtion</th>
                </tr>
              </thead>

              <tbody>
                {(() => {
                  const item = detailEvent.find((item) => item.id === id);
                  if (item) {
                    return (
                      <tr key={item.id}>
                        <td>1</td>
                        <td>{item.eventName}</td>
                        <td>{item.date}</td>
                      </tr>
                    );
                  } else {
                    return (
                      <tr>
                        <td colSpan="3">No data found</td>
                      </tr>
                    );
                  }
                })()}
              </tbody>
            </table>
        </div>
      )}
    </div>
  )
}

export default DetailEventPage
