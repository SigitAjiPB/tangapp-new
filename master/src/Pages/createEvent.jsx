<<<<<<< HEAD
import CreateEvent from "../components//Fragments/CreateEvent"

const createEventPage = ()=> {
  return(
    <div>
      <CreateEvent></CreateEvent>
    </div>
  )
}

export default createEventPage
=======
const handleSubmit = async (e) => {
    e.preventDefault();

    // Siapkan data acara yang akan dikirim
    const eventData = {
        eventName,
        date,
        eventTime,
        eventDescription,
    };

    try {
        // Kirim data ke API menggunakan fetch
        const response = await fetch('https://api.example.com/events', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(eventData),
        });

        // Periksa apakah permintaan berhasil
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // Ambil data dari respons
        const data = await response.json();
        console.log('Event created successfully:', data);
        
        // Reset form setelah berhasil
        setEventName('');
        setEventDate('');
        setEventTime('');
        setEventDescription('');
        
    } catch (error) {
        console.error('Error creating event:', error);
    }
};
>>>>>>> f243cac40b720f35f1446dc73ef16e639744264a
