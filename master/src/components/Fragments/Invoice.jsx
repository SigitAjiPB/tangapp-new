import React, { useState } from 'react';

const ItemTable = () => {
  // state awal
  const [items, setItems] = useState([{ id: 1, name: '', qty: 0, price: 0, total: 0 }]);

  const handleInputChange = (index, field, value) => {
    // handleInputChange - menangani perubahan input di setiap baris 
    // state item yang di update 
    const newItems = [...items]; 
    newItems[index][field] = value;

        // state di update - membuat salinan item, menghitung ulang nilai input yang di ubah
    if (field === 'qty' || field === 'price') {
      newItems[index].total = newItems[index].qty * newItems[index].price;
    } else if (field === 'total') {
      newItems[index].price = newItems[index].total / newItems[index].qty;
    }

    // state di atur pake yang baru di inputkan
    setItems(newItems);
  };

  // fungsi menambahkan input biasa untuk menambahkan item berupa objek ke array items
  const addItem = (e) => {
    setItems([...items, { id: items.length + 1, name: '', qty: 0, price: 0, total: 0 }]);
    e.preventDefault()
  };

  // fungsi delete input - tapi berdasarkan index yang ada
  const deleteItem = (index) => {
    const newItems = items.filter((item, i) => i !== index);
    setItems(newItems);
  };
  
  // menghitung grand total dari semua item
  const calculateGrandTotal = () => {
    return items.reduce((acc, item) => acc + item.total, 0);
  };

  return (
    <div className="container col-span-6 lg:col-span-4">
      <h1 className='text-2xl inline text-slate-800'>Invoice</h1>
      <table className="min-w-full mt-6 bg-white drop-shadow-md rounded-md border-gray-300">
        <thead>
          <tr className=' text-slate-800'>
            <th className="py-4 px-4 border-b">Nama Barang</th>
            <th className="py-4 px-4 border-b">Qty</th>
            <th className="py-4 px-4 border-b">Harga Satuan</th>
            <th className="py-4 px-4 border-b">Total</th>
            <th className="py-4 px-4 border-b"></th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={item.id}>
              <td className="py-2 pr-2 pl-4 border-b">
                <input
                  type="text"
                  value={item.name}
                  onChange={(e) => handleInputChange(index, 'name', e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </td>
              <td className="py-2 px-2 border-b">
                <input
                  type="number"
                  value={item.qty}
                  onChange={(e) => handleInputChange(index, 'qty', parseFloat(e.target.value))}
                  className="w-full p-2 border border-gray-300 rounded"
                  
                />
              </td>
              <td className="py-2 px-2 border-b">
                <input
                  type="number"
                  value={item.price}
                  onChange={(e) => handleInputChange(index, 'price', parseFloat(e.target.value))}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </td>
              <td className="py-2 px-2 border-b">
                <input
                  type="number"
                  value={item.total}
                  onChange={(e) => handleInputChange(index, 'total', parseFloat(e.target.value))}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </td>
              <td className="py-2 px-4 border-b">
                <button
                  onClick={() => deleteItem(index)}
                  className="p-2 bg-gradient-to-r from-red-400 to-red-600 text-white rounded"
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        onClick={addItem}
        className="mt-4 p-2 bg-gradient-to-r from-sky-400 to-sky-600 text-white rounded"
      >
        Add Item
      </button>
      <div className="mt-4 p-2 bg-gray-100 border border-gray-300 rounded">
        <strong>Grand Total: </strong>Rp {calculateGrandTotal().toLocaleString('id-ID')}
      </div>
    </div>
  );
};

export default ItemTable;
