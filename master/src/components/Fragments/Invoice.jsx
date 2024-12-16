import React, { useState } from 'react';

const ItemTable = (props) => {
  // state awal
  const [items, setItems] = useState([{ id: 1, name: '', qty: 0, price: 0, total: 0 }]);
  const {invoiceDetails, formState} = props

  const [localInvoiceDetails, setLocalInvoiceDetails] = useState(invoiceDetails)


  const handleInputChange = (index, field, value) => {
    // handleInputChange - menangani perubahan input di setiap baris  state item yang di update
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

  const addItemUpdate = (e) => {
    setLocalInvoiceDetails([...localInvoiceDetails, { id: localInvoiceDetails.length + 1, itemName:'', itemQuantity: 0, Itemprice: 0, totalPrice: 0}])
    e.preventDefault()
  }

  // fungsi delete input - tapi berdasarkan index yang ada
  const deleteItem = (index) => {
    const newItems = items.filter((item, i) => i !== index);
    setItems(newItems);
               
  };
  const deleteItemUpdate = (index) => {
    const newUpdateItem = localInvoiceDetails.filter((item, i) => i !== index);
    setLocalInvoiceDetails(newUpdateItem);
               
  };
  
  // menghitung grand total dari semua item
  const calculateGrandTotal = () => {
    return items.reduce((acc, item) => acc + item.total, 0);
  };

  const calculateTest =() => {
    return localInvoiceDetails.reduce((acc, item) => acc + item.totalPrice, 0)
  }


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
          {formState === 'update' ? localInvoiceDetails.map((invoiceDetail, index)=> (
            <tr key ={invoiceDetail.id}>
              <td className="py-2 pr-2 pl-4 border-b">
                <input
                  type="text"
                  value={invoiceDetail.itemName}
                  onChange={(e) => handleInputChange(index, 'name', e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </td>
              <td className="py-2 pr-2 pl-4 border-b">
                <input
                  type="text"
                  value={invoiceDetail.itemQuantity}
                  onChange={(e) => handleInputChange(index, 'quantity', e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </td>
              <td className="py-2 pr-2 pl-4 border-b">
                <input
                  type="text"
                  value={invoiceDetail.itemPrice}
                  onChange={(e) => handleInputChange(index, 'price', e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </td>
              <td className="py-2 pr-2 pl-4 border-b">
                <input
                  type="text"
                  value={invoiceDetail.totalPrice}
                  onChange={(e) => handleInputChange(index, 'total', e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </td>
              <td className="py-2 px-4 border-b">
                <button
                  onClick={() => deleteItemUpdate(index)}
                  className="p-2 bg-gradient-to-r from-red-400 to-red-600 text-white rounded"
                >
                  Hapus
                </button>
              </td>
            </tr>
          )): items.map((item, index) => (
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
        onClick={formState === 'update' ?addItemUpdate: addItem}
        className="mt-4 p-2 bg-gradient-to-r from-sky-400 to-sky-600 text-white rounded"
      >
        Add Item
      </button>
      <div className="mt-4 p-2 bg-gray-100 border border-gray-300 rounded">
        <strong>Grand Total: </strong>Rp {formState === 'update' ? calculateTest().toLocaleString('id-ID') : calculateGrandTotal().toLocaleString('id-ID')}
      </div>
    </div>
  );
};

export default ItemTable;
