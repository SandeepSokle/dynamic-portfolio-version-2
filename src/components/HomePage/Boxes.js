 import './Boxes.css'
 const Boxes = ()=>{
    return(
        <div className='single-box-container'>
            <div className='img-container'><img alt="card info" src={process.env.PUBLIC_URL+"img/page-1.jpg"}></img></div>
            <div className='img-title-boxes'>Share You Resume Easy</div>
        </div>
    )
}
export default Boxes;