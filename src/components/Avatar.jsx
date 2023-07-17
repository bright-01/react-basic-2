
export default function Avatar({image, isNew}) {
    return (
        <div className='avatar'>
            <img className="photo"
                 src={image}
                 alt="avatar"/>
            {
                isNew && <span className="newProfile">New</span>
            }
        </div>
    )
};