import { makeStyles } from "@material-ui/core/styles"

export const myStyles = makeStyles((theme) => ({
    tabs_wrapper: {
        margin: 'auto',
        color: '#fff',
    },
    btn_one: {
        border: 'none',
        marginRight: '3px',
        width: '100%',
        fontSize: '18px !important',
        textTransform: 'capitalize !important',
        [theme.breakpoints.down('sm')]: {
            fontSize: '16px',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '14px',
        }
    },
    tabs_style: {
        width: '135px',
        '& hr': {
            backgroundColor: '#fff',
            marginTop: '-5px',
        }
    },



    // Heading styleing

    card_grid_title: {
        color: '#fff',
        fontSize: '20px',
        fontWeight: 400,
    },
    
    // card designs

    card: {
        margin: '3% 3%',
        borderRadius: '4px',
        backgroundColor: 'hsl(220deg 7% 18%)',
        border: 'none',
        padding: '10px',
    },
    media: {
        width: '80px',
        margin: '20px auto',
    },
    card_title: {
        fontSize: '16px',
        fontWeight: 500,
        color: '#fff',
        fontFamily: "Montserrat, sans-serif"

    },
    card_discription: {
        marginTop: '10px',
        fontSize: '12px',
        color: '#fff'
    },
    more_btn: {
        color: 'hsl(192deg 40% 49%) !important',
        fontSize: '12px !important',
        marginTop: '20px !important',
    },
    enable_btn: {
        border: '3px solid hsl(185deg 38% 51%) !important',
        color: '#fff !important',
        fontSize: '12px !important',
        padding: '7px 14px !important ',
        fontFamily: "'Montserrat', sans-serif !important",
        margin: 'auto !important',
        marginTop: '15px !important',
    },

    // set Cards
    // Cards
    // Account Activity

    main_grid:{
        margin:'auto',
        textAlign:'center',
        padding:'4%',
    },
    card_wrapper:{
        marginTop:'50px',
    },
    card_grid_content:{
        color:'#fff',
        fontSize:'14px',
        lineHeight:'20px',
    },


    // setting

    page_title:{
        textAlign:'center',
        fontWeight:'400',
    },
    tabs:{
        textAlign:'center',
        marginBottom:'60px',
    },
    Dividers:{
        background:'gray'
    },
    // Tab page design
    body_wrapper:{
        backgroundColor:'#202225',
        width:"100%",
    },
    Tabs_wrapper:{
        color:'#fff !important',
        maxWidth:'1160px',
        padding:'10px 1.2%',
        margin:'auto',
        '& .MuiDivider-root':{
            backgroundColor:'gray',
        }
    }
}))