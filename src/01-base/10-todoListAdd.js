/*
 *                        ::
 *                       :;J7, :,                        ::;7:
 *                       ,ivYi, ,                       ;LLLFS:
 *                       :iv7Yi                       :7ri;j5PL
 *                      ,:ivYLvr                    ,ivrrirrY2X,
 *                      :;r@Wwz.7r:                :ivu@kexianli.
 *                     :iL7::,:::iiirii:ii;::::,,irvF7rvvLujL7ur
 *                    ri::,:,::i:iiiiiii:i:irrv177JX7rYXqZEkvv17
 *                 ;i:, , ::::iirrririi:i:::iiir2XXvii;L8OGJr71i
 *               :,, ,,:   ,::ir@mingyi.irii:i:::j1jri7ZBOS7ivv,
 *                  ,::,    ::rv77iiiriii:iii:i::,rvLq@huhao.Li
 *              ,,      ,, ,:ir7ir::,:::i;ir:::i:i::rSGGYri712:
 *            :::  ,v7r:: ::rrv77:, ,, ,:i7rrii:::::, ir7ri7Lri
 *           ,     2OBBOi,iiir;r::        ,irriiii::,, ,iv7Luur:
 *         ,,     i78MBBi,:,:::,:,  :7FSL: ,iriii:::i::,,:rLqXv::
 *         :      iuMMP: :,:::,:ii;2GY7OBB0viiii:i:iii:i:::iJqL;::
 *        ,     ::::i   ,,,,, ::LuBBu BBBBBErii:i:i:i:i:i:i:r77ii
 *       ,       :       , ,,:::rruBZ1MBBqi, :,,,:::,::::::iiriri:
 *      ,               ,,,,::::i:  @arqiao.       ,:,, ,:::ii;i7:
 *     :,       rjujLYLi   ,,:::::,:::::::::,,   ,:i,:,,,,,::i:iii
 *     ::      BBBBBBBBB0,    ,,::: , ,:::::: ,      ,,,, ,,:::::::
 *     i,  ,  ,8BMMBBBBBBi     ,,:,,     ,,, , ,   , , , :,::ii::i::
 *     :      iZMOMOMBBM2::::::::::,,,,     ,,,,,,:,,,::::i:irr:i:::,
 *     i   ,,:;u0MBMOG1L:::i::::::  ,,,::,   ,,, ::::::i:i:iirii:i:i:
 *     :    ,iuUuuXUkFu7i:iii:i:::, :,:,: ::::::::i:i:::::iirr7iiri::
 *     :     :rk@Yizero.i:::::, ,:ii:::::::i:::::i::,::::iirrriiiri::,
 *      :      5BMBBBBBBSr:,::rv2kuii:::iii::,:i:,, , ,,:,:i@petermu.,
 *           , :r50EZ8MBBBBGOBBBZP7::::i::,:::::,: :,:,::i;rrririiii::
 *               :jujYY7LS0ujJL7r::,::i::,::::::::::::::iirirrrrrrr:ii:
 *            ,:  :@kevensun.:,:,,,::::i:i:::::,,::::::iir;ii;7v77;ii;i,
 *            ,,,     ,,:,::::::i:iiiii:i::::,, ::::iiiir@xingjief.r;7:i,
 *         , , ,,,:,,::::::::iiiiiiiiii:,:,:::::::::iiir;ri7vL77rrirri::
 *          :,, , ::::::::i:::i:::i:i::,,,,,:,::i:i:::iir;@Secbone.ii:::
 * 
 * @Author: SessyoinChen
 * @Date: 2022-07-24 14:40:08
 * @LastEditors: SessyoinChen
 * @LastEditTime: 2022-07-24 20:44:09
 * @FilePath: \my-app\src\01-base\10-todoListAdd.js
 * @Description: 17 - adicionar todolist
 * 19 - condições
 * 
 */
import React, { Component } from 'react'
import './css/01-index.css'

export default class App extends Component {
    myref = React.createRef()

    state={
        list:[{
            id:1,
            text:"aaa"
        },
        {
            id:2,
            text:"bbb"
        },
        {
            id:3,
            text:"ccc"
        }
    ]
    }
  render() {
    return (
      <div>
        <input ref={this.myref}/>
        <button onClick={this.handleClick}>add1</button>
        <ul>
            {
                this.state.list.map((item, index)=><li key={item.id}>
                    {/* {item.text} */}
                {/* <button onClick={this.handleDelClick.bind(this, index)}>del</button> */}

                <span dangerouslySetInnerHTML= {{
                    __html:item.text
                }}></span>
                <button onClick={()=>this.handleDelClick(index)}>del</button>
                </li>)
            }
        </ul>
        

    {/* {this.state.list.length===0?<div>Congratulations, you exterminated all!!</div>:null} */}

    {/* {this.state.list.length===0 && <div>Congratulations, you exterminated all!!</div>} */}

    <div className={this.state.list.length===0?'':'hidden'}>
    Congratulations, you exterminated all!!
    </div>
      </div>
    )
  }
  handleClick=()=>{
    console.log(this.myref.current.value)


    let newlist = [...this.state.list]
    newlist.push({
        id:Math.random()*1000000000,
        text: this.myref.current.value
    })
    // this.state.list.push(this.myref.current.value)

    this.setState({
        list: newlist
    })

    //esvaziar input:
    this.myref.current.value = ""
  }

  handleDelClick(index){
    console.log('del-click', index)

    let newlist = this.state.list.slice()

    newlist .splice(index, 1)

    this.setState({
        list:newlist
    })
  }
}
