import React from "react";
import { Route, Routes} from "react-router-dom";
import { connect } from "react-redux";
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";

import CollectionOverviewContainer from "../../Components/collection-overview/collection-overview.container";
import CollectionPageContainer from "../collection/collection.container";


class ShopPage extends React.Component {
  componentDidMount() {
    const {fetchCollectionsStart} = this.props;
    fetchCollectionsStart();
  }

  render() {
    return(
    <div className="shop-page">
       <Routes>
         <Route exact path="/" element={<CollectionOverviewContainer/>}/>
         <Route path=":collectionId" element={<CollectionPageContainer/>}/>
       </Routes>
    </div>
  );
  }
};



const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);