import React, { Component } from "react";

class ViewCrop extends Component {     
    render() { 
        const { data, selectedCrop } = this.props;
        const selected = data[selectedCrop];

        return (
            <div>
                <p>{ ' '}<i>Click on a crop name to view more information</i></p>
                {selected._id &&
                    <tr>
                        <td><b>Id:</b></td>
                        <td>{selected._id}</td>
                    </tr>
                }
                {selected.name &&
                    <tr>
                        <td><b>Name:</b></td>
                        <td>{selected.name}</td>
                    </tr>

                }
                {selected.cropType &&
                    <tr>
                        <td>Crop Type:</td>
                        <td>{selected.cropType}</td>
                    </tr>
                }
                {selected.plantSeason &&
                    <tr>
                        <td>Plant Season:</td>
                        <td>{selected.plantSeason}</td>
                    </tr>
                }
                {selected.harvestSeason &&
                    <tr>
                        <td>Harvest Season:</td>
                        <td>{selected.harvestSeason}</td>
                    </tr>
                }
                {selected.lifeCycle &&
                    <tr>
                        <td>Life Cycle:</td>
                        <td>{selected.lifeCycle}</td>
                    </tr>
                }
            </div>
        );
    }
}
 
export default ViewCrop;