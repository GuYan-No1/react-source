import React from 'react';

export default class RefDemo extends React.Component {
  constructor() {
    super()
    this.objRef = React.createRef()

     // {current:null}
  }
  componentDidMount(){
    console.log(`span1：${this.refs.ref1.textContent}`);
    console.log(`span2：${this.refs.ref2.textContent}`);
    console.log(`span3：${this.refs.ref3.current.textContent}`);
    setTimeout(()=>{
      this.refs.stringRef.textContent = 'strinf ref got';
      this.methodRef.textContent = 'method ref got';
      this.objRef.current.textContent = 'obj ref got';
    },1000)
  }

  render(){
    return (
      <>
        <p ref='stringRef'>span1</p>
        <p ref={ele=>(this.mothodRef = ele)}>span3</p>
        <p ref={this.objRef}>span3</p>
      </>
    )
  }
}