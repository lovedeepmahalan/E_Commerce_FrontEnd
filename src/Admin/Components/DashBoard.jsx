import React from 'react';
import Achivement from './Achivement';
import MonthlyOverview from './MonthlyOverview';
import OrdersTableView from '../View/OrderView';
import ProductsTable from './ProductsTable';

const AdminDashBoard = () => {
  return (
    <div className="p-10">
  {/* Row for Achievement and MonthlyOverview side by side */}
  <div className="flex flex-col md:flex-row gap-6 mb-10">
    <div className="md:w-2/5 w-full">
      <Achivement />
    </div>
    <div className="md:w-3/5 w-full">
      <MonthlyOverview />
    </div>
  </div>

 <div className="flex flex-col md:flex-row gap-6">
    <div className="md:w-1/2 w-full">
      <OrdersTableView />
    </div>
    <div className="md:w-1/2 w-full">
      <ProductsTable />
    </div>
  </div>
</div>
  );
}

export default AdminDashBoard;
