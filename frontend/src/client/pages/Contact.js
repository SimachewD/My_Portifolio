
import { useState } from 'react';

const Contact = () => {
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can implement the logic to send the message
        // For example, you could use an API to send an email
        alert('Message sent successfully!');
        setMessage('');
    }

    return (
        <div className="container mx-auto py-8" id='contact'>
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-12">
                <h2 className="text-2xl font-bold mb-4 text-center">Contact Me</h2>
                <p className="text-center">You can send me a message here:</p>
                <form onSubmit={handleSubmit} className="mt-4 md:w-3/5 mx-auto">
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="block w-full border border-gray-300 rounded-md p-2"
                        placeholder="Type your message here..."
                        rows="5"
                    ></textarea>
                    <button type="submit" className="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md">Send Message</button>
                </form>
                <p className="text-center mt-4">Alternatively, you can contact me via email: simachewdenekewse@gmail.com</p>
            </div>
        </div>
    );
}

export default Contact;