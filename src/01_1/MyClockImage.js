import clock from './colock.png';

function MyClockImage(){
    return(
        <div style={{margin: "10px"}}>
            <img src={clock} alt='시계'
            style={{width: "300px", height: "300px"}} />
        </div>
    );
}

export default MyClockImage;