import React, { useEffect, useState } from 'react';

const Products = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Show 10 products per page

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch("https://makeup-api.herokuapp.com/api/v1/products.json");
        let result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div>
      <h1 className="text-warning bg-dark text-center p-3">Our Stock!</h1>
      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Brand</th>
            <th>Name</th>
            <th>Price</th>
            <th>Price Sign</th>
            <th>Currency</th>
            <th>Description</th>
            <th>Rating</th>
            <th>Category</th>
            <th>Product Type</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.brand || "N/A"}</td>
              <td>{item.name}</td>
              <td>{item.price || "N/A"}</td>
              <td>{item.price_sign || "N/A"}</td>
              <td>{item.currency || "N/A"}</td>
              <td>{item.description ? item.description.substring(0, 50) + "..." : "N/A"}</td>
              <td>{item.rating || "N/A"}</td>
              <td>{item.category || "N/A"}</td>
              <td>{item.product_type || "N/A"}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="d-flex justify-content-center mt-3">
        <button 
          className="btn btn-primary me-2" 
          disabled={currentPage === 1} 
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Prev
        </button>
        <span className="align-self-center"> Page {currentPage} </span>
        <button 
          className="btn btn-primary ms-2" 
          disabled={indexOfLastItem >= data.length} 
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Products;
