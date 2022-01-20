import React from "react";
import { Route, Routes} from "react-router-dom";
import { useParams, useLocation } from "react-router";

import CollectionOverview from "../../Components/collection-overview/collection-overview.component";
import CollectionPage from "../collection/collection.component";

const  ShopPage = ()=>{
    const match = useParams(); 
    const location = useLocation();
    console.log(match, location);
    return(
    <div className="shop-page">
       <Routes>
         <Route path={`${location.pathname}`} element={<CollectionOverview/>}/>
         <Route path={`${location.pathname}/:collectionId`} element={<CollectionPage/>}/>
       </Routes>
    </div>
)
};

export default ShopPage;