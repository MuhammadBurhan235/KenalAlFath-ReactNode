import React from "react";
import { useLocation } from "react-router-dom";
import Banner from "../../components/Banner/Banner";

const ListItemPage = () => {
  const location = useLocation();
  const data = location.state?.items;

  return (
    <div>
      <div>
        <Banner banners={data} />
      </div>
    </div>
  );
};

export default ListItemPage;
