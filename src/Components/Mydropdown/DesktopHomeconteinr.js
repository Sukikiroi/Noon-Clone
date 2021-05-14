import React from 'react'
import Homeofproduct2 from './Homeofproduct2'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root:{
        marginLeft:'70px',
        gridTemplateColumns:'auto auto auto  auto  auto auto   ',
        pading:'10px', 
        gridGap:'1rem',
        display:'grid', 
        justifyContent:'center',
        alignContent:'center',
        [theme.breakpoints.down('xs')]: {
            gridTemplateColumns:'auto auto ',
            display:'grid',
            alignContent:'center',
            justifyContent:'center',
            margin:'auto'
            
          },
    }
  }));
const Desktophomeconteinr = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
     <Homeofproduct2 Image={'https://k.nooncdn.com/t_desktop-thumbnail-v2/v1580295048/N33500326A_1.jpg'} />
     <Homeofproduct2 Image={'https://k.nooncdn.com/t_desktop-thumbnail-v2/v1583501228/N21686995A_1.jpg'}/>
     <Homeofproduct2 Image={'https://k.nooncdn.com/t_desktop-thumbnail-v2/v1605814220/N41044065A_1.jpg'}/>
     <Homeofproduct2 Image={'https://k.nooncdn.com/t_desktop-thumbnail-v2/v1603040855/N41247606A_1.jpg'}/>
     <Homeofproduct2 Image={'https://k.nooncdn.com/t_desktop-thumbnail-v2/v1603040774/N41247172A_1.jpg'}/>
     <Homeofproduct2 Image={'https://k.nooncdn.com/t_desktop-thumbnail-v2/v1580295048/N33500326A_1.jpg'} />
     <Homeofproduct2 Image={'https://k.nooncdn.com/t_desktop-thumbnail-v2/v1583501228/N21686995A_1.jpg'}/>
     <Homeofproduct2 Image={'https://k.nooncdn.com/t_desktop-thumbnail-v2/v1605814220/N41044065A_1.jpg'}/>
     <Homeofproduct2 Image={'https://k.nooncdn.com/t_desktop-thumbnail-v2/v1603040855/N41247606A_1.jpg'}/>
     <Homeofproduct2 Image={'https://k.nooncdn.com/t_desktop-thumbnail-v2/v1603040774/N41247172A_1.jpg'}/>
     <Homeofproduct2 Image={'https://k.nooncdn.com/t_desktop-thumbnail-v2/v1606407160/N32349681A_1.jpg'}/>
     <Homeofproduct2 Image={'https://k.nooncdn.com/t_desktop-thumbnail-v2/v1592221002/N38650144A_1.jpg'}/>
     <Homeofproduct2 Image={'https://k.nooncdn.com/t_desktop-thumbnail-v2/v1605814581/N40635116A_1.jpg'} />
     <Homeofproduct2 Image={'https://k.nooncdn.com/t_desktop-thumbnail-v2/v1606407160/N32349681A_1.jpg'}/>
     <Homeofproduct2 Image={'https://k.nooncdn.com/t_desktop-thumbnail-v2/v1592221002/N38650144A_1.jpg'}/>
     <Homeofproduct2 Image={'https://k.nooncdn.com/t_desktop-thumbnail-v2/v1605814581/N40635116A_1.jpg'} />
   
        </div>
    )
}

export default Desktophomeconteinr
