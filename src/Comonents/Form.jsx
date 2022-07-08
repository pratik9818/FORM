
import logo_1 from "./logo_1.png"
function Form() {
  return (
    <>
     
     <div className="card text-center" style={{border:"none"}}>

  


  <div className="card-body shadow-lg p-3 mb-5 bg-body rounded" style={{width:450,height:550, margin:"30px auto"}}>
  <div className='logo'style={{display:'flex', justifyContent:"center", marginBottom:-27, marginTop:-20}}><img src={logo_1} alt="" style={{width:100, height:80}}/></div>

  <div className="card" style={{ padding:10,width:400, margin:"auto", display:"flex", flexDirection:"column" ,border:"none"}}>
  <div className="heading" style={{fontSize:24, fontFamily:"Helvetica", marginTop:10,lineHeight:1, fontWeight:"bold" }}>It’s a delight to have you onboard</div>
   <div style={{fontSize:13 , marginTop:18}}><p>Help us know you better.</p>
                              <p style={{marginTop:-17}}>(This is how we optimize Wobot as per your business needs)</p>
 </div>
   </div>
   
   <div style={{display:"flex", width:360, margin:"auto"}}>
   <form >
  <div className="mb-3" style={{width:400, margin:"auto"}}>
    <label style={{marginLeft:-280 , padding:6,fontWeight:"lighter"}}>Company name</label>
    <input type="email" className="form-control input-sm shadow-none"placeholder='Enter Your Company Name' style={{width:360}} />

    <label style={{marginLeft:-330, marginTop:18,padding:6 , fontWeight:"lighter"}}>Industry</label>
    <select className="form-select form-select-md shadow-none" aria-label=".form-select-sm example" style={{width:360}}>
  <option selected>Select</option>
  <option value="1">IT</option>
  <option value="2">Auto</option>
  <option value="3">Energy</option>
  <option value="4">pharmaceutical</option>
</select>

<div><label style={{marginLeft:-287, marginTop:18,padding:6,fontWeight:"lighter"}}>Company size</label></div>
<div className="btn-group" role="group sm" aria-label="Basic radio toggle button group" style={{width:310, marginLeft:-73}}>
  <input  type="radio" className="btn-check " name="btnradio" id="btnradio1" autocomplete="off"/>
  <label className="btn btn-outline-primary btn-sm btn-light shadow-none " for="btnradio1" style={{marginRight:8, borderRadius:3, border:"none"}}>1-20</label>

  <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autocomplete="off"/>
  <label className="btn btn-outline-primary btn-sm btn-light shadow-none" for="btnradio2" style={{marginRight:8 , borderRadius:3, border:"none"}}>21-50</label>

  <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autocomplete="off"/>
  <label className="btn btn-outline-primary btn-sm btn-light shadow-none" for="btnradio3" style={{marginRight:8, borderRadius:3, border:"none"}}>51-200</label>

  <input type="radio" className="btn-check" name="btnradio" id="btnradio4" autocomplete="off"/>
  <label className="btn btn-outline-primary btn-sm btn-light shadow-none" for="btnradio4" style={{marginRight:8, borderRadius:3, border:"none"}}>201-500</label>

  <input type="radio" className="btn-check" name="btnradio" id="btnradio5" autocomplete="off"/>
  <label className="btn btn-outline-primary btn-sm btn-light shadow-none" for="btnradio5" style={{marginRight:8, borderRadius:3, border:"none"}}>500+</label>
</div>

  </div>
  <button type="submit" className="btn btn-primary btn-sm shadow-none" style={{width:355 , marginTop:20, marginLeft:-30, padding:5, marginBottom:18}}>Get Started</button>

</form>
</div>

  </div>



    

</div>
    </>
  )
}

export default Form
