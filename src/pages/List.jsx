import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { products as initialProducts } from '../assets/frontend_assets/assets';
import 'react-toastify/dist/ReactToastify.css';

function List() {
    const [products, setProducts] = useState(initialProducts);

    const handleRemoveProduct = (id) => {
        const updatedProducts = products.filter(product => product._id !== id);
        setProducts(updatedProducts);
        toast.success('Product removed!');
    };

    return (
        <div className="flex-1 p-6">
            <h2 className="text-xl font-bold mb-4">All Products List</h2>
            <table className="w-full bg-gray-50 border-collapse ">
                <thead>
                    <tr className="border-b">
                        <th className="p-4 text-left">Image</th>
                        <th className="p-4 text-left">Name</th>
                        <th className="p-4 text-left">Category</th>
                        <th className="p-4 text-left">Price</th>
                        <th className="p-4 text-left">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr className="border-b" key={product._id}>
                            <td className="p-4">
                                <img src={product.image} alt={product.name} className="w-12 h-12 object-cover" />
                            </td>
                            <td className="p-4">{product.name}</td>
                            <td className="p-4">{product.category}</td>
                            <td className="p-4">${product.price}</td>
                            <td className="p-4">
                                <button 
                                    className="text-gray px-3 py-1 rounded"
                                    onClick={() => handleRemoveProduct(product._id)}
                                >
                                    X
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <ToastContainer />
        </div>
    );
}

export default List;

