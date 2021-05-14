import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";
import Ordersumry from "./OrderSumry";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "400px",
 
    display: "flex",
    justifyContent: "center",
 
  },
  title1:{
    fontSize: '1.6667rem',
    fontWeight: 'bold',
    marginBottom: '15px',
    textTransform:'capitalize',
    color:'#404553'
  },
  title2:{
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginBottom: '15px',
    textTransform:'capitalize',
    color:'#404553'
  }
  ,
  root_payment: {
    width: "95%",
    height: "400px",
   
  },
  payment:{
    width: "100%",
    height: "700px", 
   
    display:'flex',
    flexDirection:'column'
  }
  ,
  ordersumry:{
    width: "100%",
    height: "500px", 
    backgroundColor:'  rgb(255, 255, 255)',
    display:'flex',
    justifyContent:'center'
   
  },
  paymethode:{
      height:'50px',
      width:'100%',
     
      display:'flex',
      justifyContent:'space-between'
  },
  paymethode_card:{
    height:'100%',
    width:'48%', 
    border:"2px solid dodgerblue",
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    '& img':{
        width:'40px',
        height:'40px'
    }
  }
  ,
  paymethode_cash:{
    height:'100%',
    width:'48%', 
    border:"1px solid rgb(178, 187, 210)",
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    '& img':{
        width:'35px',
        height:'35px'
    }
  },
  ordersumry_root:{
    width:'100%',
    height:'80%',
    display:'flex',
    justifyContent:'center',
  
  },
  placeorder_button:{
    width:'100%',
    height:'50px',
   justifyContent:'center',
   display:'flex',
    '& Button':{
     
      width:'100%',
      height:'100%',
      backgroundColor:'rgb(56, 102, 223)',
      textTransform: 'uppercase',
      color:'rgb(255, 255, 255)',
    },
    
  },
  card_info:{
    height:'200px',
    width:'100%',
    border:"1px solid rgb(178, 187, 210)",
    marginTop:'30px',
    marginBottom:'30px'
  },
  card_info_number:{
    width:'100%',
    height:'90px',
  
    padding:'10px 10px 0px 10px',
    display:'block',
    '& h3':{
      color:'  grey',
      fontFamily:'Times New Roman", Times, serif',
      marginBottom:'10px'
    }
  },
  card_info_number_input:{
    height:'60%',
    border:"1px solid rgb(178, 185, 210)",
    width:'100%',
    color:'grey',
    fontSize:'18px',
    padding:'0px 0px 0px 10px',
    marginTop:'10px'
  },
  card_info_number2:{
    width:'100%',
    height:'90px',
 
    marginTop:'10px',
    display:' flex'
  },
  card_info_number2_expiration_date:{
    width:'50%',
    height:'90px',
  
    padding:'0px 10px 0px 10px',
    '& h1':{
      fontSize:'18px',
      color:'grey',
      fontFamily:'Times New Roman", Times, serif',
    }
    
  }
}));
const Checkoutpayment = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.root_payment}>
          
      <Grid container >
        <Grid item xs={12} lg={7}>
        <div className={classes.payment}>
            <div className={classes.title1} > Payment</div>
            <div className={classes.title2}>PAYMENT METHOD</div>
   <div  className={classes.paymethode}>
<div  className={classes.paymethode_card}>
    <Button>
<img src= 'data:image/png;base64,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' alt="Logo" />
    <h1>Pay with card</h1>
    </Button>
</div>
 
