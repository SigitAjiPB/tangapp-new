import React, { useState } from 'react';
import Invoice from "../components/Fragments/Invoice";
import InputForm from "../components/Elements/Input";
import TextareaForm from "../components/Elements/Textarea/index";
import DynamicInput from "../components/Elements/User-Input/ResultInput";

const EventFormPage = ({ addEvent }) => {
    const [formData, setFormData] = useState({
        title: "",
        created_by: "d7c19a54-156e-4b09-9efa-99709a7080d3", // Replace with dynamic user ID if available
        description: "",
        total_amount: "",
        date_event: "",
        status: "done",
        event_member_details: [],
        event_purchase_details: []
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:7878/v1/events/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const result = await response.json();
            console.log("Event created successfully:", result);
            addEvent(result); // Optional callback
        } catch (error) {
            console.error("Error creating event:", error);
        }
    };

    return (
        <>
            <section className="shadow-md rounded-md m-4 p-8 border">
                <div className="text-2xl text-slate-800 px-4 flex w-full justify-between">
                    <span>Create Event</span>
                    <button
                        className="px-4 py-2 bg-gradient-to-r from-sky-400 to-sky-600 text-white rounded"
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                </div>
                <form className="grid grid-cols-6 gap-4 p-4" onSubmit={handleSubmit}>
                    <InputForm
                        wrapp="col-span-6 sm:col-span-2"
                        label="Event Name"
                        type="text"
                        placeholder="Event Name"
                        name="title"
                        htmlFor="EventName"
                        labelStyle="block text-sm font-medium text-gray-700"
                        inputStyle="mt-1 p-2 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm outline-none border"
                        value={formData.title}
                        onChange={handleInputChange}
                    ></InputForm>
                    <InputForm
                        wrapp="col-span-6 sm:col-span-2"
                        label="Date"
                        type="datetime-local"
                        placeholder="Event Date"
                        name="date_event"
                        htmlFor="EventDate"
                        labelStyle="block text-sm font-medium text-gray-700"
                        inputStyle="mt-1 p-2 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm outline-none border"
                        value={formData.date_event}
                        onChange={handleInputChange}
                    ></InputForm>
                    <InputForm
                        wrapp="col-span-6 sm:col-span-2"
                        label="Event Cost"
                        type="number"
                        placeholder="Rp. -," 
                        name="total_amount"
                        htmlFor="EventCost"
                        labelStyle="block text-sm font-medium text-gray-700"
                        inputStyle="mt-1 p-2 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm outline-none border"
                        value={formData.total_amount}
                        onChange={handleInputChange}
                    ></InputForm>

                    <TextareaForm
                        textareaStyle="w-full rounded-lg text-sm outline-none mt-1 p-2 border-gray-200 bg-white text-gray-700 shadow-sm outline-none border"
                        wrapp="col-span-6"
                        name="description"
                        htmlFor="eventDescribtion"
                        label="Event Description"
                        labelStyle="block text-sm font-medium text-gray-700"
                        placeholder="Describe your event here"
                        value={formData.description}
                        onChange={handleInputChange}
                    ></TextareaForm>

                    <DynamicInput />

                    <Invoice />
                </form>
            </section>
        </>
    );
};

export default EventFormPage;
