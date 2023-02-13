export const accordionStyles ={
    marginBottom: "20px",
    borderRadius: "10px",
    boxShadow: "0 5px 10px rgb(30 30 30 / 13%)",
    '&::before': {
      display: 'none',
    },

    '&:first-of-type':{
      borderRadius:'10px'
    },
    
    '&:last-of-type':{
      borderRadius:'10px'
    }
  };

export const summaryStyles = {
    minHeight: '60px',

    '& .css-yw020d-MuiAccordionSummary-expandIconWrapper':{
      flexShrink: 0,
      width: '35px',
      height: '35px',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '50%',
      fontSize: '2.5rem',
      fontWeight: 300,
      color: 'var(--third-color)',
      backgroundColor: 'var(--light-blue)'},

    '& .css-yw020d-MuiAccordionSummary-expandIconWrapper.Mui-expanded':{
      transform: 'rotate(0)',
      backgroundColor: 'var(--third-color)',
      color: 'var(--white-color)'
    },

    '& .css-ahj2mt-MuiTypography-root':{
      color: 'var(--dark-color)'
    },

    '& .minus' :{display:'none'},

    '&.Mui-expanded':{
      '& .minus':{display:'inline'},
      '& .plus':{display:'none'}
    }
  };

export const typographyStyle = {
    fontFamily: "'FiraSans', sans-serif",
    fontWeight: 300,
    color: '#505050',
    fontSize:' 0.85rem',
    '@media (min-width: 576px)':{
      fontWeight: 500,
    }
  }