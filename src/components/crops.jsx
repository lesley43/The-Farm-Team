import React, { Component } from "react";
//import { Link } from "react-router-dom";
import CropsTable from "./cropsTable";
import SearchBox from "./searhBox";
//import ListGroup from "./common/listGroup";
import Pagination from "./common/pagination";
import { getCrops, deleteCrop } from "../data/fakeCropData";
import { getTypes } from "../data/fakeTypeData";
import { paginate } from "../utils/paginate";
import _ from "lodash";

class Crops extends Component {
  state = {
    crops: [],
    types: [],
    currentPage: 1,
    pageSize: 4,
    searchQuery: "",
    selectedType: null,
    sortColumn: { path: "name", order: "asc" }
  };

  componentDidMount() {
    const types = [{ _id: "", name: "All Crop Types" }, ...getTypes()];

    this.setState({ crops: getCrops(), types });
  }

  handleDelete = crop => {
    const crops = this.state.crops.filter(c => c._id !== crop._id);
    this.setState({ crops });

    deleteCrop(crop._id);
  };

  handleLike = crop => {
    const crops = [...this.state.crops];
    const index = crops.indexOf(crop);
    crops[index] = { ...crops[index] };
    crops[index].liked = !crops[index].liked;
    this.setState({ crops });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleTypeSelect = type => {
    this.setState({ selectedType: type, searchQuery: "", currentPage: 1 });
  };

  handleSearch = query => {
    this.setState({ searchQuery: query, selectedType: null, currentPage: 1 });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      sortColumn,
      selectedType,
      searchQuery,
      crops: allCrops
    } = this.state;

    let filtered = allCrops;
    if (searchQuery)
      filtered = allCrops.filter(c =>
        c.name.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    else if (selectedType && selectedType._id)
      filtered = allCrops.filter(c => c.type._id === selectedType._id);

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const crops = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: crops };
  };

  render() {
    const { length: count } = this.state.crops;
    const { pageSize, currentPage, sortColumn, searchQuery } = this.state;

    if (count === 0) return <p>There are no crops in the database.</p>;

    const { totalCount, data: crops } = this.getPagedData();

    return (
      <div className="row">
        <div className="col-3">
          {/* <ListGroup
            items={this.state.types}
            selectedItem={this.state.selectedType}
            onItemSelect={this.handleTypeSelect}
          /> */}
        </div>
        <div className="col">
          {/* <Link
            to="/crops/new"
            className="btn btn-primary"
            style={{ marginBottom: 20 }}
          >
            New Crop
          </Link> */}
          <p>Showing {totalCount} crops in the database.</p>
          <SearchBox value={searchQuery} onChange={this.handleSearch} />
          <CropsTable
            crops={crops}
            sortColumn={sortColumn}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
          />
          <Pagination
            itemsCount={totalCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Crops;