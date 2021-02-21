import React, {Component}  from 'react';
import { DataGrid } from '@material-ui/data-grid';


export default class DataTable extends Component {

    render() {
        return (
            <div style={{ width: '100%' }}>
                <DataGrid rows={this.props.rows} columns={this.props.columns} autoHeight={true}/>
            </div>
        );
    }

}