import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core'
import { Typography } from '@mui/material';





export default function DataGridPro() {

  const classes = makeStyles({
    rootClasses: {
      backgroundColor: "transparent",
      marginTop: '40px',
      color: '#fff !important',
      border: 'none !important',
      margin: '0px',
      padding: '0px',
      textTransform: 'capitalize',
      justifyContent: 'center',
      fontFamily: 'Roboto, sans-serif',
      fontSize: '16px !important',
      '& .MuiDataGrid-footerContainer': {
        display: 'none',
      },
      '& .MuiDataGrid-columnHeaderTitleContainer': {
        justifyContent: 'center',
        fontWeight: 900,
      },
      '& .MuiDataGrid-cell': {
        justifyContent: 'center',
      },
      '& svg': {
        display: 'none',
      },
    },
    status_text: {
      color: 'green',
      fontSize: '16px !important'
    },
    btns: {
      color: 'hsl(185deg 38% 51%)',
      textTransform: 'capitalize',
      fontSize: '16px !important',
    }
  })();

  function CustomButton() {
    return <Button classes={{ root: classes.btns}}>Report</Button>
  }

  function CustomStatus() {

    return <Typography classes={{ root: classes.status_text}}>Successful</Typography>
  }

  const columns = [
    {
      field: 'id',
      headerName: 'id',
      width: 150,
      hide: true,
    },
    {
      field: 'date',
      headerName: 'Date',
      width: 150,
    },
    {
      field: 'ipAdress',
      headerName: 'IP Adress',
      width: 150,
      editable: true,
    },
    {
      field: 'country',
      headerName: 'Country',
      width: 150,
      editable: true,
    },
    {
      field: 'city',
      headerName: 'City',
      type: 'number',
      width: 150,
      editable: true,
    },
    {
      field: 'device',
      headerName: 'Device',
      sortable: false,
      width: 150,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 150,
      renderCell: CustomStatus,
    },
    {
      field: '',
      width: 120,
      renderCell: CustomButton,
    },
  ];

  const rows = [
    { id: 1, date: Date().valueOf(), ipAdress: '192.0.2.10', country: 'country', city: 'Jon', device: 'Iphone 6s', status: 'true' },
    { id: 2, date: Date().valueOf(), ipAdress: '189.0.2.18', country: 'country', city: 'Jon', device: 'Iphone 6s', status: 'true' },
  ];

  return (
    <div style={{ height: '200px', width: '100%', color: '#fff !important', textAlign: 'center !important' }}>
      <DataGrid
        rows={rows}
        center
        columns={columns}
        classes={{ root: classes.rootClasses, }}
      />
    </div>
  );
}
