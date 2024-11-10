import React, { useState } from 'react';

const ItemTable = () => {
  const [items, setItems] = useState([{ id: 1, name: '', qty: 0, price: 0, total: 0 }]);

  const handleInputChange = (index, field, value) => {
    const newItems = [...items];
    newItems[index][field] = value;

    if (field === 'qty' || field === 'price') {
      newItems[index].total = newItems[index].qty * newItems[index].price;
    } else if (field === 'total') {
      newItems[index].price = newItems[index].total / newItems[index].qty;
    }

    setItems(newItems);
  };

  const addItem = () => {
    setItems([...items, { id: items.length + 1, name: '', qty: 0, price: 0, total: 0 }]);
  };

  const calculateGrandTotal = () => {
    return items.reduce((acc, item) => acc + item.total, 0);
  };

  return (
    <div className="container mx-auto p-4 col-span-4">
      <div className='text-2xl'>Inboice</div>
      <table className="min-w-full bg-white border border-gray-300 mt-8">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Nama Barang</th>
            <th className="py-2 px-4 border-b">Qty</th>
            <th className="py-2 px-4 border-b">Harga Satuan</th>
            <th className="py-2 px-4 border-b">Total</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={item.id}>
              <td className="py-2 px-4 border-b">
                <input
                  type="text"
                  value={item.name}
                  onChange={(e) => handleInputChange(index, 'name', e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </td>
              <td className="py-2 px-4 border-b">
                <input
                  type="number"
                  value={item.qty}
                  onChange={(e) => handleInputChange(index, 'qty', parseFloat(e.target.value))}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </td>
              <td className="py-2 px-4 border-b">
                <input
                  type="number"
                  value={item.price}
                  onChange={(e) => handleInputChange(index, 'price', parseFloat(e.target.value))}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </td>
              <td className="py-2 px-4 border-b">
                <input
                  type="number"
                  value={item.total}
                  onChange={(e) => handleInputChange(index, 'total', parseFloat(e.target.value))}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        onClick={addItem}
        className="mt-4 p-2 bg-blue-500 text-white rounded"
      >
        Tambah Item
      </button>
      <div className="mt-4 p-2 bg-gray-100 border border-gray-300 rounded">
        <strong>Grand Total: </strong>Rp {calculateGrandTotal().toLocaleString('id-ID')}
      </div>
    </div>
  );
};

export default ItemTable;
