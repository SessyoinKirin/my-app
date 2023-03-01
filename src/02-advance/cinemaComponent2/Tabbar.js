/*
 * @Author: SessyoinChen
 * @Date: 2022-08-03 20:42:15
 * @LastEditors: SessyoinChen
 * @LastEditTime: 2022-08-04 21:02:45
 * @FilePath: \my-app\src\02-advance\cinemaComponent2\Tabbar.js
 * @Description: 35 - cards não controlados
 * 
 */
// import React, { Component } from 'react'

// export default class Tabbar extends Component {
//     state={
        
//         // current:this.props.defaultValue
//     }
//   render() {
//     return (
//       <div>
//         <ul>
//             {
//                 this.props.list.map((item, index)=><li key={item.id} className={
//                     this.props.current===index?'active':''
//                 } onClick={()=>{
//                     this.handleClick(index)
//                 }}>
//                     {item.text}
//                 </li>)
//             }
//         </ul>
//       </div>
//     )
//   }

//   handleClick(index){
//     // this.setState({
//     //     current:index
//     // })

//     this.props.event(index)
//   }
// }

const Tabbar =(props)=>{

    // function handleClick(index){
    //     props.event(index)
    //   }

    return (
        <div>
        <ul>
            {
                props.list.map((item, index)=><li key={item.id} className={
                    props.current===index?'active':''
                } onClick={()=>props.event(index)}>
                    {item.text}
                </li>)
            }
        </ul>
      </div>
    )
}

export default Tabbar