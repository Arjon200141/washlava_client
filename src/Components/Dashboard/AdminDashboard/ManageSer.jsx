import { useEffect, useState } from "react";
import { PencilSquareIcon, TrashIcon, CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';

const ManageSer = () => {
    const [services, setServices] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingService, setEditingService] = useState(null);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        features: [],
        price: '',
        buttonText: ''
    });
    const [newFeature, setNewFeature] = useState('');

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/services/${id}`, {
                method: 'DELETE'
            });
            const result = await response.json();
            if (result.deletedCount === 1) {
                setServices(services.filter(service => service._id !== id));
            }
        } catch (error) {
            console.error('Error deleting service:', error);
        }
    };

    const openEditModal = (service) => {
        setEditingService(service);
        setFormData({
            title: service.title,
            description: service.description,
            features: [...service.features],
            price: service.price,
            buttonText: service.buttonText
        });
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setEditingService(null);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const addFeature = () => {
        if (newFeature.trim()) {
            setFormData({
                ...formData,
                features: [...formData.features, newFeature.trim()]
            });
            setNewFeature('');
        }
    };

    const removeFeature = (index) => {
        const updatedFeatures = formData.features.filter((_, i) => i !== index);
        setFormData({
            ...formData,
            features: updatedFeatures
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:5000/services/${editingService._id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });
            const result = await response.json();
            if (result.modifiedCount === 1) {
                setServices(services.map(service => 
                    service._id === editingService._id ? { ...service, ...formData } : service
                ));
                closeModal();
            }
        } catch (error) {
            console.error('Error updating service:', error);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Manage Services</h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <div 
                            key={service._id} 
                            className={`rounded-xl overflow-hidden shadow-lg ${service.bgColor} border-t-4 ${service.borderColor}`}
                        >
                            <div className="p-6">
                                <div className="flex justify-between items-start">
                                    <div className={`w-16 h-16 ${service.bgColor} rounded-full flex items-center justify-center mb-4`}>
                                        <img src={service.icon} alt={service.title} className="w-8 h-8" />
                                    </div>
                                    <div className="flex space-x-2">
                                        <button 
                                            onClick={() => openEditModal(service)}
                                            className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100"
                                        >
                                            <PencilSquareIcon className="h-5 w-5 text-blue-500" />
                                        </button>
                                        <button 
                                            onClick={() => handleDelete(service._id)}
                                            className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100"
                                        >
                                            <TrashIcon className="h-5 w-5 text-red-500" />
                                        </button>
                                    </div>
                                </div>
                                <h2 className={`text-xl font-bold mb-2 ${service.textColor}`}>{service.title}</h2>
                                <p className="text-gray-700 mb-4">{service.description}</p>
                                <ul className="mb-6 space-y-2">
                                    {service.features.map((feature, index) => (
                                        <li key={index} className="flex items-start">
                                            <CheckIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                            <span className="text-gray-700">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex justify-between items-center">
                                    <span className={`text-2xl font-bold ${service.textColor}`}>${service.price}</span>
                                    <button 
                                        className={`px-4 py-2 rounded-lg text-white font-medium bg-gradient-to-r ${service.gradientFrom} ${service.gradientTo} hover:bg-gradient-to-r ${service.hoverFrom} ${service.hoverTo} transition-all`}
                                    >
                                        {service.buttonText}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Edit Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6 mx-4">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-2xl font-bold text-gray-800">Edit Service</h2>
                            <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
                                <XMarkIcon className="h-6 w-6" />
                            </button>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                                    <input
                                        type="text"
                                        name="title"
                                        value={formData.title}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                                    <textarea
                                        name="description"
                                        value={formData.description}
                                        onChange={handleInputChange}
                                        rows="3"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Features</label>
                                    <div className="flex mb-2">
                                        <input
                                            type="text"
                                            value={newFeature}
                                            onChange={(e) => setNewFeature(e.target.value)}
                                            className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="Add new feature"
                                        />
                                        <button
                                            type="button"
                                            onClick={addFeature}
                                            className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600"
                                        >
                                            Add
                                        </button>
                                    </div>
                                    <div className="space-y-2">
                                        {formData.features.map((feature, index) => (
                                            <div key={index} className="flex items-center justify-between bg-gray-100 px-3 py-2 rounded">
                                                <span>{feature}</span>
                                                <button
                                                    type="button"
                                                    onClick={() => removeFeature(index)}
                                                    className="text-red-500 hover:text-red-700"
                                                >
                                                    <XMarkIcon className="h-5 w-5" />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
                                    <input
                                        type="text"
                                        name="price"
                                        value={formData.price}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Button Text</label>
                                    <input
                                        type="text"
                                        name="buttonText"
                                        value={formData.buttonText}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="mt-6 flex justify-end space-x-3">
                                <button
                                    type="button"
                                    onClick={closeModal}
                                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                                >
                                    Save Changes
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ManageSer;