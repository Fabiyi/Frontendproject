export const services = [
    {
        id:"emergency",
        link:"emergency",
        name: "Emergency Services",
        description: "Our emergency services are available 24/7, providing immediate and high-quality medical care to those in need. We are equipped to handle critical cases with the utmost efficiency.",
        icon: (
            <svg className="w-8 h-8 text-red-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zM13 7h-2v5H7v2h4v5h2v-5h4v-2h-4z"/>
            </svg>
        ),
    },
    {
        id:"surgical",
        link:"surgical",
        name: "Surgical Services",
        description: "Our surgical services include a wide range of procedures, from minor surgeries to complex operations. Our surgical team is highly skilled and dedicated to ensuring patient safety and positive outcomes.",
        icon: (
            <svg className="w-8 h-8 text-green-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M14 3H4a1 1 0 0 0-1 1v16h2V5h8v14h2V4a1 1 0 0 0-1-1zm7.7 14.3l-4-4a1 1 0 0 0-1.4 0l-4 4a1 1 0 1 0 1.4 1.4l3.3-3.3 3.3 3.3a1 1 0 0 0 1.4-1.4z"/>
            </svg>
        ),
    },
    {
        id:"pediatrics",
        link:"pediatrics",
        name: "Pediatrics",
        description: "Our pediatric department offers compassionate and comprehensive care for children, focusing on thier physical, mental, and emotional health from infancy to adolescence.",
        icon: (
            <svg className="w-8 h-8 text-blue-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 4a5 5 0 0 1 5 5c0 1.4-.6 2.6-1.6 3.5C16.4 13 17 14 17 15v2h-1v3h-2v-3H10v3H8v-3H7v-2c0-1 0.6-2 1.6-2.5A5 5 0 0 1 12 4zM9 9c0-1.7 1.3-3 3-3s3 1.3 3 3-1.3 3-3 3-3-1.3-3-3z"/>
            </svg>
        ),
    },
    {
        id:"cardiology",
        link:"cardiology",
        name: "Cardiology",
        description: "Our cardiology department offers preventive and interventional care for heart health. We use state-of-the-art technology to diagnose and treat a variety of cardiovascular conditions.",
        icon: (
            <svg className="w-8 h-8 text-purple-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
        ),
    },
    { 
        id:"neurology",
        link:"neurology",
        name: "Neurology",
        description: "Our neorology specialists provide advanced treatment for neurological disorders, including stroke, epilepsy, and neurodegenerative diseases. We prioritize precise diagnosis and effective treatment.",
        icon: (
            <svg className="w-8 h-8 text-indigo-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 14.93V19h-2v-2.07a8.013 8.013 0 0 1-4.53-4.53H5v-2h1.47A8.013 8.013 0 0 1 11 5.07V3h2v2.07a8.013 8.013 0 0 1 4.53 4.53H19v2h-1.47a8.013 8.013 0 0 1-4.53 4.53z"/>
            </svg>
        ),
    },
    {
        id:"orthopedic",
        link:"orthopedic",
        name: "Orthopedics",
        description: "Orthopedic services focus on the treatment of musculoskeletal disorders. We offer personalized care for joint pain, sports injuries, and post-surgical rehabilitation.",
        icon: (
            <svg className="w-8 h-8 text-teal-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M17 22h-2v-2.5l-3-4.5-3 4.5V22H7v-2h1.5L12 13.5 15.5 20H17v2zM10 2v6H7.5l-.5-3h-2L5 8h1.5V2H10zM17.5 2H14v6h2.5L16 5h2l-.5 3H19V2h-1.5z"/>
            </svg>
        ),
    },
];