<div  className={classes.paymethode_cash}>

    <img src= 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEBIQEBAQFhUVFRASFhYVFhUXFhYWFxYXFxUYGBcYHyggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy8lICU1LS8tLzU1Ky0tLS0tLS0tLS0tLS03LS0tLS0tLS0tLS0tLy0tLS0tLS0tLS01LS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYBAwQCB//EAD0QAAIBAQMHBwsDBQEBAAAAAAABAgMEBRESFSExQXGRBhQyUVKhsTNCU2FicoGSosHhE1TRIiNDgvDxsv/EABoBAQEBAAMBAAAAAAAAAAAAAAAEAwECBQb/xAA3EQACAQICBQkIAgMBAQAAAAAAAQIDEQQSITFRcfATFTJBgZGhsdEFFEJSU2HB4SIzNEPxkiP/2gAMAwEAAhEDEQA/APuIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPMpJLF6Eit3hyspQxjSi6jXrwXwe0zq1oU1ebsZVa1OkrzdizAp1Plo8f6rOsPVL+Ud9DlbZ5dPLjvi2vpxfcZRxlCXxd+gxjjsPL4u+68yxA4LPe1CfQrRfq1Pg9J2qSerBlEZKSuncqjJS0xdz0ADk5AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKfy0vJ4qzxeCwUp+vbFbtpUyQv+tl2mrL2sn5dH2I8+bxNRzqtvd2I+WxVR1K0pPctyMGQd11WB1ZYvorW+v1GUYuTsjGMXJ2RzOx1MFLIlg9KZinXqQ6MnHc34FqtVthSwUtvVsR4Vsoz1yj8Y/yUvDwTsp2fG4reGgpWjOz43ERQ5R2mP+Vv3oxZI0uWNRdOjGW55L+5sldtCeqMf9Xh4HNVuCHmzkt+D/g1SxMOjLjtNUsXDozv2+pL0OWFB9OM48JLu09xJWe+7PPo1Y7njF8GUupcNRdGUXxRyVbtqx1wfw0ndYzEx6Ub8fY0WOxMOlG/Z6eh9PhNPU09zxPZ8mi5w1OUeJ3We/rTDVWk/eUZeJpH2nH4otcdhrD2tD4otePofSwUWz8sqq6VOMvpfHSu4krNyxpPp05Q3NSX2fcUxx1CXxW3+urxKoe0MPL4rb0/PV4loBE2flBZp6qq/wBk4+JI068ZdGUXuaZRGpGXRaZTCpCfRaZtAB3O4AAAAAAAAAAAAAAANVaooxlJ6opt/BYm0iuUdfIs1V+pR4tJ9zZ1nLLFy2HSpPJFy2Js+duTbbettt73pCWOhHZdNnU6qjJYrBtr/wA9bRPv9GjsjH4Yt/c+dpUXOOZuyPmaWHc45m7Ih7Dc8paZ/wBMera/4Ja0V4UIKKXuxW00SvCc/wCmhB+89S+Busl3qLy5vKn1vUtxVCKWin38a+zvK6cUlal/6417loPFgsjxdWrplLUupHRUsFKWuEfho8DoMGypxSsUKnFRykfK54ebJx3PFGOZVo9Cvj6pR/8ASSB15KHUrbro6chDqVt10Rn61pjrpxluwx/74GVe2HTpOPxykSQYySWqT7bP9+IySWqT7bP9+JwxvGjLXJf7RErFQn5qfuvB9x0VLHTl0oRfw08Tknc9PzcqO5/ycNT60nx97nDjN9JJ+Hnc1VbhpvoykuDRy1bgl5s4vfijuzfVj0K8tzRjKtMdaU+CfcZunDrg1u/TMZUqb6UGt36IardVWPmY7tJzOE4bJx4liznKPlKLW54o2QvWlLW8N8TJ0aT1Stv4Rk6FFvRK2/hEHQvm0Q6NZ7npXBklQ5XV49KMZ71kvitHcdjs9Cp5sXu0Pu0mircdJ6sqPxxXeaRhXj0J+Prc1jDEQ0wn4/8ATss/LOD8pSkvdkpfZEnQ5SWaX+TJ95NfYq1W4H5s096wOOrc9VeanuaO6xWKjrV+z0NFi8XDpK/Z6H0ajaqc+hOL3NHQfJp0Jx1xmvXpXeb7PeleHQrSXqxbXB6DSPtPqnHjtNI+1tNpw7n+HY+pAoFn5WWiPTwn70VF92BI2flov8lFrdLHuaRRHH0JdbW9FUPaOHlrdt6LcCFsfKWz1GkptP1prv1Ez6yqFSM1eLuVwqQqK8HcyADudwVvlrVwowh2pN/L/wClkKLy1talWjCMk8iMk8NODeGjeSY2WWi/voI8fPLQl99Hf+jVycp6Zy9UV939jodNVLU1JJqOx6scF/JD2G8ZUouKWOLx14GbPecoynPDFyw26jyo1YKMYt9enjeePCrTUIxb67vjeWuKS0JGCuZ9n2V8zGfJ9n6mUe809pT71S2+DLGCuZ8n2fqYz5Ps/Ux7zT2j3qlt8GWMFcz5Ps/UxnyfZ+pj3mntHvVLb4MsQK7nyfZ+pmJ33PDQkn14tj3mntHvVLb4Msc5pLFtJdb0HNK8qK11I95Ua1Wc3jOcm/X/ANoNeS+tmMsXp0InljH8KLrStlOXRnF/H+ToKNUwaWCaw16ccTpsd41KejKcl1N+D2HMcUr/AMjvDGK/8u9FvNdSzQl0oRe9IgM+T7P1MZ8n2fqZq8RSet+Bq8VRehvwZKVLopPUmtzl9zXmycfJ1pL1NaCPz5Ps/UxnyfZ+pmbnQ4ujLPhv+JokMLTHap8E/sYzjUj06Et6eJwZ8n2fqYz5Ps/UxysFqm/PzHLU1qm+6/4JOnfFJ621vRuVKjVWOSpevDB8dZBVL3culTx36fsabJeMqblkrRJ44Y6gsRG9pO63fhj3mN7Saa3f9NFqp5M5R6m0az3a6rqTc9WJqxa16SJpXdiCSV3YzgWbkje8ozVnm24y0Rx816dG5laR6pycZRktaaa3p4o7UarpTU1wjvRrOlNTXV5H1oAH1OU+vykHypvJ0aOEHhOf9Ke1La958+LVy7f9yivZn4oq2B89j5uVZp9Wg+Z9o1HKu0+rQu5MGDOB13ZZP1KiWxaZbur4kkYuTsiKMXJ2RIWS5FKEZSlJNrHDQbcwQ7cuCOm9LQ4xjCHSk0lhsR45jW/cP5C/k6aeVRva3Glno8lTTyqF7a+GzTmCHblwQzBDty4I3cxrfuH8n5HMa37h/J+Rycfp+Xqc8lD6b8PU05gh25cEMwQ7cuCN3Ma37h/J+RzGt+4fyfkcnH6fl6jkofTfh6mnMEO3LghmCHblwRu5jW/cP5PyOY1v3D+T8jk4/T8vUclD6b8PU05gh25cEMwQ7cuCN3Ma37h/J+RzGt+4fyfkcnD6fl6jkofTfh6mnMEO3LghmCHblwRu5jW/cP5PyOY1v3D+T8jk4/T8vUclD6b8PU05gh25cEMwQ7cuCN3Ma37h/J+RzGt+4fyfkcnH6fl6jkofTfh6mnMEO3LghmCHblwRu5jW/cP5PyOY1v3D+T8jk4/T8vUclD6b8PU05gh25cEMwQ7cuCN3Ma37h/J+TVaqFaEXP9ZywwbWTho2hwglfk/L1OHTgld034epHXrdqpKLi208pPHY9hHltqwjXo6POWK9UkVSpTcW4tYNaGTV6ai7x1MlxFNQknHUzwDOAwMCcRR23RQy69KHW1wTxfcjkSJzkfRyrSn2Yyfx1I2oxzVIr7o2oQz1Yx2tF+AB9Nc+tzFL5deVpe7PxK0Wbl15Sl7s/Ej7ou2NSOXJvXhgeBiYOeIklxoR81ioOeJklxoRH2SxyqSwit72IslOELPT9S1vbJmK9qp0VkrDHZGOviaKNlnVkqlbRFdGH8s7QgqeiOmXguO/7GlOmqeiOmXguO/7GbvpOc3XmteiC6ltZJGEjJTGGVWKYQyqwAB2O4AAABqtVpjTjlSe5bX6kV22XrUnoTyY9S+7MalaNPXrMataNPXrLHUtEI9KcVvaR5haqb1VIvdJFTslJTqRi/Olgzoviyxp1MmOOGCenSY+8ytmtoJ1i5Zc2VW1ay1AqNlt1Sn0ZPDqelFiu+8I1V1SWtfddaNadeM9Gpm1LERqaNTOwAG5QAAADDRkAERTlzepkvycnofZZuvS7lVWXDDK7pI7q9FTi4yWKZGRnOzvCScqexrWieUVFZZdHy48CaUFFOMuj5fryIGpTcXhJNNbGYLVOnSrxx0P1rQ0Q95XV+nFzUsVilg1p0+smqYeUVdaUR1MNKKzLSiNRbeQ1Hys/cXi2VNF75I0smyx9qU5fVkr/wCTXARvWT2Xf4/Jt7Ohmrp7E3+PyToAPdPoil8uJJ1Ka2qMsfi/weeT/kn7zOTlTVyrVP2cFwjp72zs5P8Akn7zPEzZsVJ7zwVLNi5Pf4WR4uumnUqyaTaeh9WlkoR109Otv+7JI2o9Dv8AM1oL+Hf5mAZNFpt1OnonNJ9W07tpK7NW0ldm4GizW6nU0Qmm+radATT0oKSaujAqTUU5N4JLFmSL5QV8IKC856dyOtSWSLkdak8kXIhbda3Vm5PVsXUjpuy6/wBT+qTaj3v+ER+Bc6EFGMYrYkiKhDlJNyPPw1PlZtz0mijYqcMMIRT2PbjvPdazQn0oxe/WQMK8p2mLk3oeCWxYM33xXlCvGUX5q+Os35aGVu2hOxRy0MjeXQnYxed0ZKc6eOC1x6vWiJpVHFqUXg0XKlUUoqWxrEp9oSy5ZOrF4GOIpKDUo9ZhiqUYNSj1lqsNqVSCktzXU9pvIDk/XwqOGyS74lgKqM88LltGpykE3rMAyDU1MAyADAax0MyACHvKyxpuE4Yxbkk8HoOi/vIvfHxMX10Ye+vA9X75F74+JPJJKaWwlkklUS2IrJ9Nu6jkUqcOqKT34ae8+dXfRy6tOHXgvhjp7j6gaezY9KW5GvsqHTluX59AAD1T2D5rfOP61XHXly+5LXB5J+8zTyusqhXyl56ysPXqZuuDyT95nhQi44hp/c+epwcMTKL+4urpVt/3ZIkddXSrb/uySKKPR7/Mpo9Dv8zlvK0OnTclr0Jb2R0oU6EVKpHLqS06dPjqR3XtRcqTw1pqXA5rTZ+cQjODWKWDTM6t3J2Wmyt+TOrdydlpSVu/TY1QjTtEW4RyKkdKw0btWskbrtDqU05a1jF71/yOSyWfm8ZVJtYtYJI6LnouNLTrk2+OrwFNPMr62nf8HFJNSV9dnf8ADOwr1/yxq4dUV34liK5fsf73+sfuMV0DnF/19pGlusNdTpxkupJ79pUsDfZbVOm8Yvetj3ktCryb06iPD1eTlp1Mnp3bH9RVIvDTi1se44r8ss5TUoxbWCWg6bHe6m1GUWm3ho0okstY5OKx14bSvJTqRaj1vxLclOpFqPW/EpyqSSccZJbVi/A8YFrttgjUWlJPZLb+UVirScZOL1p4EdWi6ZDWoypvTpR7sUsKkH7S79BbSo2WP9yHvR8S3lGE1MpwXRZptNojTjlSx6tCxbZzXZa51JVMpYYOOC2redyRH3cv7tfejeV88dOj9FEr546dH6Zp51WmqlSEoqMHoi1jlJa9JsrXhJxpKngpVMdL05PWc9CsqVOpSnolpUV2sVgsA6LpqzzknhHKyvVldfEwU5W17/tp8NBOpytr3/bT4aPK52WS0TVWVGo02kpKSWGK9aO4jbNL9S0OpHTFLJx2N4Ikzek7p72U0ndPZd23EdfXRh768GZv3yL3x8TF89GHvrwZ6vzyL3x8TpP49y8jKf8As3LyOHkpRyrVF9lSl9OC8S/lK5F+Wl7r+xdSr2erUb/d+hZ7NilQvtbAALj0Cn8tvKUt0/FGvk/5N+8zZy28pS3T8TzcPkn7zPHl/ly46keJL/Mlx1IxdXSre992SJH3V0q2/wC7JA70uh3+Z3o9Dv8AMHFVu2LeVCUoP2TtB3lFS1neUYy1o46d2xxypylN+0zsAOIxUdQjCMdSBDcoKPRnvi/sTJqtdBVIOL26vU9hxVhmg0dasM8HEqtnpZU4x62lxZPV7op5DUU1LDQ8XpfrILBwl1OL70Wqy2hTipL4rqfUS4aMJXUlp48iPCxhK6ktJWbuX92nvj4nRygx/WTTweStK3kjO7MKsakGsMpSa8cDzeF3yqVE1glgk3+DjkpKm4260ORmqTjbTdHVdlZzpRlLXpT9eDwIa+4/3n61F9xPU4Rpww1RiisWytlzlLrejdsO+I0U1F6/Q74l2pqLen0N1z0cqqn2cZFlOG57LkQxfSlp3LYjuNaEMsNJth4OENPXp47AMADY3MPcZAACQAAI++ujD314M9X75F74+J5vrVT97+T1ffkXvj4mE/j3Inqf7Ny8jVyL8tP3X9i6lM5GeWn7r+xcyvAf0re/Mt9nf0LewAC0uKhy18pS3T8TVcU1kOOKxxbwx08Ddy08pS3T8UVxHh155MTKXGpHz+IqcniZStxZE/VsU4Sc6MtbxcXt+JusdtU/6WsmS1xf2I6wXq1hGppXXtX8khbbIqiU4PCS0prad4STWan2r02GkJJrNT7V6bDsBy3fa8tNS0Tjoa+51m8ZKSuimMlJXRgGQcnJgGQAcF5Xf+p/VHRJd5CU6k6UtGMXtT270Wo1V7PGawlFMwqUMzzRdmTVcPmeaLsyPsl7ZUoxlDS2limbrfeP6bycnF4Y69B4d0RTTjKSa0rUxUutTllTqSb+COFy2W3Xt0HH/wB1G3Xt0ETa7ZOpoerZFf8AaTvuy7Gmp1F61H7skbPYoQ6MdPW9LOgQoac03dinh/5ZqjuzAMgoKjAMgAwDIAMEfXt0pSyKKxe2WxGLZWlUn+jTejz5dS2I3t06EOpd8mZOTldLQlrfp+TGUnK6Tslrf4X5NVC7FjlVG5S16dRqvm0wdNwUk3itC06mR1st86m3CPUvv1nJgSzrRScYLXxwyOdeKTjBa+vbxtJ7kb5afusuZTeR3lp+6/FFyPTwH9K3vzPW9nf0LewAC0uKjy18pS92fiiuFv5X2RypxqxWORjle69vwZUUeDjYtVnfrPnsfBqvJvr0+BglLmtmS/05PQ9Xqf8ABGhMnhNwd0Swm4SzInbwg6c41o9eEl1rZ/24952p+1wPVG8abisqSxwWKfWeufUe1HgXXV7xktPG09C6u3GSV+NprztT9rgM7U/a4Gzn1HtR4Dn1HtR4HOaXzrjtOc0vnXHaa87U/a4DO1P2uBs59R7UeA59R7UeAzS+dcdozS+dcdprztT9rgM7U/a4Gzn1HtR4Dn1HtR4DNL51x2jNL51x2mvO1P2uAztT9rgbOfUe1HgOfUe1HgM0vnXHaM0vnXHaa87U/a4DO1P2uBs59R7UeA59R7UeAzS+dcdozS+dcdprztT9rgM7U/a4Gzn1HtR4Dn1HtR4DNL51x2jNL51x2mvO1P2uAztT9rgbOfUe1HgOfUe1HgM0vnXHaM0vnXHaa87U/a4Guve0cl5GVlbMUdHPqPajwHPqPajwDcvnXHaHKVumuO0xYqKpU8Za+lJ+BBW20upLKerYupEle1ujKCjCWOL07l/3cQ5NXmtEI6kS4ia0QjqR5B6BOTE7yO8tP3X9i5FZ5G2RqM6zWClhGPrS1vdj4FmPdwUXGir9ek+hwEXGgr9d33gAFZYecMVpKtefJfS5WeSSenIlq/1f2LWDOrRhVVpIyq0YVVaaKC7htS/xL4Sj/JjMVq9D3xL+CTm+ltZJzbS2soGYrV6HviMx2r0PfEv4HN9Lazjm2ltZQMx2r0PfEZjtXoe+JfwOb6W1jm2ltZQMxWr0PfEZjtXoe+JfwOb6W1jm2ltZQMx2r0PfEZjtXoe+JfwOb6W1jm2ltZQMx2r0PfEZjtXoe+JfwOb6W1jm2ltZQMxWr0PfEZjtXoe+JfwOb6W1jm2ltZQMx2r0PfEZjtXoe+JfwOb6W1jm2ltZQMx2r0PfEZitXoe+JfwOb6W1jm2ltZQMx2r0PfEZjtXoe+JfwOb6W1jm2ltZQMx2r0PfEZjtXoe+JfwOb6W1jm2ltZQFcNq9F9Uf5JK7uS0m1K0SWC8yO3fL+C2g7wwNKLvrO8PZ9GLvr3niEEkkkkloSWxHsAsLgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//2Q== ' alt="Logo" />
   <h1>Pay with cash </h1>
  
</div>

   </div>
    
<div className={classes.card_info}>

<div className={classes.card_info_number}>

<h3>CARD NUMBER</h3>
<input className={classes.card_info_number_input} type='text' placeholder='... ... ... ...'/>

</div>
<div className={classes.card_info_number2}>
<div  className={classes.card_info_number2_expiration_date}>
  <h1>  Expiration date</h1>

  
  </div>
<div  className={classes.card_info_number2_expiration_date}>
<h1>  cvv</h1> </div>

</div>
</div>

 <div className={classes.placeorder_button}>
<Button> Place Order</Button>
</div>
        </div>
      
        </Grid>
        <Grid item xs={12} lg={5}>
        <div className={classes.ordersumry}>
      <div className={classes.ordersumry_root}>

            <Ordersumry/>

      </div>
        </div>
        </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Checkoutpayment;
