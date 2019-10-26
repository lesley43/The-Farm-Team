import React, { Component } from "react";
import { Link } from "react-router-dom"
import Table from "./common/table";
//import Like from "./common/like";

class CropsTable extends Component {
    columns = [
        {
          path: "name",
          label: "Name",
          content: crop => <Link to={`/crops/${crop.name}`}>{crop.name}</Link>
        },
        { path: "cropType.name", label: "Crop Type" },
        { path: "plantSeason", label: "Plant Season" },
        { path: "harvestSeason", label: "Harvest Season" },
        { path: "lifeCycle", label: "Life Cycle" },
        // {
        //     key: "like",
        //     content: crop => <Like liked={crop.liked} onClick={() => this.props.onLike(crop)} />
        // },
        // {
        //     key: "delete",
        //     content: crop => (
        //       <button
        //         onClick={ () => this.props.onDelete(crop)}
        //         className="btn btn-danger btn-sm"
        //       >
        //         Delete
        //       </button>
        //     )
        // }
    ];
    
    render() { 
        const { crops, onSort, sortColumn } = this.props;

        return (
          <Table
            columns={this.columns}
            data={crops}
            sortColumn={sortColumn}
            onSort={onSort}
          />
        );        
    }
}
  
export default CropsTable;