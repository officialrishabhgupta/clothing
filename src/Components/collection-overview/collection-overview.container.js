import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';
import WithSpinner from "../../Components/with-spinner/with-spinner.component";
import CollectionOverview from "../../Components/collection-overview/collection-overview.component";

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
  });
  
  const CollectionOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
  )(CollectionOverview);
  
  export default CollectionOverviewContainer;