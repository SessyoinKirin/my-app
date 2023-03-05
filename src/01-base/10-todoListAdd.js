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
 * @LastEditTime: 2023-03-04 23:07:00
 * @FilePath: \my-app\src\01-base\10-todoListAdd.js
 * @Description: 17 - adicionar todolist
 * 19 - condições
 * 
 */
import React, { Component } from 'react'
import './css/01-index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

export default class App extends Component {
  myref = React.createRef()

  state = {
    list: [
    ]
  }
  render() {
    return (
      <div className={'bg-dark wrapper'}>
        <Navbar></Navbar>
        <div className={'container pt-5'}>
          <div className={'col-12 col-lg-6 mx-auto mt-5 p-5 border border-white rounded'}>
            <div>
              <div className={'input-group mb-3'}>
                <input ref={this.myref} placeholder="Add something important" className={'form-control'} />
                <button onClick={this.handleClick} className={'btn btn-outline-info rounded-0'}>Add</button>
              </div>
              <hr />
            </div>

            <ul className={'list-group mt-5 rounded-0'}>
              {
                this.state.list.map((item, index) => <li className={'list-group-item d-flex justify-content-between align-item-center border border-dark'} key={item.id}>
                  <span className={'fs-4'} dangerouslySetInnerHTML={{
                    __html: item.text
                  }}></span>
                  <button onClick={() => this.handleDelClick(index)} className={'btn btn-outline-dark rounded-0'}>Del</button>
                </li>)
              }
            </ul>

            <div className={this.state.list.length === 0 ? '' : 'hidden'}>
              <p className={'text-center text-white fs-3 mt-5'}>Congratulations, you finished all!!</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
  handleClick = () => {
    let newlist = [...this.state.list]
    newlist.push({
      id: Math.random() * 1000000000,
      text: this.myref.current.value
    })
    this.setState({
      list: newlist
    })
    this.myref.current.value = ""
  }

  handleDelClick(index) {
    console.log('del-click', index)

    let newlist = this.state.list.slice()

    newlist.splice(index, 1)

    this.setState({
      list: newlist
    })
  }
}


class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className={'navbar px-5 py-3 border-bottom'}>
          <div className={'container-fluid'}>
            <a href='' className={'navbar-brand text-white'}>Todo list application</a>
            <a target={'_blank'} href={'https://github.com/SessyoinKirin/my-app/blob/master/src/01-base/10-todoListAdd.js'} className={'aTag'}>
              <button className={'btn btn-outline-info'}
              >See Code</button></a>
          </div>
        </nav>
      </div>
    )
  }
}