import React from 'react';
import PageviewIcon from '@material-ui/icons/Pageview';
import InputAdornment from '@material-ui/core/InputAdornment';
const SearchBar = ({keyword,setKeyword}) => {
  const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem",marginTop:'-10px',marginRight:'40px',position:'relative',right:'50px'};
  return (
      <div>
    <input 
     style={BarStyling}
     key="random1"
     value={keyword}
     placeholder={"search country"}
    
     startAdornment={
        <InputAdornment position="end">
          <PageviewIcon />
        </InputAdornment>
      }

    />
    {/* <PageviewIcon     style={{position:'relative',left:'200px',bottom:'40px',fontSize:'40px'}}  />  */}
    </div>
  );
}

export default SearchBar